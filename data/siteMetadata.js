/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'tlx 的知识博客',
  author: 'tlx',
  headerTitle: 'tlx Blog',
  description: '记录后端、数据库、算法刷题与网络安全学习的中文知识博客。',
  language: 'zh-CN',
  theme: 'system', // system, dark or light
  siteUrl: 'https://my-blog-ruby-seven.vercel.app',
  siteRepo: 'https://github.com/laixian805-tech/my-blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  homeProfileAvatar: '/static/images/avatar-wechat.png',
  homeProfileGithub: 'https://github.com/laixian805-tech',
  email: '',
  github: 'https://github.com/laixian805-tech',
  x: '',
  linkedin: '',
  locale: 'zh-CN',
  stickyNav: false,
  analytics: {},
}

module.exports = siteMetadata
