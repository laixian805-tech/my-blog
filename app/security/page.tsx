import { allSecurityNotes } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'
import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({
  title: 'Security',
  description: '整理靶场实战、漏洞练习和网安学习过程中的公开笔记。',
})

export default function SecurityPage() {
  const notes = allCoreContent(sortPosts(allSecurityNotes.filter((item) => !item.draft)))

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="pt-6 pb-8 md:pt-6 md:pb-8">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Security
        </h1>
      </div>

      <div className="py-10">
        <section className="space-y-5">
          {notes.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-gray-300 px-6 py-12 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
              还没有导入公开的网安笔记。
            </div>
          ) : (
            notes.map((note) => (
              <article
                key={note.path}
                className="rounded-3xl border border-gray-200 bg-white px-6 py-6 shadow-sm transition hover:border-sky-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950/70 dark:hover:border-sky-500/60"
              >
                <div className="space-y-3">
                  <time
                    dateTime={note.date}
                    className="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    {formatDate(note.date, siteMetadata.locale)}
                  </time>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    <Link href={`/${note.path}`}>{note.title}</Link>
                  </h2>
                  <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {note.summary}
                  </p>
                  <div className="pt-1 text-sm font-medium">
                    <Link
                      href={`/${note.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`阅读 ${note.title}`}
                    >
                      阅读笔记 &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))
          )}
        </section>
      </div>
    </div>
  )
}
