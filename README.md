# tlx 的中文知识博客

这是你当前正在维护的个人知识博客项目。站点基于 Next.js、MDX、Tailwind CSS 和 Contentlayer 搭建，内容以中文为主，顶部导航保持英文入口：

`Home / Blog / Nav / Projects / Security`

当前站点已经按你的需求做了这些定制：

- `Nav` 页面替代了原来的标签体系，用作个人常用网站导航门户
- `Security` 页面替代了原来的 `About` 主入口，专门展示网安靶场与漏洞练习笔记
- 顶栏加入了全站搜索，可同时搜索普通博客文章和 Security 笔记
- 文章详情页支持目录：桌面端右侧吸顶，手机端折叠展开
- 首页加入了 `Busuanzi` 访问统计
- 默认作者头像已切换为项目内的微信头像图片
- `Tags`、评论、订阅等首版不需要的能力已下线

## 1. 当前页面结构

- `/`：首页，展示最新普通博客文章和站点访问统计
- `/blog`：普通博客文章列表
- `/blog/[slug]`：普通博客文章详情页
- `/nav`：导航门户页，左侧分类，右侧站点卡片
- `/projects`：项目页
- `/security`：网安笔记列表页
- `/security/[slug]`：网安笔记详情页
- `/search?q=关键词`：站内搜索结果页
- `/about`：已永久跳转到 `/security`

说明：

- `Security` 区内容不会进入 `/blog` 列表，也不会出现在首页最新文章中
- `/nav` 已移除页面内搜索和首屏横幅，筛选只保留分类切换
- 搜索入口已统一放到全站顶栏和移动端菜单顶部

## 2. 技术栈

- Next.js 15
- React 19
- Tailwind CSS 4
- Contentlayer 2
- MDX
- Pliny UI
- Yarn 3

## 3. 目录结构

后续最常改的目录和文件如下：

```text
app/
  page.tsx                    首页
  blog/                       普通博客路由
  nav/                        导航门户页
  projects/                   项目页
  search/                     全站搜索结果页
  security/                   网安笔记列表与详情页
  about/page.tsx              旧 About 到 /security 的跳转

components/
  Header.tsx                  顶栏
  MobileNav.tsx               手机端菜单
  SiteSearchForm.tsx          顶栏搜索表单
  HomeSiteStats.tsx           首页访问统计
  BlogToc.tsx                 文章目录
  nav/NavPortal.tsx           导航门户主体

data/
  authors/default.mdx         默认作者资料
  blog/*.mdx                  普通博客文章
  security/*.mdx              网安笔记
  headerNavLinks.ts           顶部导航
  portalData.ts               导航门户数据源
  projectsData.ts             项目页卡片数据
  siteMetadata.js             站点基础信息

layouts/
  PostLayout.tsx              三栏文章布局
  ListLayout.tsx              普通博客列表布局

public/static/
  images/                     头像、logo、分享图等静态资源
  nav-icons/                  导航门户卡片图标

contentlayer.config.ts
  内容 schema、目录提取、MDX 解析配置

next.config.js
  Next.js 配置和 CSP 安全头
```

## 4. 环境要求

建议环境：

- Node.js 20 或更高
- Yarn 3
- Windows PowerShell、Git Bash 或 macOS Terminal

先检查版本：

```bash
node -v
yarn -v
```

## 5. 安装依赖

在项目根目录运行：

```bash
yarn
```

作用：安装开发和构建所需依赖。

## 6. 本地开发与构建

启动开发环境：

```bash
yarn dev
```

默认访问：

```text
http://localhost:3000
```

生产构建：

```bash
yarn build
```

本地预览生产构建：

```bash
yarn serve
```

分析打包体积：

```bash
yarn analyze
```

## 7. 内容类型说明

当前站点有两套内容源：

### 7.1 普通博客文章

目录：

- `data/blog/*.mdx`

展示位置：

- 首页最新文章
- `/blog`
- `/blog/[slug]`
- 顶栏搜索结果中的 `Blog` 分组

### 7.2 网安笔记

目录：

- `data/security/*.mdx`

展示位置：

- `/security`
- `/security/[slug]`
- 顶栏搜索结果中的 `Security` 分组

不会展示到：

- 首页最新文章
- `/blog`

## 8. 如何新增普通博客文章

### 8.1 文件位置

把新文章放进：

- `data/blog/`

建议文件名使用 ASCII slug，例如：

```text
fastapi-study-notes.mdx
```

