import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import ListLayout from '@/layouts/ListLayout'

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
  const publishedBlogs = allBlogs.filter((post) => !post.draft)
  const totalPages = Math.ceil(publishedBlogs.length / POSTS_PER_PAGE)
  return Array.from({ length: totalPages }, (_, index) => ({ page: (index + 1).toString() }))
}

export default async function BlogPage(props: { params: Promise<{ page: string }> }) {
  const params = await props.params
  const posts = allCoreContent(sortPosts(allBlogs.filter((post) => !post.draft)))
  const pageNumber = Number.parseInt(params.page, 10)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  if (Number.isNaN(pageNumber) || pageNumber <= 0 || pageNumber > totalPages) {
    return notFound()
  }

  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={{ currentPage: pageNumber, totalPages }}
      title="全部文章"
    />
  )
}
