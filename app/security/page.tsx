import { allSecurityNotes } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import ArchiveCollection from '@/components/archive/ArchiveCollection'
import { mapSecurityNotesToArchiveItems } from '@/lib/archive'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({
  title: 'Security',
  description: '整理靶场实战、漏洞练习和网安学习过程中的公开笔记。',
})

export default function SecurityPage() {
  const notes = allCoreContent(sortPosts(allSecurityNotes.filter((item) => !item.draft)))
  const items = mapSecurityNotesToArchiveItems(notes, siteMetadata.locale)

  return (
    <ArchiveCollection
      title="Security 归档"
      eyebrow="Security Archive"
      description="把公开的网安笔记、靶场记录和专题复盘按时间沉淀成统一归档。"
      items={items}
      emptyMessage="还没有导入公开的网安笔记。"
    />
  )
}
