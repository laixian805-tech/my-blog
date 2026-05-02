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
  assert.ok(existsSync(path.join(outDir, 'nav', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'projects', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'search', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'security', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'blog', 'fastapi-study-notes', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'security', 'owasp-top-10', 'index.html')))
  assert.ok(existsSync(path.join(outDir, 'search-index.json')))
  assert.equal(existsSync(path.join(outDir, 'blog', 'page', '1', 'index.html')), false)
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
  const owaspHtml = readExportedFile('security', 'owasp-top-10', 'index.html')

  assert.match(homeHtml, /\/my-blog\/_next\//)
  assert.match(homeHtml, /\/my-blog\/static\/favicons\/favicon-32x32\.png/)
  assert.match(homeHtml, /action="\/my-blog\/search\/"/)

  assert.match(paginatedBlogHtml, /https:\/\/laixian805-tech\.github\.io\/my-blog\/blog\/page\/2\//)
  assert.doesNotMatch(paginatedBlogHtml, /\/my-blog\/blog\/page\/1\//)

  assert.match(fastApiHtml, /application\/ld\+json/)
  assert.match(
    fastApiHtml,
    /https:\/\/laixian805-tech\.github\.io\/my-blog\/blog\/fastapi-study-notes\//
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
  assert.match(homeHtml, /学习导航/)
  assert.match(homeHtml, /安全专题/)
  assert.match(homeHtml, /全部文章/)
  assert.match(homeHtml, /知识入口总览/)
  assert.match(homeHtml, /四大专题通道/)
  assert.match(homeHtml, /算法刷题/)
  assert.match(homeHtml, /后端基础/)
  assert.match(homeHtml, /AI 工具/)
  assert.match(homeHtml, /网安资源/)
  assert.match(homeHtml, /社区论坛/)
  assert.match(homeHtml, /工具资源/)
  assert.match(homeHtml, /算法路线/)
  assert.match(homeHtml, /后端学习/)
  assert.match(homeHtml, /AI 实用工具/)
  assert.match(homeHtml, /网络安全笔记/)

  assert.doesNotMatch(homeHtml, /阅读全文/)
  assert.doesNotMatch(homeHtml, /发布日期/)
})

test('site chrome and metadata reinforce the portal positioning', () => {
  const homeHtml = readExportedFile('index.html')

  assert.match(homeHtml, /tlx 的学习导航与知识库/)
  assert.match(
    homeHtml,
    /把后端、数据库、算法刷题、AI 工具与网络安全学习内容整理成可导航、可归档的个人知识库。/
  )
  assert.match(homeHtml, /Learning Portal/)
  assert.match(homeHtml, /学习入口优先/)
  assert.match(homeHtml, /后端 \/ 算法 \/ AI \/ 网安/)
  assert.match(homeHtml, /把学习入口、专题笔记和文章归档整理成一个可持续扩展的个人 Wiki。/)
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

  assert.match(projectsHtml, /项目归档/)
  assert.match(projectsHtml, /个人网站搭建实录/)
  assert.match(projectsHtml, /Cloudflare 优化规划/)
})
