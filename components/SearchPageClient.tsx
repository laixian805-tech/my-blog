'use client'

import { Fragment, type ReactNode, useDeferredValue, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import {
  SEARCH_INDEX_PUBLIC_PATH,
  type SearchIndexItem,
  type SearchIndexPayload,
  type SearchSection,
} from '@/lib/search-index'
import { withSitePath } from '@/lib/sitePath'

type SearchResultItem = SearchIndexItem & {
  score: number
  snippet: string
}

type SearchTab = 'all' | SearchSection
type SearchIndexStatus = 'idle' | 'loading' | 'ready' | 'error'

const exampleQueries = ['FastAPI', 'GitHub Pages', 'OWASP', 'VulnHub', 'SQLi']

const sectionMeta: Record<SearchSection, { label: string; badgeClassName: string }> = {
  blog: {
    label: 'Blog',
    badgeClassName:
      'bg-sky-50 text-sky-700 ring-1 ring-sky-100 dark:bg-sky-500/12 dark:text-sky-200 dark:ring-sky-500/20',
  },
  security: {
    label: 'Security',
    badgeClassName:
      'bg-rose-50 text-rose-700 ring-1 ring-rose-100 dark:bg-rose-500/12 dark:text-rose-200 dark:ring-rose-500/20',
  },
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function normalizeKeyword(keyword: string) {
  return keyword.trim().toLowerCase()
}

function tokenize(keyword: string) {
  return normalizeKeyword(keyword)
    .split(/\s+/)
    .map((token) => token.trim())
    .filter(Boolean)
}

function countOccurrences(text: string, token: string) {
  if (!token) return 0

  let count = 0
  let startIndex = 0

  while (startIndex < text.length) {
    const hitIndex = text.indexOf(token, startIndex)

    if (hitIndex === -1) {
      break
    }

    count += 1
    startIndex = hitIndex + token.length
  }

  return count
}

function buildSnippet(source: string, tokens: string[]) {
  const cleanedSource = source.replace(/\s+/g, ' ').trim()

  if (!cleanedSource) {
    return ''
  }

  const loweredSource = cleanedSource.toLowerCase()
  const hitIndexes = tokens
    .map((token) => loweredSource.indexOf(token))
    .filter((index) => index >= 0)

  if (hitIndexes.length === 0) {
    return cleanedSource.slice(0, 140)
  }

  const firstHit = Math.min(...hitIndexes)
  const snippetStart = Math.max(0, firstHit - 32)
  const snippetEnd = Math.min(cleanedSource.length, firstHit + 108)
  const prefix = snippetStart > 0 ? '...' : ''
  const suffix = snippetEnd < cleanedSource.length ? '...' : ''

  return `${prefix}${cleanedSource.slice(snippetStart, snippetEnd).trim()}${suffix}`
}

function highlightText(text: string, tokens: string[]) {
  if (!text || tokens.length === 0) {
    return text
  }

  const uniqueTokens = Array.from(new Set(tokens)).sort((left, right) => right.length - left.length)
  const pattern = uniqueTokens.map((token) => escapeRegExp(token)).join('|')

  if (!pattern) {
    return text
  }

  const matcher = new RegExp(`(${pattern})`, 'gi')
  const parts = text.split(matcher)

  return parts.map((part, index) => {
    const isMatch = uniqueTokens.some((token) => token.toLowerCase() === part.toLowerCase())

    if (!isMatch) {
      return <Fragment key={`${part}-${index}`}>{part}</Fragment>
    }

    return (
      <mark
        key={`${part}-${index}`}
        className="rounded bg-amber-100 px-1 py-0.5 text-inherit dark:bg-amber-400/30"
      >
        {part}
      </mark>
    )
  })
}

function scoreItem(item: SearchIndexItem, query: string, tokens: string[]) {
  if (!query || tokens.length === 0) {
    return 0
  }

  if (!tokens.every((token) => item.searchText.includes(token))) {
    return 0
  }

  const loweredTitle = item.title.toLowerCase()
  const loweredSummary = (item.summary || '').toLowerCase()
  const loweredPath = item.path.toLowerCase()
  const loweredExcerpt = item.excerptSource.toLowerCase()
  let score = 0

  if (loweredTitle.includes(query)) score += 180
  if (loweredSummary.includes(query)) score += 90
  if (loweredExcerpt.includes(query)) score += 40
  if (loweredPath.includes(query)) score += 25

  tokens.forEach((token) => {
    score += countOccurrences(loweredTitle, token) * 36
    score += countOccurrences(loweredSummary, token) * 16
    score += Math.min(24, countOccurrences(loweredExcerpt, token) * 4)
    score += countOccurrences(loweredPath, token) * 8
  })

  if (tokens.length > 1) {
    score += 18
  }

  const ageDays = Math.max(
    0,
    Math.floor((Date.now() - new Date(item.date).getTime()) / (1000 * 60 * 60 * 24))
  )
  score += Math.max(0, 10 - Math.floor(ageDays / 120))

  return score
}

function buildResults(items: SearchIndexItem[], keyword: string) {
  const query = normalizeKeyword(keyword)
  const tokens = tokenize(query)

  if (!query || tokens.length === 0) {
    return []
  }

  return items
    .map((item) => {
      const score = scoreItem(item, query, tokens)

      if (score <= 0) {
        return null
      }

      const snippetSource = `${item.summary || ''} ${item.excerptSource}`.trim()

      return {
        ...item,
        score,
        snippet: buildSnippet(snippetSource, tokens),
      }
    })
    .filter((item): item is SearchResultItem => Boolean(item))
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score
      }

      return new Date(right.date).getTime() - new Date(left.date).getTime()
    })
}