标题可以写中文，但文件名尽量不要直接使用中文，避免 URL 编码问题。

### 8.2 Frontmatter 示例

```md
---
title: 'FastAPI 学习笔记：从概念到最小可运行项目'
date: '2026-03-09'
tags: ['后端', 'Python', 'FastAPI']
summary: '从 FastAPI 的定位、配套工具、最小示例和分层结构开始，整理一篇适合反复回看的中文入门笔记。'
authors:
  - 'default'
layout: PostLayout
---
```

常用字段：

- `title`：标题，必填
- `date`：日期，必填
- `summary`：摘要，建议填写
- `authors`：通常写 `default`
- `layout`：当前建议使用 `PostLayout`
- `tags`：可以保留作元数据，但当前站点不再展示标签 UI

## 9. 如何新增网安笔记

把新笔记放进：

- `data/security/`

建议文件名示例：

```text
owasp-top-10-notes.mdx
```

推荐 frontmatter：

```md
---
title: 'OWASP Top 10 学习笔记'
date: '2026-03-17'
summary: '整理 OWASP Top 10 的风险分类、常见案例和后续实战复习重点。'
authors:
  - 'default'
layout: PostLayout
---
```

注意：

- Security 笔记和普通博客文章是两套独立内容类型
- 只要放进 `data/security/`，它就不会混进 `/blog`
- 从外部 Markdown 导入时，记得先清理本地磁盘图片路径和敏感信息

当前仓库已导入的 6 篇网安笔记在：

- `data/security/buuctf-notes.mdx`
- `data/security/owasp-top-10.mdx`
- `data/security/pikachu-lab-notes.mdx`
- `data/security/sqli-labs-notes.mdx`
- `data/security/vulnhub-notes.mdx`
- `data/security/recommended-labs.mdx`

## 10. 文章目录如何工作

当前文章目录已经内置，不需要手写。

工作方式：

- Contentlayer 构建 MDX 时自动提取标题，生成 `post.toc`
- 文章布局复用 `pliny/ui/TOCInline`
- 桌面端显示在正文右侧吸顶区域
- 手机端显示为折叠面板

目录默认收录：

- `##` 二级标题
- `###` 三级标题

如果文章里只有 1 个可用标题，目录会自动隐藏。

## 11. 如何修改站点信息

### 11.1 修改站点标题、描述、域名

编辑：

- `data/siteMetadata.js`

常用字段：

- `title`：站点完整名称
- `author`：站点作者名
- `headerTitle`：顶栏左侧标题
- `description`：首页和 SEO 描述
- `siteUrl`：正式站点域名
- `siteRepo`：仓库地址
- `github`：GitHub 主页
- `language` / `locale`：当前保持 `zh-CN`

### 11.2 修改作者资料和头像

编辑：

- `data/authors/default.mdx`

当前默认头像文件：

- `public/static/images/avatar-wechat.png`

如果以后要更换头像，建议继续使用英文文件名，例如：

```text
public/static/images/avatar-new.png
```

然后同步修改：

- `data/authors/default.mdx`

### 11.3 修改顶部导航

编辑：

- `data/headerNavLinks.ts`

当前导航为：

- `Home`
- `Blog`
- `Nav`
- `Projects`
- `Security`

## 12. 如何维护导航门户页

导航门户的数据统一维护在：

- `data/portalData.ts`

这个文件里包含：

- 分类数据
- 网站卡片数据
- 图标路径

当前门户页只保留：

- 左侧分类栏
- 右侧网站卡片区

已经移除：

- 页面顶部大横幅
- `MyBlog / GitHub` 快捷按钮
- 页面内搜索框

站内搜索已经转移到全站 Header。

新增门户卡片时，通常只需要在 `portalLinks` 里增加一个对象，例如：

```ts
{
  id: 'ai-chatgpt',
  title: 'ChatGPT',
  url: 'https://chatgpt.com/',
  description: '通用 AI 助手入口，适合写作、问答和代码辅助。',
  categoryId: 'ai',
  iconPath: '/static/nav-icons/chatgpt.png',
  keywords: ['OpenAI', 'ChatGPT', 'AI 助手']
}
```

图标建议放在：

- `public/static/nav-icons/`

## 13. 如何修改项目页

编辑：

- `data/projectsData.ts`

这里控制 `/projects` 页面卡片内容。可以放：

- 你自己的项目
- 学习专题
- 占位中的建设计划

## 14. 顶栏搜索说明

当前搜索入口在：

