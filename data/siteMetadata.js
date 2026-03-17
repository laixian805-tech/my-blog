/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'tlx 的知识博客',
  author: 'tlx',
  headerTitle: 'tlx Blog',
  description: '记录后端、数据库、全栈开发与网络安全学习的中文知识博客。',
  language: 'zh-CN',
  theme: 'system', // system, dark or light
  siteUrl: 'https://example.com',
  siteRepo: '',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  homeProfileAvatar: '/static/images/avatar-wechat.png',
  homeProfileGithub: 'https://github.com/laixian805-tech',
  email: '',
  github: '',
  x: '',
  linkedin: '',
  locale: 'zh-CN',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {},
}

module.exports = siteMetadata
