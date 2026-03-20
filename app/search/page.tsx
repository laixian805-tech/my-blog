import { Suspense } from 'react'
import { genPageMetadata } from 'app/seo'
import SearchPageClient from '@/components/SearchPageClient'

export const metadata = genPageMetadata({
  title: '搜索',
  description: '搜索站内博客文章与网安笔记。',
})

function SearchPageFallback() {
  return (
    <div className="py-10">
      <div className="rounded-3xl border border-dashed border-gray-300 px-6 py-12 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
        正在加载搜索结果...
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchPageFallback />}>
      <SearchPageClient />
    </Suspense>
  )
}
