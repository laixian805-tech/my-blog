export type SearchSection = 'blog' | 'security'

export type SearchIndexItem = {
  title: string
  summary?: string
  date: string
  path: string
  searchText: string
  excerptSource: string
  section: SearchSection
}

export type SearchIndexPayload = {
  generatedAt: string
  blogIndex: SearchIndexItem[]
  securityIndex: SearchIndexItem[]
}

type SearchSourceItem = {
  title?: unknown
  summary?: unknown
  date: string | Date
  path?: unknown
  body?: {
    raw?: unknown
  } | null
}

export const SEARCH_INDEX_PUBLIC_PATH = '/search-index.json'

export function cleanSearchText(raw: string) {
  return raw
    .replace(/\s+/g, ' ')
    .replace(/[`*_>#-]/g, ' ')
    .replace(/[()[\]{}]/g, ' ')
    .slice(0, 1600)
    .trim()
}

function requireStringField(
  value: unknown,
  fieldName: string,
  section: SearchSection,
  index: number
) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(
      `Invalid ${section} search source at index ${index}: expected "${fieldName}" to be a non-empty string.`
    )
  }

  return value.trim()
}

export function buildSearchIndex(
  items: SearchSourceItem[],
  section: SearchSection
): SearchIndexItem[] {
  return items.map((item, index) => {
    const title = requireStringField(item.title, 'title', section, index)
    const path = requireStringField(item.path, 'path', section, index)
    const excerptRaw = typeof item.body?.raw === 'string' ? item.body.raw : ''
    const excerptSource = cleanSearchText(excerptRaw)
    const summary = typeof item.summary === 'string' ? item.summary.trim() : undefined
    const date = item.date instanceof Date ? item.date.toISOString() : item.date

    if (typeof date !== 'string' || Number.isNaN(new Date(date).getTime())) {
      throw new Error(
        `Invalid ${section} search source at index ${index}: expected "date" to be a valid date string.`
      )
    }

    return {
      title,
      summary,
      date,
      path,
      section,
      excerptSource,
      searchText: `${title} ${summary || ''} ${excerptSource}`.toLowerCase(),
    }
  })
}

export function buildSearchIndexPayload({
  blogItems,
  securityItems,
}: {
  blogItems: SearchSourceItem[]
  securityItems: SearchSourceItem[]
}): SearchIndexPayload {
  return {
    generatedAt: new Date().toISOString(),
    blogIndex: buildSearchIndex(blogItems, 'blog'),
    securityIndex: buildSearchIndex(securityItems, 'security'),
  }
}
