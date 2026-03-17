import { Suspense } from 'react'
import { allBlogs, allSecurityNotes } from 'contentlayer/generated'
import { sortPosts } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import SearchPageClient from '@/components/SearchPageClient'

export type SearchIndexItem = {
  title: string
  summary?: string
  date: string
  path: string
  searchText: string
}

export const metadata = genPageMetadata({
  title: '搜索',
  description: '搜索站内博客文章与网安笔记。',
})

function buildSearchExcerpt(raw: string) {
  return raw
    .replace(/\s+/g, ' ')
    .replace(/[`*_>#-]/g, ' ')
    .slice(0, 1200)
    .toLowerCase()
}

function buildSearchIndex(
  items: Array<{
    title: string
    summary?: string
    date: string
    path: string
    body: { raw: string }
  }>
) {
  return items.map((item) => ({
    title: item.title,
    summary: item.summary,
    date: item.date,
    path: item.path,
    searchText:
      `${item.title} ${item.summary || ''} ${buildSearchExcerpt(item.body.raw)}`.toLowerCase(),
  }))
}

function SearchPageFallback() {
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

      <div className="py-10">
        <div className="rounded-3xl border border-dashed border-gray-300 px-6 py-12 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
          正在加载搜索结果...
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  const blogIndex = buildSearchIndex(sortPosts(allBlogs.filter((post) => !post.draft)))
  const securityIndex = buildSearchIndex(sortPosts(allSecurityNotes.filter((post) => !post.draft)))

  return (
    <Suspense fallback={<SearchPageFallback />}>
      <SearchPageClient blogIndex={blogIndex} securityIndex={securityIndex} />
    </Suspense>
  )
}
