import { coreContent, type CoreContent } from 'pliny/utils/contentlayer'
import type { Authors } from 'contentlayer/generated'

export function getAuthorDetails(
  authorSlugs: string[] | undefined,
  authors: Authors[],
  entryPath: string
): CoreContent<Authors>[] {
  const normalizedAuthorSlugs = authorSlugs?.length ? authorSlugs : ['default']

  return normalizedAuthorSlugs.map((authorSlug) => {
    const author = authors.find((item) => item.slug === authorSlug)

    if (!author) {
      throw new Error(`Unknown author slug "${authorSlug}" referenced by "${entryPath}".`)
    }

    return coreContent(author)
  })
}

export function getPostLayout<T>(
  layouts: Record<string, T>,
  layoutName: string | undefined,
  defaultLayoutName: string,
  entryPath: string
) {
  const resolvedLayoutName = layoutName || defaultLayoutName
  const Layout = layouts[resolvedLayoutName]

  if (!Layout) {
    throw new Error(`Unknown layout "${resolvedLayoutName}" referenced by "${entryPath}".`)
  }

  return Layout
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}
