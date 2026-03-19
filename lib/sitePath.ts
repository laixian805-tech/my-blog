import siteMetadata from '@/data/siteMetadata'

function getConfiguredBasePath() {
  const envBasePath = process.env.BASE_PATH?.replace(/\/$/, '')
  if (envBasePath) {
    return envBasePath === '/' ? '' : envBasePath
  }

  try {
    const pathname = new URL(siteMetadata.siteUrl).pathname.replace(/\/$/, '')
    return pathname === '/' ? '' : pathname
  } catch {
    return ''
  }
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
