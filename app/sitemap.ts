import { MetadataRoute } from 'next'
import { allBlogs, allSecurityNotes } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

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

  const routes = ['', 'blog', 'nav', 'projects', 'security', 'search'].map((route) => ({
    url: toSiteUrl(route),
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogRoutes, ...securityRoutes]
}
