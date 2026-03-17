import TOCInline from 'pliny/ui/TOCInline'
import type { Blog, SecurityNote } from 'contentlayer/generated'

type TocEntry = Blog['toc'] | SecurityNote['toc']

interface BlogTocProps {
  toc?: TocEntry
  title?: string
  fromHeading?: number
  toHeading?: number
  collapsible?: boolean
  className?: string
}

export default function BlogToc({
  toc = [],
  title = '文章目录',
  fromHeading = 2,
  toHeading = 3,
  collapsible = false,
  className = '',
}: BlogTocProps) {
  const filteredToc = toc.filter(
    (heading) => heading.depth >= fromHeading && heading.depth <= toHeading
  )

  if (filteredToc.length < 2) {
    return null
  }

  const tocListClassName =
    'space-y-2 [&_a]:text-sm [&_a]:leading-6 [&_a]:text-gray-600 [&_a]:transition-colors [&_a]:hover:text-primary-500 dark:[&_a]:text-gray-300 dark:[&_a]:hover:text-primary-400 [&_ul]:mt-2 [&_ul]:space-y-2 [&_ul]:border-l [&_ul]:border-gray-200 [&_ul]:pl-4 dark:[&_ul]:border-gray-800'
  const tocItemClassName = 'list-none'

  if (collapsible) {
    return (
      <div
        className={`rounded-2xl border border-gray-200 bg-gray-50/80 p-4 dark:border-gray-800 dark:bg-gray-900/70 ${className}`}
      >
        <details>
          <summary className="cursor-pointer list-none text-sm font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </summary>
          <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-800">
            <TOCInline
              toc={toc}
              fromHeading={fromHeading}
              toHeading={toHeading}
              ulClassName={tocListClassName}
              liClassName={tocItemClassName}
            />
          </div>
        </details>
      </div>
    )
  }

  return (
    <aside className={className} aria-label={title}>
      <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950/85">
        <h2 className="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <div className="mt-4 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
          <TOCInline
            toc={toc}
            fromHeading={fromHeading}
            toHeading={toHeading}
            ulClassName={tocListClassName}
            liClassName={tocItemClassName}
          />
        </div>
      </div>
    </aside>
  )
}