- 桌面端 Header 中间
- 手机端抽屉菜单顶部

搜索结果页路径：

```text
/search?q=关键词
```

搜索范围固定包含：

- `title`
- `summary`
- `body.raw`

搜索结果会分成两组：

- `Blog`
- `Security`

## 15. 首页访问统计说明

首页访问统计使用：

- `Busuanzi`

相关组件：

- `components/HomeSiteStats.tsx`

如果以后需要关闭统计，可以移除：

- `app/Main.tsx` 里的 `HomeSiteStats`
- `next.config.js` 里的 Busuanzi CSP 域名

## 16. 当前已关闭或移除的功能

为保持首版简洁稳定，目前这些功能已关闭或下线：

- `Tags` 页面：已移除
- 标签路由：已移除
- 首页标签芯片：已移除
- 博客列表标签侧栏：已移除
- 文章详情页标签展示：已移除
- 评论：已关闭
- 订阅：已关闭

说明：

- 现在站内搜索已重新启用，但它是全站顶栏搜索，不再是旧模板那套标签或本地搜索页逻辑

## 17. 部署建议

### 17.1 推荐：Vercel

这个项目目前最适合直接部署到 Vercel。

基本流程：

1. 把仓库推到 GitHub
2. 在 Vercel 导入该仓库
3. 使用默认 Next.js 配置部署
4. 部署成功后，把 `data/siteMetadata.js` 中的 `siteUrl` 改为正式域名

推荐 Vercel 的原因：

- 对 Next.js 支持最好
- `/search?q=...` 这类查询页开箱即用
- 不需要你额外处理 Node 服务和路由问题

### 17.2 静态导出

项目仍然保留静态导出能力，但当前版本更推荐作为补充方案。

PowerShell 示例：

```powershell
$env:EXPORT='1'
$env:UNOPTIMIZED='1'
yarn build
```

如果你还有二级路径，例如 `/my-blog`：

```powershell
$env:EXPORT='1'
$env:UNOPTIMIZED='1'
$env:BASE_PATH='/my-blog'
yarn build
```

提示：

- 静态导出更适合纯内容浏览
- 如果你希望顶栏搜索的体验完整，优先使用 Vercel 或其他 Node 运行环境

## 18. 常见问题

### 18.1 `yarn dev` 报错 `Unbound variable "PWD"`

这个问题已经处理过。当前 `package.json` 中的开发脚本可直接在 Windows PowerShell 中运行：

```bash
yarn dev
```

### 18.2 中文内容出现乱码怎么办

建议统一使用 UTF-8 编码保存文件，尤其是：

- `data/blog/*.mdx`
- `data/security/*.mdx`
- `data/authors/*.mdx`

在 PowerShell 里查看中文文件时，也尽量显式指定 UTF-8。

### 18.3 外部 Markdown 导入后为什么图片不显示

最常见原因是原文使用了本地绝对路径，例如：

```text
C:\Users\...\Typora\...
```

这类路径无法部署到网站上。导入时应：

1. 删除这类本地路径图片引用
2. 或把图片复制到 `public/static/images/` 后改成站内相对路径

### 18.4 为什么 Security 笔记没有出现在首页

因为这是刻意分流的设计。

- `data/blog/` 里的内容进入首页和 `/blog`
- `data/security/` 里的内容只进入 `/security`

### 18.5 导航门户页为什么没有搜索框了

因为搜索已经迁移到全站顶栏。

现在：

- `/nav` 只负责站点卡片分类浏览
- 站内内容搜索统一走 Header 的 `/search`

## 19. 当前最常修改的文件

- `data/siteMetadata.js`
- `data/authors/default.mdx`
- `data/blog/*.mdx`
- `data/security/*.mdx`
- `data/portalData.ts`
- `data/projectsData.ts`
- `data/headerNavLinks.ts`
- `public/static/images/*`
- `public/static/nav-icons/*`

## 20. 维护建议

如果你后面继续把这个博客做成正式站点，建议按这个顺序维护：

1. 先补齐 `siteMetadata.js` 里的真实域名、仓库地址和社交链接
2. 持续把公开内容分别放进 `data/blog/` 和 `data/security/`
3. 每次发文前补齐 `title`、`date`、`summary`
4. 新增常用站点时只改 `data/portalData.ts`
5. 上线前固定执行一次 `yarn build`

这份 README 已按当前仓库的实际状态编写。如果后面你继续加评论、订阅、更多内容分区或部署脚本，也建议同步更新这里，避免文档和站点状态脱节。
