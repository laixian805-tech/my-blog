import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import ArchiveCollection from '@/components/archive/ArchiveCollection'
import {
  ARCHIVE_PAGE_SIZE,
  getArchiveTotalPages,
  getProjectBlogPosts,
  mapProjectBlogPostsToArchiveItems,
  paginateArchiveItems,
} from '@/lib/archive'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({ title: '项目' })

export default function Projects() {
  const posts = allCoreContent(sortPosts(allBlogs.filter((post) => !post.draft)))
  const projectPosts = getProjectBlogPosts(posts)
  const pageNumber = 1
  const totalPages = getArchiveTotalPages(projectPosts.length)
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
