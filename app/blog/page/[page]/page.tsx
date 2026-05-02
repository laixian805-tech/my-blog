import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import ListLayout from '@/layouts/ListLayout'
import { ARCHIVE_PAGE_SIZE, getArchiveTotalPages, paginateArchiveItems } from '@/lib/archive'

export const generateStaticParams = async () => {
  const publishedBlogs = allBlogs.filter((post) => !post.draft)
  const totalPages = getArchiveTotalPages(publishedBlogs.length)

  return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, index) => ({
    page: (index + 2).toString(),
  }))
}

export default async function BlogPage(props: { params: Promise<{ page: string }> }) {
  const params = await props.params
  const posts = allCoreContent(sortPosts(allBlogs.filter((post) => !post.draft)))
  const pageNumber = Number.parseInt(params.page, 10)
  const totalPages = getArchiveTotalPages(posts.length)

  if (Number.isNaN(pageNumber) || pageNumber <= 1 || pageNumber > totalPages) {
    return notFound()
  }

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
