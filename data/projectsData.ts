interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '中文知识博客',
    description:
      '基于 Next.js、MDX 和 Tailwind CSS 搭建的个人知识站，用来整理后端、数据库、全栈开发与网络安全学习记录。',
    href: '/',
  },
  {
    title: '个人网站搭建实录',
    description:
      '完整记录这个博客从技术选型、页面改造、搜索与统计接入，到 GitHub Pages 发布和后续稳定性优化的全过程。',
    href: '/blog/build-personal-website-notes',
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
