const siteUrl = (process.env.SITE_URL || 'https://laixian805-tech.github.io/my-blog').replace(
  /\/+$/,
  ''
)

const siteMetadata = {
  title: 'tlx 的知识博客',
  author: 'tlx',
  headerTitle: 'tlx Blog',
  description: '记录后端、数据库、算法刷题与网络安全学习的中文知识博客。',
  language: 'zh-CN',
  theme: 'system', // system, dark or light
  siteUrl,
  siteRepo: 'https://github.com/laixian805-tech/my-blog',
  siteLogo: `${siteUrl}/static/images/logo.png`,
  socialBanner: `${siteUrl}/static/images/twitter-card.png`,
  homeProfileAvatar: '/static/images/avatar-wechat.png',
  homeProfileGithub: 'https://github.com/laixian805-tech',
  email: '',
  github: 'https://github.com/laixian805-tech',
  x: '',
  linkedin: '',
  locale: 'zh-CN',
  stickyNav: false,
  analytics: {},
  siteStatus: {
    fallbackUv: 730,
    fallbackPv: 1460,
    lastUpdated: process.env.NEXT_PUBLIC_LAST_UPDATED || '2026-03-19',
  },
}

module.exports = siteMetadata
