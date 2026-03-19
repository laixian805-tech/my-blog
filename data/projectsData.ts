interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '个人网站搭建实录',
    description:
      '完整记录这个博客从技术选型、页面改造、搜索与统计接入，到 GitHub Pages 发布和后续稳定性优化的全过程。',
    href: '/blog/build-personal-website-notes',
  },
  {
    title: 'Cloudflare 优化规划',
    description:
      '明确说明当前站点还没有接入 Cloudflare，并整理后续如果绑定自定义域名和引入 Cloudflare，可以按什么顺序升级。',
    href: '/blog/github-pages-custom-domain-cloudflare-plan',
  },
  {
    title: '自定义域名迁移手册',
    description:
      '按当前仓库的真实配置，整理从 GitHub Pages 项目页 /my-blog 迁到独立域名时，DNS、GitHub Pages、BASE_PATH 和 SITE_URL 应该怎么一起改。',
    href: '/blog/github-pages-custom-domain-migration-guide',
  },
  {
    title: 'GitHub Pages 排错清单',
    description:
      '整理当前仓库最常见的 Pages 故障排查路径，覆盖 Actions 失败、Pages 不更新、资源 404、/my-blog 路径问题、自定义域名异常和 HTTPS 不生效。',
    href: '/blog/github-pages-troubleshooting-checklist',
  },
  {
    title: 'FastAPI 学习笔记',
    description:
      '围绕 FastAPI 的定位、分层结构、参数校验和接口开发思路整理的入门型文章，适合作为后端学习起点。',
    href: '/blog/fastapi-study-notes',
  },
  {
    title: '全栈项目拆解',
    description:
      '把一个教学型全栈项目拆成浏览器、前端、后端和共享类型四个角色，帮助自己真正看懂完整链路。',
    href: '/blog/fullstack-project-notes',
  },
]

export default projectsData
