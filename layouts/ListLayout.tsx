import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import ArchiveCollection from '@/components/archive/ArchiveCollection'
import { mapBlogPostsToArchiveItems } from '@/lib/archive'
import siteMetadata from '@/data/siteMetadata'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

export default function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts
  const items = mapBlogPostsToArchiveItems(displayPosts, siteMetadata.locale)

  return (
    <ArchiveCollection
      title={title}
      items={items}
      emptyMessage="还没有发布文章。"
      compactHoverDetails
      pagination={
        pagination
          ? {
              ...pagination,
              basePath: '/blog',
            }
          : undefined
      }
    />
  )
}
