import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'

const repoRoot = process.cwd()
const outDir = path.join(repoRoot, 'out')

function readExportedFile(...segments) {
  return readFileSync(path.join(outDir, ...segments), 'utf8')
}

function readJson(...segments) {
  return JSON.parse(readExportedFile(...segments))
}

test('static export emits the expected route files', () => {
  assert.ok(existsSync(path.join(outDir, 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'blog', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'blog', 'page', '2', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'courses', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'nav', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'projects', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'projects', 'page', '2', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'search', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'security', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'talks', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'blog', 'fastapi-study-notes', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'blog', 'local-rag-project-notes', 'index.html')))
  assert.ok(
    existsSync(path.join(outDir, 'blog', 'qwen-security-assistant-project-notes', 'index.html'))
  )
  assert.ok(
    existsSync(path.join(outDir, 'courses', 'blockchain', 'sha256-study-notes', 'index.html'))
  )
  assert.ok(existsSync(path.join(outDir, 'security', 'owasp-top-10', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'talks', 'huawei-intern-written-test', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'search-index.json')))
  assert.equal(existsSync(path.join(outDir, 'blog', 'page', '1', 'index.html')), false)
  assert.equal(existsSync(path.join(outDir, 'projects', 'page', '1', 'index.html')), false)
  assert.equal(existsSync(path.join(outDir, 'security', 'page', '1', 'index.html')), false)
})

test('static search index includes both blog and security content', () => {
  const searchIndex = readJson('search-index.json')

  assert.equal(typeof searchIndex.generatedAt, 'string')
  assert.equal(Number.isNaN(new Date(searchIndex.generatedAt).getTime()), false)
  assert.ok(Array.isArray(searchIndex.blogIndex))
  assert.ok(Array.isArray(searchIndex.securityIndex))
  assert.ok(searchIndex.blogIndex.length > 0)
  assert.ok(searchIndex.securityIndex.length > 0)

  const fastApiEntry = searchIndex.blogIndex.find(
    (item) => item.path === 'blog/fastapi-study-notes'
  )
  assert.ok(fastApiEntry)
  assert.equal(fastApiEntry.section, 'blog')
  assert.match(fastApiEntry.searchText, /fastapi/)

  const owaspEntry = searchIndex.securityIndex.find((item) => item.path === 'security/owasp-top-10')
  assert.ok(owaspEntry)
  assert.equal(owaspEntry.section, 'security')
  assert.match(owaspEntry.searchText, /owasp/)
})

