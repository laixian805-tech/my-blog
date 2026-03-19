import { Suspense } from 'react'
import { allBlogs, allSecurityNotes } from 'contentlayer/generated'
import { sortPosts } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import SearchPageClient from '@/components/SearchPageClient'

type SearchSection = 'blog' | 'security'

export type SearchIndexItem = {
  title: string
  summary?: string
  date: string
  path: string
  searchText: string
  excerptSource: string
  section: SearchSection
}

export const metadata = genPageMetadata({
  title: '搜索',
  description: '搜索站内博客文章与网安笔记。',
})

function cleanSearchText(raw: string) {
  return raw
    .replace(/\s+/g, ' ')
    .replace(/[`*_>#-]/g, ' ')
    .replace(/[()[\]{}]/g, ' ')
    .slice(0, 1600)
    .trim()
}

function buildSearchIndex(
  items: Array<{
    title: string
    summary?: string
    date: string
    path: string
    body: { raw: string }
  }>,
  section: SearchSection
) {
  return items.map((item) => {
    const excerptSource = cleanSearchText(item.body.raw)

    return {
      title: item.title,
      summary: item.summary,
      date: item.date,
      path: item.path,
      section,
      excerptSource,
      searchText: `${item.title} ${item.summary || ''} ${excerptSource}`.toLowerCase(),
    }
  })
}

function SearchPageFallback() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-3 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          搜索
        </h1>
        <p className="max-w-3xl text-base leading-7 text-gray-500 dark:text-gray-400">
          正在准备站内搜索索引，请稍候片刻。
        </p>
      </div>

      <div className="py-10">
        <div className="rounded-3xl border border-dashed border-gray-300 px-6 py-12 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
          正在加载搜索结果...
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  const blogIndex = buildSearchIndex(sortPosts(allBlogs.filter((post) => !post.draft)), 'blog')
  const securityIndex = buildSearchIndex(
    sortPosts(allSecurityNotes.filter((post) => !post.draft)),
    'security'
  )

  return (
    <Suspense fallback={<SearchPageFallback />}>
      <SearchPageClient blogIndex={blogIndex} securityIndex={securityIndex} />
    </Suspense>
  )
}
