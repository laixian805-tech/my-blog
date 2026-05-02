import { allTalks } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import ArchiveCollection from '@/components/archive/ArchiveCollection'
import { mapTalkPostsToArchiveItems } from '@/lib/archive'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({
  title: '杂谈',
  description: '单独整理的实习笔试与非技术归档随记。',
})

export default function TalksPage() {
  const talks = allCoreContent(sortPosts(allTalks.filter((item) => !item.draft)))
  const items = mapTalkPostsToArchiveItems(talks, siteMetadata.locale)

  return (
    <ArchiveCollection
      title="杂谈"
      items={items}
      emptyMessage="还没有发布杂谈内容。"
      compactHoverDetails
    />
  )
}
