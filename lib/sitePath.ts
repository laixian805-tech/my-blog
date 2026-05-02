function getConfiguredBasePath() {
  // Runtime asset URLs should follow Next's actual basePath.
  // Inferring a prefix from the canonical site URL breaks local dev when
  // the production site is hosted under a subpath like /my-blog.
  const envBasePath = process.env.BASE_PATH?.replace(/\/$/, '')
  return envBasePath && envBasePath !== '/' ? envBasePath : ''
}

export function getSitePathPrefix() {
  const configuredBasePath = getConfiguredBasePath()

  if (typeof window === 'undefined') {
    return configuredBasePath
  }

  if (configuredBasePath && window.location.pathname.startsWith(configuredBasePath)) {
    return configuredBasePath
  }

  return ''
}

export function withSitePath(path: string) {
  if (!path) {
    return getSitePathPrefix()
  }

  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('data:') || path.startsWith('blob:')) {
    return path
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const prefix = getSitePathPrefix()

  if (prefix && (normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`))) {
    return normalizedPath
  }

  return `${prefix}${normalizedPath}`
}
