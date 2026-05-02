import { Suspense } from 'react'
import { genPageMetadata } from 'app/seo'
import NavPortal from '@/components/nav/NavPortal'
import NavPortalSearchParams from '@/components/nav/NavPortalSearchParams'

export const metadata = genPageMetadata({
  title: 'Nav',
  description:
    '同步 13 个分类与 243 个常用站点的个人导航页，保留参考站分类结构并沿用本站视觉系统。',
})

export default function NavPage() {
  return (
    <Suspense fallback={<NavPortal />}>
      <NavPortalSearchParams />
    </Suspense>
  )
}