function TabButton({
  label,
  count,
  active,
  onClick,
}: {
  label: string
  count: number
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
        active
          ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950'
          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-gray-800 dark:text-slate-300 dark:hover:bg-gray-700'
      }`}
      aria-pressed={active}
    >
      <span>{label}</span>
      <span
        className={`rounded-full px-2 py-0.5 text-xs ${
          active
            ? 'bg-white/20 text-white dark:bg-slate-900/10 dark:text-slate-950'
            : 'bg-white text-slate-500 dark:bg-gray-900 dark:text-slate-400'
        }`}
      >
        {count}
      </span>
    </button>
  )
}

function EmptyQueryState() {
  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)]">
      <div className="rounded-[28px] border border-dashed border-slate-300 bg-white px-6 py-7 dark:border-gray-700 dark:bg-gray-950/60">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          从关键词直接找内容
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          这里会同时搜索 Blog 和 Security 两个内容区，优先匹配标题和摘要，再补充正文片段。
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {exampleQueries.map((query) => (
            <Link
              key={query}
              href={`/search/?q=${encodeURIComponent(query)}`}
              className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:bg-gray-800 dark:text-slate-200 dark:hover:bg-gray-700"
            >
              {query}
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-slate-50/80 px-6 py-7 dark:border-gray-800 dark:bg-gray-900/70">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">搜索建议</h3>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          <li>优先搜索技术词、框架名、漏洞名、靶场名，例如 `FastAPI`、`OWASP`、`VulnHub`。</li>
          <li>如果关键词较长，可以先缩短成 1 到 3 个核心词，再逐步细化。</li>
          <li>找不到结果时，可以试试英文写法、中文别名，或者去 `Nav` 页面继续浏览。</li>
        </ul>
      </div>
    </div>
  )
}

function LoadingState() {
  return (
    <div className="rounded-[28px] border border-dashed border-slate-300 bg-white px-6 py-10 dark:border-gray-700 dark:bg-gray-950/60">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        正在加载搜索索引
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        搜索逻辑已经保留不变，这里只是在首次查询时按需加载索引文件。
      </p>
    </div>
  )
}

function SearchIndexErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="rounded-[28px] border border-dashed border-rose-300 bg-white px-6 py-10 dark:border-rose-900/60 dark:bg-gray-950/60">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        搜索索引加载失败
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        请检查静态资源是否已经完成构建，或者刷新页面后重试。
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-5 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-600 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
      >
        重试
      </button>
    </div>
  )
}

function NoResultsState({ query }: { query: string }) {
  return (
    <div className="rounded-[28px] border border-dashed border-slate-300 bg-white px-6 py-10 dark:border-gray-700 dark:bg-gray-950/60">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        没有找到和 “{query}” 完全相关的内容
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        可以试试更短的关键词、英文写法，或者直接从下面这些常用搜索词开始。
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {exampleQueries.map((nextQuery) => (
          <Link
            key={nextQuery}
            href={`/search/?q=${encodeURIComponent(nextQuery)}`}
            className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:bg-gray-800 dark:text-slate-200 dark:hover:bg-gray-700"
          >
            {nextQuery}
          </Link>
        ))}
      </div>
    </div>
  )
}

function SearchResultCard({ item, tokens }: { item: SearchResultItem; tokens: string[] }) {
  return (
    <article className="rounded-[28px] border border-gray-200 bg-white px-6 py-5 shadow-sm transition hover:border-sky-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950/70 dark:hover:border-sky-500/60">
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${sectionMeta[item.section].badgeClassName}`}
        >
          {sectionMeta[item.section].label}
        </span>
        <time dateTime={item.date} className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {formatDate(item.date, siteMetadata.locale)}
        </time>
      </div>

      <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        <Link href={`/${item.path}`}>{highlightText(item.title, tokens)}</Link>
      </h2>

      <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
        {highlightText(item.snippet || item.summary || item.excerptSource.slice(0, 140), tokens)}
      </p>

      <div className="mt-4 text-xs text-slate-400 dark:text-slate-500">{item.path}</div>
    </article>
  )
}

