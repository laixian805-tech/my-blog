import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allSecurityNotes } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const publishedBlogs = allBlogs.filter((post) => !post.draft)
  const publishedSecurityNotes = allSecurityNotes.filter((post) => !post.draft)
  const sortedPosts = sortPosts(publishedBlogs)
  const posts = allCoreContent(sortedPosts)
  const totalPosts = publishedBlogs.length + publishedSecurityNotes.length

  return <Main posts={posts} totalPosts={totalPosts} />
}
