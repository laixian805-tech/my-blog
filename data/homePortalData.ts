import { PortalIconName } from './portalData'

export interface HomeHeroAction {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'ghost'
}

export interface HomeFeaturedCategoryConfig {
  categoryId: string
  label: string
  icon: PortalIconName
  href: string
}

export const homePortalData = {
  hero: {
    eyebrow: 'Learning Portal',
    title: 'tlx 的学习导航与知识沉淀',
    subtitle: '后端 / 算法 / AI / 网安',
    actions: [
      { label: '学习导航', href: '/nav', variant: 'primary' },
      { label: '安全专题', href: '/security', variant: 'secondary' },
      { label: '归档', href: '/blog', variant: 'ghost' },
    ] satisfies HomeHeroAction[],
  },
} as const
