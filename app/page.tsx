import { allBlogs, allSecurityNotes } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const publishedBlogs = allBlogs.filter((post) => !post.draft)
  const publishedSecurityNotes = allSecurityNotes.filter((post) => !post.draft)
  const blogPostCount = publishedBlogs.length
  const securityPostCount = publishedSecurityNotes.length
  const totalPosts = blogPostCount + securityPostCount

  return (
    <Main
      totalPosts={totalPosts}
      blogPostCount={blogPostCount}
      securityPostCount={securityPostCount}
    />
  )
}
