import { formatDate } from 'pliny/utils/formatDate'
import type { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, SecurityNote } from 'contentlayer/generated'
import type { Project } from '@/data/projectsData'

export type ArchiveSection = 'blog' | 'security' | 'projects'

export type ArchiveListItem = {
  id: string
  title: string
  href: string
  summary: string
  section: ArchiveSection
  dateLabel: string
  dateValue?: string
  yearGroup: string
  tags?: string[]
}

export const archiveSectionMeta: Record<
  ArchiveSection,
  { label: string; badgeClassName: string; accentClassName: string }
> = {
  blog: {
    label: 'Blog',
    badgeClassName:
      'bg-sky-50 text-sky-700 ring-1 ring-sky-100 dark:bg-sky-500/12 dark:text-sky-200 dark:ring-sky-500/20',
    accentClassName: 'from-sky-500/18 via-cyan-500/10 to-transparent',
  },
  security: {
    label: 'Security',
    badgeClassName:
      'bg-rose-50 text-rose-700 ring-1 ring-rose-100 dark:bg-rose-500/12 dark:text-rose-200 dark:ring-rose-500/20',
    accentClassName: 'from-rose-500/18 via-red-500/10 to-transparent',
  },
  projects: {
    label: 'Projects',
    badgeClassName:
      'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 dark:bg-emerald-500/12 dark:text-emerald-200 dark:ring-emerald-500/20',
    accentClassName: 'from-emerald-500/18 via-teal-500/10 to-transparent',
  },
}

function getYearGroup(dateValue?: string, fallbackLabel = '未分组') {
  if (!dateValue) {
    return fallbackLabel
  }

  const parsedDate = new Date(dateValue)

  if (Number.isNaN(parsedDate.getTime())) {
    return fallbackLabel
  }

  return String(parsedDate.getFullYear())
}

export function sortArchiveItems(items: ArchiveListItem[]) {
  return [...items].sort((left, right) => {
    if (left.dateValue && right.dateValue) {
      return new Date(right.dateValue).getTime() - new Date(left.dateValue).getTime()
    }

    if (left.dateValue) {
      return -1
    }

    if (right.dateValue) {
      return 1
    }

    return left.title.localeCompare(right.title, 'zh-CN')
  })
}

export function groupArchiveItems(items: ArchiveListItem[]) {
  const groupedItems = new Map<string, ArchiveListItem[]>()

  sortArchiveItems(items).forEach((item) => {
    const currentGroup = groupedItems.get(item.yearGroup) ?? []
    currentGroup.push(item)
    groupedItems.set(item.yearGroup, currentGroup)
  })

  const numericGroups: string[] = []
  const textGroups: string[] = []

  groupedItems.forEach((_items, key) => {
    if (/^\d{4}$/.test(key)) {
      numericGroups.push(key)
      return
    }

    textGroups.push(key)
  })

  numericGroups.sort((left, right) => Number(right) - Number(left))
  textGroups.sort((left, right) => left.localeCompare(right, 'zh-CN'))

  return [...numericGroups, ...textGroups].map((label) => ({
    label,
    items: groupedItems.get(label) ?? [],
  }))
}

export function mapBlogPostsToArchiveItems(posts: CoreContent<Blog>[], locale: string) {
  return posts.map((post) => ({
    id: post.path,
    title: post.title,
    href: `/${post.path}`,
    summary: post.summary || '',
    section: 'blog' as const,
    dateLabel: formatDate(post.date, locale),
    dateValue: post.date,
    yearGroup: getYearGroup(post.date),
    tags: post.tags ?? [],
  }))
}

export function mapSecurityNotesToArchiveItems(notes: CoreContent<SecurityNote>[], locale: string) {
  return notes.map((note) => ({
    id: note.path,
    title: note.title,
    href: `/${note.path}`,
    summary: note.summary || '',
    section: 'security' as const,
    dateLabel: formatDate(note.date, locale),
    dateValue: note.date,
    yearGroup: getYearGroup(note.date),
    tags: note.tags ?? [],
  }))
}

export function mapProjectsToArchiveItems(projects: Project[]) {
  return projects.map((project) => ({
    id: project.href || project.title,
    title: project.title,
    href: project.href || '/projects',
    summary: project.description,
    section: 'projects' as const,
    dateLabel: project.date ? formatDate(project.date, 'zh-CN') : '持续维护',
    dateValue: project.date,
    yearGroup: getYearGroup(project.date, '项目归档'),
    tags: project.tags ?? [],
  }))
}
