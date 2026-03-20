# 项目安全与稳定性审查报告

更新日期：2026-03-20

## 执行摘要

基于本轮代码整改与验证，原始报告中的高危、中危、低危项已经全部处理完毕，其中：

- 高危项 `H-01`、`H-02` 已修复。
- 中危项 `M-02`、`M-03`、`M-04`、`M-05` 已修复。
- 中危项 `M-01` 已显著缓解，但仍受 GitHub Pages 静态托管能力限制，无法像支持自定义响应头的平台一样彻底落地。
- 低危项 `L-01`、`L-02` 已修复。

当前结论：

- 无未关闭的高危问题。
- 无未关闭的中危代码缺陷。
- 无未关闭的低危工程化缺陷。
- 仍有两类非阻塞告警需要后续单独治理：依赖侧 `punycode` 弃用提示、以及部分 MDX 数学内容触发的 KaTeX Unicode warning。

---

## 高危

### H-01 已修复：JSON-LD 直接注入脚本标签，存在内容驱动的 XSS 风险

- 问题描述：
  文章详情页和安全笔记详情页原先直接把 JSON-LD 对象塞进 `<script type="application/ld+json">`，一旦内容字段包含 `</script>` 等特殊片段，就可能截断脚本标签并形成注入面。
- 风险影响：
  在未来内容来源变复杂、多人协作或引入 CMS 时，这会成为真实的 XSS 入口。
