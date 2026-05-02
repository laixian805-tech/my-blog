import { allSecurityNotes } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { notFound } from 'next/navigation'
import ArchiveCollection from '@/components/archive/ArchiveCollection'
import {
  ARCHIVE_PAGE_SIZE,
  getArchiveTotalPages,
  mapSecurityNotesToArchiveItems,
  paginateArchiveItems,
} from '@/lib/archive'
import siteMetadata from '@/data/siteMetadata'

export const generateStaticParams = async () => {
  const publishedSecurityNotes = allSecurityNotes.filter((post) => !post.draft)
  const totalPages = getArchiveTotalPages(publishedSecurityNotes.length)

  if (totalPages <= 1) {
    // Keep static export happy until the section grows beyond one page.
    return [{ page: '2' }]
  }

  return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, index) => ({
    page: (index + 2).toString(),
  }))
}

export default async function SecurityPage(props: { params: Promise<{ page: string }> }) {
  const params = await props.params
  const notes = allCoreContent(sortPosts(allSecurityNotes.filter((item) => !item.draft)))
  const pageNumber = Number.parseInt(params.page, 10)
  const totalPages = getArchiveTotalPages(notes.length)

  if (Number.isNaN(pageNumber) || pageNumber <= 1 || pageNumber > totalPages) {
    return notFound()
  }

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
