import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { notFound } from 'next/navigation'
import ArchiveCollection from '@/components/archive/ArchiveCollection'
import {
  ARCHIVE_PAGE_SIZE,
  getArchiveTotalPages,
  getProjectBlogPosts,
  mapProjectBlogPostsToArchiveItems,
  paginateArchiveItems,
} from '@/lib/archive'
import siteMetadata from '@/data/siteMetadata'

export const generateStaticParams = async () => {
  const publishedBlogs = allBlogs.filter((post) => !post.draft)
  const totalPages = getArchiveTotalPages(
    getProjectBlogPosts(allCoreContent(sortPosts(publishedBlogs))).length
  )

  return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, index) => ({
    page: (index + 2).toString(),
  }))
}

export default async function ProjectsPage(props: { params: Promise<{ page: string }> }) {
  const params = await props.params
  const posts = allCoreContent(sortPosts(allBlogs.filter((post) => !post.draft)))
  const projectPosts = getProjectBlogPosts(posts)
  const pageNumber = Number.parseInt(params.page, 10)
  const totalPages = getArchiveTotalPages(projectPosts.length)

  if (Number.isNaN(pageNumber) || pageNumber <= 1 || pageNumber > totalPages) {
    return notFound()
  }

  const paginatedProjectPosts = paginateArchiveItems(projectPosts, pageNumber, ARCHIVE_PAGE_SIZE)
  const items = mapProjectBlogPostsToArchiveItems(paginatedProjectPosts, siteMetadata.locale)

  return (
    <ArchiveCollection
      title="项目实践"
      items={items}
      emptyMessage="还没有整理可公开展示的项目条目。"
      compactHoverDetails
      pagination={{ currentPage: pageNumber, totalPages, basePath: '/projects' }}
    />
  )
}