test('exported HTML preserves basePath-aware assets and detail metadata', () => {
  const homeHtml = readExportedFile('index.html')
  const paginatedBlogHtml = readExportedFile('blog', 'page', '2', 'index.html')
  const fastApiHtml = readExportedFile('blog', 'fastapi-study-notes', 'index.html')
  const courseNoteHtml = readExportedFile(
    'courses',
    'blockchain',
    'sha256-study-notes',
    'index.html'
  )
  const owaspHtml = readExportedFile('security', 'owasp-top-10', 'index.html')

  assert.match(homeHtml, /\/my-blog\/_next\//)
  assert.match(homeHtml, /\/my-blog\/static\/favicons\/favicon-32x32\.png/)
  assert.doesNotMatch(homeHtml, /action="\/my-blog\/search\/"/)

  assert.match(paginatedBlogHtml, /https:\/\/laixian805-tech\.github\.io\/my-blog\/blog\/page\/2\//)
  assert.doesNotMatch(paginatedBlogHtml, /\/my-blog\/blog\/page\/1\//)

  assert.match(fastApiHtml, /application\/ld\+json/)
  assert.match(
    fastApiHtml,
    /https:\/\/laixian805-tech\.github\.io\/my-blog\/blog\/fastapi-study-notes\//
  )

  assert.match(courseNoteHtml, /application\/ld\+json/)
  assert.match(
    courseNoteHtml,
    /https:\/\/laixian805-tech\.github\.io\/my-blog\/courses\/blockchain\/sha256-study-notes\//
  )

  assert.match(owaspHtml, /application\/ld\+json/)
  assert.match(
    owaspHtml,
    /https:\/\/laixian805-tech\.github\.io\/my-blog\/security\/owasp-top-10\//
  )
})

test('home page renders as a portal landing page instead of a latest-post feed', () => {
  const homeHtml = readExportedFile('index.html')

  assert.match(homeHtml, /tlx 的学习导航与知识沉淀/)
  assert.match(homeHtml, /大深专研一/)
  assert.match(homeHtml, /课程学习/)
  assert.match(homeHtml, /学习导航/)
  assert.match(homeHtml, /安全专题/)
  assert.match(homeHtml, /归档/)

  assert.doesNotMatch(homeHtml, /阅读全文/)
  assert.doesNotMatch(homeHtml, /发布日期/)
  assert.doesNotMatch(homeHtml, /Reading Notes/)
  assert.doesNotMatch(homeHtml, /Start Here/)
  assert.doesNotMatch(homeHtml, /知识入口总览/)
  assert.doesNotMatch(homeHtml, /四大专题通道/)
  assert.doesNotMatch(homeHtml, /Keep Exploring/)
  assert.doesNotMatch(homeHtml, /Site Snapshot/)
})

test('home page stats expose the agreed blog and security card links', () => {
  const homeHtml = readExportedFile('index.html')

  assert.match(homeHtml, /aria-label="查看 Blog 归档"/)
  assert.match(homeHtml, /aria-label="查看 Security 归档"/)
  assert.match(homeHtml, /Blog 数/)
  assert.match(homeHtml, /安全笔记数/)
})

test('site chrome and metadata reinforce the portal positioning', () => {
  const homeHtml = readExportedFile('index.html')

  assert.match(homeHtml, /tlx 的学习导航与知识库/)
  assert.match(
    homeHtml,
    /把后端、数据库、算法刷题、AI 工具与网络安全学习内容整理成可导航、可归档的个人知识库。/
  )
  assert.match(homeHtml, /Learning Portal/)
  assert.match(homeHtml, /课程学习/)
  assert.match(homeHtml, /杂谈/)
  assert.match(homeHtml, /后端 \/ 算法 \/ AI \/ 网安/)
  assert.doesNotMatch(homeHtml, /可持续扩展的个人 Wiki/)
  assert.doesNotMatch(homeHtml, /持续整理，长期沉淀/)
})

test('site chrome uses leftmost home nav and no longer renders search forms in the header', () => {
  const homeHtml = readExportedFile('index.html')

  assert.match(homeHtml, />首页</)
  assert.match(homeHtml, />归档</)
  assert.match(homeHtml, />课程</)
  assert.match(homeHtml, />杂谈</)
  assert.doesNotMatch(homeHtml, /action="\/my-blog\/search\/"/)
  assert.doesNotMatch(homeHtml, /搜索知识入口、博客和安全笔记/)
})

test('nav page uses the migrated 13-category, 243-site dataset', () => {
  const navHtml = readExportedFile('nav', 'index.html')

  assert.match(navHtml, /243/)
  assert.match(navHtml, /论坛/)
  assert.match(navHtml, /靶场/)
  assert.match(navHtml, /工具链/)
  assert.match(navHtml, /漏洞库/)
  assert.match(navHtml, /AI方面/)
  assert.match(navHtml, /校内福利/)
  assert.match(navHtml, /论文/)
  assert.match(navHtml, /信息搜集/)
})

test('home page status panel avoids fake UV\\/PV fallback numbers', () => {
  const homeHtml = readExportedFile('index.html')

  assert.match(homeHtml, /暂无数据|未接入/)
  assert.doesNotMatch(homeHtml, /730 位朋友/)
  assert.doesNotMatch(homeHtml, /1460 次/)
})

test('projects page participates in the archive-style list system', () => {
  const projectsHtml = readExportedFile('projects', 'index.html')

  assert.doesNotMatch(projectsHtml, /项目归档/)
  assert.doesNotMatch(projectsHtml, /Project Notes/)
  assert.match(projectsHtml, /Local RAG 项目笔记/)
  assert.match(projectsHtml, /Qwen 安全助手项目笔记/)
  assert.match(projectsHtml, /\/projects\/page\/2/)
  assert.match(projectsHtml, /下一页/)
})

test('project archive pagination exports a second page with older project posts', () => {
  const projectsPageTwoHtml = readExportedFile('projects', 'page', '2', 'index.html')

  assert.match(projectsPageTwoHtml, /href="\/my-blog\/projects\/"/)
  assert.match(projectsPageTwoHtml, /上一页/)
  assert.match(projectsPageTwoHtml, /FastAPI 学习笔记|FastAPI 博客全栈项目笔记/)
  assert.match(projectsPageTwoHtml, /全栈入门学习笔记|全栈项目入门/)
})

test('archive-style pages and nav still render card structures after card interaction changes', () => {
  const blogHtml = readExportedFile('blog', 'index.html')
  const projectsHtml = readExportedFile('projects', 'index.html')
  const securityHtml = readExportedFile('security', 'index.html')
  const talksHtml = readExportedFile('talks', 'index.html')
  const navHtml = readExportedFile('nav', 'index.html')

  assert.match(blogHtml, /文章归档/)
  assert.doesNotMatch(blogHtml, /Article Index/)
  assert.doesNotMatch(securityHtml, /Security Notes/)
  assert.doesNotMatch(talksHtml, /这里单独收纳课程之外的杂谈内容/)
  assert.doesNotMatch(projectsHtml, /Projects Archive/)
  assert.match(navHtml, /学习路线分类/)
  assert.match(navHtml, /Current Section/)
})

test('courses page renders the screenshot-style sidebar and blockchain assignment links', () => {
  const coursesHtml = readExportedFile('courses', 'index.html')

  assert.match(coursesHtml, /课程学习/)
  assert.match(coursesHtml, /论文写作指导/)
  assert.match(coursesHtml, /机器学习/)
  assert.match(coursesHtml, /区块链/)
  assert.match(coursesHtml, /数据项目实验与分析/)
  assert.match(coursesHtml, /SHA-256 哈希算法实验说明文档/)
  assert.match(coursesHtml, /ETH 钱包实验说明/)
  assert.match(coursesHtml, /NFT 拍卖实验说明/)
  assert.match(coursesHtml, /椭圆曲线签名实验说明/)
  assert.doesNotMatch(coursesHtml, /大深专研一课程/)
  assert.doesNotMatch(coursesHtml, /Course Index/)
  assert.doesNotMatch(coursesHtml, /内容待补充/)
})

test('talks section publishes only the two requested internship posts', () => {
  const talksHtml = readExportedFile('talks', 'index.html')

  assert.match(talksHtml, /华为实习笔试/)
  assert.match(talksHtml, /荣耀实习笔试/)
  assert.doesNotMatch(talksHtml, /研一寒假学习计划/)
})
