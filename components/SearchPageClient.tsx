'use client'

import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

type SearchIndexItem = {
  title: string
  summary?: string
  date: string
  path: string
  searchText: string
}

type SearchPageClientProps = {
  blogIndex: SearchIndexItem[]
  securityIndex: SearchIndexItem[]
}

type SearchResultItem = Omit<SearchIndexItem, 'searchText'>

function filterResults(items: SearchIndexItem[], keyword: string): SearchResultItem[] {
  if (!keyword) return []

  return items
    .filter((item) => item.searchText.includes(keyword))
    .map(({ searchText, ...item }) => item)
}

function ResultGroup({
  title,
  description,
  items,
}: {
  title: string
  description: string
  items: SearchResultItem[]
}) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">{description}</p>
      </div>
      {items.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-gray-300 px-6 py-10 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
          这一组没有匹配结果。
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <article
              key={item.path}
              className="rounded-3xl border border-gray-200 bg-white px-6 py-5 shadow-sm dark:border-gray-800 dark:bg-gray-950/70"
            >
              <time
                dateTime={item.date}
                className="text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                {formatDate(item.date, siteMetadata.locale)}
              </time>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                <Link href={`/${item.path}`}>{item.title}</Link>
              </h3>
              {item.summary && (
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {item.summary}
                </p>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default function SearchPageClient({ blogIndex, securityIndex }: SearchPageClientProps) {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')?.trim() ?? ''
  const keyword = query.toLowerCase()

  const blogResults = useMemo(() => filterResults(blogIndex, keyword), [blogIndex, keyword])
  const securityResults = useMemo(
    () => filterResults(securityIndex, keyword),
    [securityIndex, keyword]
  )

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-3 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          搜索
        </h1>
        <p className="max-w-3xl text-base leading-7 text-gray-500 dark:text-gray-400">
          搜索范围覆盖普通博客文章和 Security 区笔记，支持标题、摘要和正文内容匹配。
        </p>
      </div>

      <div className="space-y-10 py-10">
        {!query ? (
          <div className="rounded-3xl border border-dashed border-gray-300 px-6 py-12 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
            请输入关键词开始搜索，例如 FastAPI、Gemini、owasp、pikachu、sqli。
          </div>
        ) : (
          <>
            <div className="rounded-3xl border border-gray-200 bg-gray-50/80 px-6 py-5 dark:border-gray-800 dark:bg-gray-900/70">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">当前关键词</p>
              <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {query}
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                共找到 {blogResults.length + securityResults.length} 条结果，其中 Blog{' '}
                {blogResults.length} 条，Security {securityResults.length} 条。
              </p>
            </div>

            <ResultGroup
              title="Blog"
              description="普通开发与知识笔记搜索结果"
              items={blogResults}
            />
            <ResultGroup
              title="Security"
              description="靶场、漏洞与网安学习笔记搜索结果"
              items={securityResults}
            />
          </>
        )}
      </div>
    </div>
  )
}
