import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Authors, Blog, CourseNote, SecurityNote, Talk } from 'contentlayer/generated'
import BlogToc from '@/components/BlogToc'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import { getPostListLabel } from '@/lib/postPage'

const editUrl = (path: string) => `${siteMetadata.siteRepo}/blob/main/data/${path}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog | SecurityNote | CourseNote | Talk>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  toc?: Blog['toc'] | SecurityNote['toc'] | CourseNote['toc'] | Talk['toc']
  children: ReactNode
}

export default function PostLayout({ content, next, prev, toc, children }: LayoutProps) {
  const { filePath, path, date, title } = content
  const basePath = path.split('/')[0]
  const listLabel = getPostListLabel(basePath)

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">发布日期</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>

          <div className="pt-8 pb-8 xl:grid xl:grid-cols-[minmax(0,1fr)_250px] xl:gap-x-10">
            <div className="min-w-0">
              <BlogToc toc={toc} collapsible className="mb-8 xl:hidden" />

              <div className="prose dark:prose-invert max-w-none pt-2 pb-8">{children}</div>

              {siteMetadata.siteRepo && (
                <div className="border-t border-gray-200 pt-6 text-sm text-gray-700 dark:border-gray-800 dark:text-gray-300">
                  <Link href={editUrl(filePath)}>查看源文件</Link>
                </div>
              )}

              <footer className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-800">
                {(next || prev) && (
                  <div className="flex flex-col gap-4 text-sm leading-6 font-medium sm:flex-row sm:justify-between">
                    {prev?.path ? (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          上一篇
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mt-1">
                          <Link href={`/${prev.path}`}>{prev.title}</Link>
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
                    {next?.path && (
                      <div className="sm:text-right">
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          下一篇
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mt-1">
                          <Link href={`/${next.path}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="pt-6">
                  <Link
                    href={`/${basePath}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={listLabel}
                  >
                    &larr; {listLabel}
                  </Link>
                </div>
              </footer>
            </div>

            <BlogToc toc={toc} className="hidden xl:block" />
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
