import { allSecurityNotes } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import ArchiveCollection from '@/components/archive/ArchiveCollection'
import {
  ARCHIVE_PAGE_SIZE,
  getArchiveTotalPages,
  mapSecurityNotesToArchiveItems,
  paginateArchiveItems,
} from '@/lib/archive'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({
  title: 'Security',
  description: '整理靶场实战、漏洞练习和网安学习过程中的公开笔记。',
})

export default function SecurityPage() {
  const notes = allCoreContent(sortPosts(allSecurityNotes.filter((item) => !item.draft)))
  const pageNumber = 1
  const totalPages = getArchiveTotalPages(notes.length)
  const paginatedNotes = paginateArchiveItems(notes, pageNumber, ARCHIVE_PAGE_SIZE)
  const items = mapSecurityNotesToArchiveItems(paginatedNotes, siteMetadata.locale)

  return (
    <ArchiveCollection
      title="安全专题"
      items={items}
      emptyMessage="还没有导入公开的网安笔记。"
      compactHoverDetails
      pagination={{ currentPage: pageNumber, totalPages, basePath: '/security' }}
    />
  )
}
