import { MetadataRoute } from 'next'
import { allBlogs, allCourseNotes, allSecurityNotes, allTalks } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import { ARCHIVE_PAGE_SIZE, getArchiveTotalPages } from '@/lib/archive'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl
  const toSiteUrl = (path = '') => {
    const normalizedPath = path.replace(/^\/+|\/+$/g, '')
    return normalizedPath ? `${siteUrl}/${normalizedPath}/` : `${siteUrl}/`
  }

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: toSiteUrl(post.path),
      lastModified: post.lastmod || post.date,
    }))

  const securityRoutes = allSecurityNotes
    .filter((post) => !post.draft)
    .map((post) => ({
      url: toSiteUrl(post.path),
      lastModified: post.lastmod || post.date,
    }))

  const courseRoutes = allCourseNotes
    .filter((post) => !post.draft)
    .map((post) => ({
      url: toSiteUrl(post.path),
      lastModified: post.lastmod || post.date,
    }))

  const talkRoutes = allTalks
    .filter((post) => !post.draft)
    .map((post) => ({
      url: toSiteUrl(post.path),
      lastModified: post.lastmod || post.date,
    }))

  const blogArchivePages = Array.from(
    { length: Math.max(getArchiveTotalPages(blogRoutes.length, ARCHIVE_PAGE_SIZE) - 1, 0) },
    (_, index) => ({
      url: toSiteUrl(`blog/page/${index + 2}`),
      lastModified: new Date().toISOString().split('T')[0],
    })
  )

  const projectArchivePages = Array.from(
    {
      length: Math.max(
        getArchiveTotalPages(
          allBlogs.filter((post) => !post.draft && post.tags?.includes('项目')).length,
          ARCHIVE_PAGE_SIZE
        ) - 1,
        0
      ),
    },
    (_, index) => ({
      url: toSiteUrl(`projects/page/${index + 2}`),
      lastModified: new Date().toISOString().split('T')[0],
    })
  )

  const routes = ['', 'blog', 'courses', 'nav', 'projects', 'search', 'security', 'talks'].map(
    (route) => ({
      url: toSiteUrl(route),
      lastModified: new Date().toISOString().split('T')[0],
    })
  )

  return [
    ...routes,
    ...blogArchivePages,
    ...projectArchivePages,
    ...blogRoutes,
    ...securityRoutes,
    ...courseRoutes,
    ...talkRoutes,
  ]
}