- 代码定位：
  [lib/postPage.ts](C:/Users/tlx/my-blog/lib/postPage.ts#L38)
  [app/blog/[...slug]/page.tsx](C:/Users/tlx/my-blog/app/blog/[...slug]/page.tsx#L95)
  [app/security/[...slug]/page.tsx](C:/Users/tlx/my-blog/app/security/[...slug]/page.tsx#L97)
- 修复建议 / 已实施修复：
  已新增 `serializeJsonLd()`，对 `<`、`>`、`&`、`\u2028`、`\u2029` 做安全转义；博客页和安全页统一改为走安全序列化输出。

### H-02 已修复：搜索页内联全量索引，首屏体积与查询成本会随内容线性增长

- 问题描述：
  搜索索引原先由页面直接内联并传给客户端，页面打开即携带全部搜索数据，后续每次输入都在浏览器内做全量扫描。
- 风险影响：
  内容增长后会放大 HTML 体积、内存占用和输入时 CPU 开销，移动端最容易出现卡顿。
- 代码定位：
  [lib/search-index.ts](C:/Users/tlx/my-blog/lib/search-index.ts#L19)
  [contentlayer.config.ts](C:/Users/tlx/my-blog/contentlayer.config.ts#L60)
  [app/search/page.tsx](C:/Users/tlx/my-blog/app/search/page.tsx#L20)
  [components/SearchPageClient.tsx](C:/Users/tlx/my-blog/components/SearchPageClient.tsx#L367)
- 修复建议 / 已实施修复：
  已改为“构建期生成 `public/search-index.json` + 搜索页首次查询时按需加载”。同时为索引构建增加了字段校验，避免脏内容直接进入搜索索引。

---

## 中危

### M-01 已缓解：生产安全头已集中化，但 GitHub Pages 仍限制完整落地

- 问题描述：
  纯静态 GitHub Pages 无法像 Node 服务或反向代理那样真正下发完整响应头，因此 `CSP`、`X-Frame-Options`、`Permissions-Policy` 等无法在 Pages 上 100% 以响应头生效。
- 风险影响：
  当前代码层面的防护已经明显增强，但如果未来要严格依赖完整的浏览器安全头策略，GitHub Pages 仍不是最理想的平台。
- 代码定位：
  [lib/securityHeaders.js](C:/Users/tlx/my-blog/lib/securityHeaders.js#L1)
  [next.config.js](C:/Users/tlx/my-blog/next.config.js#L1)
  [app/layout.tsx](C:/Users/tlx/my-blog/app/layout.tsx#L59)
- 修复建议 / 已实施修复：
  已把 CSP、Referrer-Policy 和其他安全头集中到单一配置源。
  Node 部署时通过 `headers()` 下发。
  静态导出时通过 `<meta http-equiv="Content-Security-Policy">` 与 `<meta name="referrer">` 做兜底。
  残留说明：
  如果后续要彻底落实 `frame-ancestors`、`HSTS` 等策略，建议接入 Cloudflare 或其他支持自定义响应头的平台。

### M-02 已修复：frontmatter 过度信任，作者和布局写错会直接打断构建

- 问题描述：
  详情页原先默认 frontmatter 中的 `authors`、`layout` 一定正确，一旦写错 slug 或布局名，就可能在构建或渲染阶段直接报错。
- 风险影响：
  多人维护或内容量增长后，单篇内容配置错误可能导致整次发布失败。
- 代码定位：
  [lib/postPage.ts](C:/Users/tlx/my-blog/lib/postPage.ts#L4)
  [app/blog/[...slug]/page.tsx](C:/Users/tlx/my-blog/app/blog/[...slug]/page.tsx#L35)
  [app/security/[...slug]/page.tsx](C:/Users/tlx/my-blog/app/security/[...slug]/page.tsx#L35)
- 修复建议 / 已实施修复：
  已将作者解析与布局解析抽成统一函数，对未知 slug 和未知布局抛出明确错误，避免隐式崩溃。

### M-03 已修复：生产启动脚本错误指向 `next dev`

- 问题描述：
  `start` 脚本如果仍是 `next dev`，后续一旦迁移到 Node 托管环境，很容易误把开发服务器跑在线上。
- 风险影响：
  会直接影响缓存、性能、错误暴露和稳定性。
- 代码定位：
  [package.json](C:/Users/tlx/my-blog/package.json#L5)
- 修复建议 / 已实施修复：
  `start` 已改为 `next start`，开发模式单独保留在 `dev`。

### M-04 已修复：第三方统计脚本默认执行，存在供应链和可用性风险

- 问题描述：
  首页统计区原先直接依赖第三方统计脚本运行，脚本一旦异常、被污染或被墙，就会影响首页行为和数据可信度。
- 风险影响：
  既有安全面风险，也有稳定性问题。
- 代码定位：
  [components/SiteStatusPanel.tsx](C:/Users/tlx/my-blog/components/SiteStatusPanel.tsx#L39)
  [data/siteMetadata.js](C:/Users/tlx/my-blog/data/siteMetadata.js#L26)
- 修复建议 / 已实施修复：
  第三方统计已改为显式开关，默认关闭。
  只有设置 `NEXT_PUBLIC_ENABLE_LIVE_STATS=1` 时才会加载 Busuanzi。
  未开启时首页始终使用本地兜底值。

### M-05 已修复：`/blog` 与 `/blog/page/1` 重复输出

- 问题描述：
  根博客列表页与 `page/1` 同时生成，会让同一内容暴露在两个 URL 上。
- 风险影响：
  会稀释 canonical 信号，也会增加分页维护复杂度。
- 代码定位：
  [app/blog/page/[page]/page.tsx](C:/Users/tlx/my-blog/app/blog/page/[page]/page.tsx#L8)
- 修复建议 / 已实施修复：
  分页路由现在从第 `2` 页开始生成，`page <= 1` 直接 `notFound()`，重复内容已消除。

---

## 低危

### L-01 已修复：首页渲染路径执行阻塞式 `git` 子进程

- 问题描述：
  首页原先在渲染阶段调用 `git log` 获取最近更新时间，会把额外子进程开销带进请求路径。
- 风险影响：
  现在主要是静态站点，影响不大；但未来若切换为常驻 Node 服务，这会成为不必要的吞吐和稳定性损耗。
- 代码定位：
  [components/HomeProfileHero.tsx](C:/Users/tlx/my-blog/components/HomeProfileHero.tsx#L15)
  [data/siteMetadata.js](C:/Users/tlx/my-blog/data/siteMetadata.js#L26)
- 修复建议 / 已实施修复：
  已删除运行时 `git` 调用逻辑，首页直接使用构建期注入的 `NEXT_PUBLIC_LAST_UPDATED` 值。

### L-02 已修复：缺少自动化回归验证

- 问题描述：
  原先仓库没有 `test` 脚本，也没有自动化验证导出产物、分页路由、搜索索引和 `BASE_PATH`。
- 风险影响：
  这类静态站点最容易出现“构建能过，但导出路径、分页或搜索悄悄坏掉”的回归。
- 代码定位：
  [package.json](C:/Users/tlx/my-blog/package.json#L12)
  [tests/smoke/static-export.test.mjs](C:/Users/tlx/my-blog/tests/smoke/static-export.test.mjs#L1)
- 修复建议 / 已实施修复：
  已新增 `yarn test` / `yarn test:smoke` / `yarn test:smoke:built`。
  冒烟测试覆盖了：
  1. 静态导出关键路由是否生成。
  2. `search-index.json` 是否同时包含 Blog 与 Security 索引。
  3. `BASE_PATH`、详情页 metadata、分页去重是否正确落地到导出 HTML。

---

## 残留观察

以下问题当前不构成新的高/中/低危结论，但建议后续单独治理：

### R-01 依赖侧 `punycode` 弃用提示

- 说明：
  `yarn build` 与 `yarn test` 期间仍会看到 `punycode` deprecation warning。
- 风险影响：
  当前更多是依赖老旧实现的信号，不会直接导致发布失败，但说明依赖链中仍有可升级项。
- 建议：
  后续单独梳理依赖树，确认由哪一层依赖引入并在可控范围内升级。

### R-02 部分 MDX 数学内容触发 KaTeX Unicode warning

- 说明：
  若干中文内容位于数学模式中，构建时会打印 KaTeX `unicodeTextInMathMode` warning。
- 风险影响：
  目前不会阻塞构建，但后续若内容量继续增加，会降低构建日志可读性。
- 建议：
  后续单独修正文档中的数学写法，把中文说明移出数学环境。

---

## 本次验证

- `yarn lint`：通过
- `yarn build`：通过
- `yarn test`：通过

## 总结

本轮整改后，原始审查报告中的高危、中危、低危问题都已完成处理，其中 `M-01` 属于“代码已做到平台允许的最优，但平台本身仍有限制”的情况。若未来计划继续提高安全上限，最有价值的下一步是把生产托管切换到支持完整响应头控制的平台，并继续清理依赖和内容层面的非阻塞告警。
