# Project Import And Archive Pagination Design

## Goal

Import the external project notes into the blog as first-class MDX posts, exclude the honeypot proposal, and make the `归档`、`安全`、`项目` sections all use 10 items per page.

## Scope

- Import seven project-note markdown files from `C:\Users\tlx\OneDrive\Desktop\wenjian\markdown\项目笔记`.
- Exclude `蜜罐项目书.md` and ignore `debug.log`.
- Keep source files untouched and only copy content into the repo.
- Change blog archive pagination from 5 items per page to 10 items per page.
- Add pagination to `安全` and `项目` archive-style pages with the same 10-item page size.
- Change the `项目` page to derive its content from blog posts tagged with `项目`.

## Confirmed Decisions

### Import Source

Import these seven files:

1. `boke_fastAPI.md`
2. `Fullstack TypeScriptwen.md`
3. `local-rag项目笔记.md`
4. `minimind.md`
5. `my-blog项目笔记.md`
6. `Qwen安全助手.md`
7. `SZU-HiveMind项目笔记.md`

Do not import:

- `蜜罐项目书.md`
- `debug.log`

### Content Destination

- Convert the imported files into `data/blog/*.mdx`.
- Treat them as normal blog posts so they participate in search, sitemap, archive pages, and post detail pages automatically.

### Metadata Rules

- `title`: use the source document H1 with light cleanup if needed.
- `date`: use the source file modified date as the publish date.
- `tags`: always include `项目`, then add a small set of topic tags that match the article.
- `summary`: derive one concise summary from the opening explanation.
- `draft`: `false`
- `authors`: `['default']`
- `layout`: `PostLayout`

### Projects Page Source

- Stop treating `data/projectsData.ts` as the primary source for the `项目` list page.
- Build the `项目` archive list from published blog posts whose tags include `项目`.
- Keep `data/projectsData.ts` in place for now to avoid unrelated cleanup during this task.

### Pagination Rules

- `归档` page size: `10`
- `安全` page size: `10`
- `项目` page size: `10`

Page 1 stays at the section root, and later pages use `/page/[page]`.

## Implementation Notes

- Introduce shared archive pagination helpers so `blog`、`security`、`projects` can follow the same slicing pattern.
- Update `app/blog/page.tsx` and `app/blog/page/[page]/page.tsx` to use the new page size.
- Add paginated routes for `app/security/page/[page]/page.tsx` and `app/projects/page/[page]/page.tsx`.
- Update the root `security` and `projects` pages to render only the first 10 items and pass pagination metadata into `ArchiveCollection`.
- Add a helper in `lib/archive.ts` for filtering project posts from blog content.
- Extend smoke coverage so static export checks also include paginated `security` and `projects` routes and the imported project posts.

## Validation

- `blog` root and paginated routes use 10 items per page.
- `security` root and paginated routes use 10 items per page.
- `projects` root and paginated routes use 10 items per page.
- `projects` page lists posts tagged `项目` instead of relying only on hard-coded card data.
- The seven imported posts build successfully and render as blog detail pages.
- `蜜罐项目书.md` does not appear anywhere in exported content.
- Existing source files outside the workspace remain unchanged.

## Assumptions

- Imported project notes should live in the blog collection rather than a new document type.
- Source markdown content can be copied as-is after adding frontmatter and minor title cleanup.
- No destructive operation is needed because this task only adds files and updates code inside the workspace.
