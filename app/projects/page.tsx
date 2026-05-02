import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'
import ArchiveCollection from '@/components/archive/ArchiveCollection'
import { mapProjectsToArchiveItems } from '@/lib/archive'

export const metadata = genPageMetadata({ title: '项目' })

export default function Projects() {
  const items = mapProjectsToArchiveItems(projectsData)

  return (
    <ArchiveCollection
      title="项目归档"
      eyebrow="Projects Archive"
      description="把持续维护的项目入口、复盘文章和阶段性成果统一整理成项目归档。"
      items={items}
      emptyMessage="还没有整理可公开展示的项目条目。"
    />
  )
}