export default function SearchPageClient() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')?.trim() ?? ''
  const deferredKeyword = useDeferredValue(query)
  const [activeTab, setActiveTab] = useState<SearchTab>('all')
  const [searchIndex, setSearchIndex] = useState<SearchIndexPayload | null>(null)
  const [searchIndexStatus, setSearchIndexStatus] = useState<SearchIndexStatus>('idle')

  useEffect(() => {
    setActiveTab('all')
  }, [query])

  useEffect(() => {
    if (!query || searchIndex || searchIndexStatus === 'loading') {
      return
    }

    const controller = new AbortController()

    setSearchIndexStatus('loading')

    fetch(withSitePath(SEARCH_INDEX_PUBLIC_PATH), {
      signal: controller.signal,
      cache: 'force-cache',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Search index request failed with status ${response.status}.`)
        }

        return response.json() as Promise<SearchIndexPayload>
      })
      .then((payload) => {
        setSearchIndex(payload)
        setSearchIndexStatus('ready')
      })
      .catch((error) => {
        if (controller.signal.aborted) {
          return
        }

        console.error('Failed to load search index.', error)
        setSearchIndexStatus('error')
      })

    return () => {
      controller.abort()
    }
  }, [query, searchIndex, searchIndexStatus])

  const blogResults = useMemo(
    () => buildResults(searchIndex?.blogIndex ?? [], deferredKeyword),
    [searchIndex, deferredKeyword]
  )
  const securityResults = useMemo(
    () => buildResults(searchIndex?.securityIndex ?? [], deferredKeyword),
    [searchIndex, deferredKeyword]
  )
  const allResults = useMemo(
    () =>
      [...blogResults, ...securityResults].sort((left, right) => {
        if (right.score !== left.score) {
          return right.score - left.score
        }

        return new Date(right.date).getTime() - new Date(left.date).getTime()
      }),
    [blogResults, securityResults]
  )
  const tokens = useMemo(() => tokenize(deferredKeyword), [deferredKeyword])

  const resultCounts = {
    all: allResults.length,
    blog: blogResults.length,
    security: securityResults.length,
  }

  const visibleResults =
    activeTab === 'all' ? allResults : activeTab === 'blog' ? blogResults : securityResults
  const isWaitingForIndex = Boolean(query) && !searchIndex && searchIndexStatus !== 'error'

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-8 py-10">
        {!query ? (
          <EmptyQueryState />
        ) : searchIndexStatus === 'error' ? (
          <SearchIndexErrorState onRetry={() => setSearchIndexStatus('idle')} />
        ) : isWaitingForIndex ? (
          <LoadingState />
        ) : allResults.length === 0 ? (
          <NoResultsState query={query} />
        ) : (
          <>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50/80 px-6 py-5 dark:border-gray-800 dark:bg-gray-900/70">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">当前关键词</p>
              <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                {query}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                共找到 {allResults.length} 条结果，其中 Blog {blogResults.length} 条，Security{' '}
                {securityResults.length} 条。
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <TabButton
                label="全部"
                count={resultCounts.all}
                active={activeTab === 'all'}
                onClick={() => setActiveTab('all')}
              />
              <TabButton
                label="Blog"
                count={resultCounts.blog}
                active={activeTab === 'blog'}
                onClick={() => setActiveTab('blog')}
              />
              <TabButton
                label="Security"
                count={resultCounts.security}
                active={activeTab === 'security'}
                onClick={() => setActiveTab('security')}
              />
            </div>

            {visibleResults.length === 0 ? (
              <div className="rounded-[28px] border border-dashed border-slate-300 bg-white px-6 py-10 text-sm text-slate-500 dark:border-gray-700 dark:bg-gray-950/60 dark:text-slate-400">
                当前筛选下没有结果，可以切换到其他分类继续查看。
              </div>
            ) : (
              <div className="space-y-4">
                {visibleResults.map((item) => (
                  <SearchResultCard
                    key={`${item.section}-${item.path}`}
                    item={item}
                    tokens={tokens}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
