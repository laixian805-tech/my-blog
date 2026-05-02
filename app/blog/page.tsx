import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayout'
import { ARCHIVE_PAGE_SIZE, getArchiveTotalPages, paginateArchiveItems } from '@/lib/archive'

export const metadata = genPageMetadata({ title: '博客' })

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs.filter((post) => !post.draft)))
  const pageNumber = 1
  const totalPages = getArchiveTotalPages(posts.length)
  const initialDisplayPosts = paginateArchiveItems(posts, pageNumber, ARCHIVE_PAGE_SIZE)

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={{ currentPage: pageNumber, totalPages }}
      title="文章归档"
    />
  )
}
