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

  const fastApiEntry = searchIndex.blogIndex.find((item) => item.path === 'blog/fastapi-study-notes')
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
  assert.match(fastApiHtml, /https:\/\/laixian805-tech\.github\.io\/my-blog\/blog\/fastapi-study-notes\//)

  assert.match(owaspHtml, /application\/ld\+json/)
  assert.match(owaspHtml, /https:\/\/laixian805-tech\.github\.io\/my-blog\/security\/owasp-top-10\//)
})
