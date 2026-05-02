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
  description: string
  ctaLabel: string
}

export interface HomeFocusTrack {
  title: string
  description: string
  href: string
  actionLabel: string
  note: string
  icon: PortalIconName
  accentClassName: string
}

export interface HomeClosingLink {
  label: string
  href: string
}

export const homePortalData = {
  hero: {
    eyebrow: 'Wiki Portal',
    title: 'tlx 的学习导航与知识沉淀',
    subtitle: '把零散输入整理成可反复查阅的个人知识基地。',
    description:
      '这里集中沉淀我在后端开发、算法刷题、AI 工具和网络安全方向上的学习路径、导航入口与专题笔记。首页不再只展示更新，而是先告诉你从哪里开始看。',
    actions: [
      { label: '学习导航', href: '/nav', variant: 'primary' },
      { label: '安全专题', href: '/security', variant: 'secondary' },
      { label: '全部文章', href: '/blog', variant: 'ghost' },
    ] satisfies HomeHeroAction[],
  },
  featuredCategories: [
    {
      categoryId: 'gowork',
      label: '算法刷题',
      icon: 'terminal',
      href: '/nav?category=gowork',
      description: '题单、套路与刷题路线集中入口，适合持续推进算法基础。',
      ctaLabel: '进入算法导航',
    },
    {
      categoryId: 'Server',
      label: '后端基础',
      icon: 'server',
      href: '/nav?category=Server',
      description: '数据库、网络、接口与系统基础，方便按知识块持续回看。',
      ctaLabel: '进入后端导航',
    },
    {
      categoryId: 'AI',
      label: 'AI 工具',
      icon: 'sparkles',
      href: '/nav?category=AI',
      description: '常用 AI 助手、提示词参考与实践工具，优先收纳高频入口。',
      ctaLabel: '进入 AI 导航',
    },
    {
      categoryId: 'TargetDrones',
      label: '网安资源',
      icon: 'shield',
      href: '/nav?category=TargetDrones',
      description: '从 WSTG 到靶场练习，把网安学习资源按方向整理出来。',
      ctaLabel: '进入安全导航',
    },
    {
      categoryId: 'Forum',
      label: '社区论坛',
      icon: 'users',
      href: '/nav?category=Forum',
      description: '技术社区、论坛和热门内容源，方便跟进讨论与行业动态。',
      ctaLabel: '进入社区导航',
    },
    {
      categoryId: 'ToolChain',
      label: '工具资源',
      icon: 'toolbox',
      href: '/nav?category=ToolChain',
      description: '文档、图表、转换和开发常用工具集合，适合做随手入口页。',
      ctaLabel: '进入工具导航',
    },
  ] satisfies HomeFeaturedCategoryConfig[],
  focusTracks: [
    {
      title: '算法路线',
      description: '围绕刷题路线、题单和基础概念，先建立一条稳定的算法学习通道。',
      href: '/nav?category=gowork',
      actionLabel: '去看算法入口',
      note: '适合从路线整理、练习平台和题型模板开始。',
      icon: 'terminal',
      accentClassName:
        'from-cyan-500 via-emerald-500 to-teal-500 shadow-[0_24px_48px_-26px_rgba(16,185,129,0.7)]',
    },
    {
      title: '后端学习',
      description: '把后端基础、数据库、接口设计与项目实践逐步沉淀成可回查的笔记。',
      href: '/blog',
      actionLabel: '去看文章归档',
      note: '适合顺着博客归档查阅完整学习记录。',
      icon: 'server',
      accentClassName:
        'from-sky-500 via-cyan-500 to-emerald-500 shadow-[0_24px_48px_-26px_rgba(14,165,233,0.7)]',
    },
    {
      title: 'AI 实用工具',
      description: '保留最常用的 AI 产品与学习资源，减少在工具海里反复切换。',
      href: '/nav?category=AI',
      actionLabel: '去看 AI 导航',
      note: '适合先建立自己的常用工具面板。',
      icon: 'sparkles',
      accentClassName:
        'from-emerald-500 via-teal-500 to-cyan-500 shadow-[0_24px_48px_-26px_rgba(20,184,166,0.7)]',
    },
    {
      title: '网络安全笔记',
      description: '聚合靶场练习、方法论和专题笔记，形成更清晰的安全学习地图。',
      href: '/security',
      actionLabel: '去看安全专题',
      note: '适合沿着专题归档系统补全自己的安全知识面。',
      icon: 'shield',
      accentClassName:
        'from-teal-500 via-emerald-500 to-lime-500 shadow-[0_24px_48px_-26px_rgba(34,197,94,0.7)]',
    },
  ] satisfies HomeFocusTrack[],
  closing: {
    eyebrow: 'Keep Exploring',
    title: '把首页当成起点，把知识库当成长期工程。',
    description:
      '后续我会继续把内容往“可导航、可归档、可持续扩展”的方向整理，让它更像个人 Wiki，而不只是发文记录。',
    links: [
      { label: '查看 GitHub 仓库', href: 'https://github.com/laixian805-tech/my-blog' },
      { label: '访问个人 GitHub', href: 'https://github.com/laixian805-tech' },
      { label: '浏览 Security 专题', href: '/security' },
    ] satisfies HomeClosingLink[],
  },
} as const
