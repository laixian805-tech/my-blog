const siteUrl = (process.env.SITE_URL || 'https://laixian805-tech.github.io/my-blog').replace(
  /\/+$/,
  ''
)

const siteMetadata = {
  title: 'tlx 的学习导航与知识库',
  author: 'tlx',
  headerTitle: 'tlx Wiki',
  description:
    '把后端、数据库、算法刷题、AI 工具与网络安全学习内容整理成可导航、可归档的个人知识库。',
  language: 'zh-CN',
  theme: 'system', // system, dark or light
  siteUrl,
  siteRepo: 'https://github.com/laixian805-tech/my-blog',
  siteLogo: `${siteUrl}/static/images/logo.png`,
  socialBanner: `${siteUrl}/static/images/twitter-card.png`,
  homeProfileAvatar: '/static/images/avatar-wechat.png',
  homeProfileGithub: 'https://github.com/laixian805-tech',
  homeProfileTagline: '后端 / 算法 / AI / 网安',
  homePortalLabel: 'Learning Portal',
  email: '',
  github: 'https://github.com/laixian805-tech',
  x: '',
  linkedin: '',
  locale: 'zh-CN',
  stickyNav: false,
  analytics: {},
  siteStatus: {
    initialUv: null,
    initialPv: null,
    lastUpdated: process.env.NEXT_PUBLIC_LAST_UPDATED || '2026-03-19',
    enableLiveStats: process.env.NEXT_PUBLIC_ENABLE_LIVE_STATS === '1',
  },
}

module.exports = siteMetadata
