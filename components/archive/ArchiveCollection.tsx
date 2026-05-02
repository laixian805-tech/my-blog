import type { ReactNode } from 'react'
import Link from '@/components/Link'
import ArchiveCard from '@/components/archive/ArchiveCard'
import { groupArchiveItems, type ArchiveListItem } from '@/lib/archive'

interface PaginationProps {
  totalPages: number
  currentPage: number
  basePath: string
}

interface ArchiveCollectionProps {
  title: string
  description?: string
  eyebrow?: string
  items: ArchiveListItem[]
  emptyMessage: string
  showSectionBadge?: boolean
  pagination?: PaginationProps
  titleSuffix?: ReactNode
}

function Pagination({ totalPages, currentPage, basePath }: PaginationProps) {
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="pt-8 pb-8">
      <nav className="flex items-center justify-between">
        {prevPage ? (
          <Link
            href={currentPage - 1 === 1 ? `${basePath}/` : `${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            上一页
          </Link>
        ) : (
          <button className="cursor-auto disabled:opacity-50" disabled>
            上一页
          </button>
        )}

        <span className="text-sm text-gray-500 dark:text-gray-400">
          第 {currentPage} / {totalPages} 页
        </span>

        {nextPage ? (
          <Link href={`${basePath}/page/${currentPage + 1}`} rel="next">
            下一页
          </Link>
        ) : (
          <button className="cursor-auto disabled:opacity-50" disabled>
            下一页
          </button>
        )}
      </nav>
    </div>
  )
}

export default function ArchiveCollection({
  title,
  description,
  eyebrow = 'Archive',
  items,
  emptyMessage,
  showSectionBadge = false,
  pagination,
  titleSuffix,
}: ArchiveCollectionProps) {
  const groupedItems = groupArchiveItems(items)

  return (
    <>
      <div className="space-y-8 pt-6 pb-10">
        <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,253,250,0.94))] px-6 py-7 shadow-[0_20px_48px_-38px_rgba(15,23,42,0.62)] dark:border-gray-800 dark:bg-[linear-gradient(180deg,rgba(2,6,23,0.96),rgba(6,23,23,0.98))]">
          <p className="text-xs font-semibold tracking-[0.24em] text-emerald-700 uppercase dark:text-emerald-300">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-slate-100">
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              {description}
            </p>
          )}
          {titleSuffix && <div className="mt-4">{titleSuffix}</div>}
        </div>

        {!items.length ? (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-white px-6 py-12 text-center text-slate-500 dark:border-gray-700 dark:bg-gray-950/60 dark:text-slate-400">
            {emptyMessage}
          </div>
        ) : (
          groupedItems.map((group) => (
            <section key={group.label} className="grid gap-5 lg:grid-cols-[120px_minmax(0,1fr)]">
              <div className="lg:pt-4">
                <div className="sticky top-24 rounded-[24px] border border-slate-200 bg-white/90 px-4 py-4 text-center shadow-sm dark:border-gray-800 dark:bg-slate-950/82">
                  <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase dark:text-slate-500">
                    Group
                  </p>
                  <p className="mt-2 text-2xl font-black tracking-tight text-slate-950 dark:text-slate-100">
                    {group.label}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {group.items.length} 条
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {group.items.map((item) => (
                  <ArchiveCard key={item.id} item={item} showSectionBadge={showSectionBadge} />
                ))}
              </div>
            </section>
          ))
        )}
      </div>

      {pagination && pagination.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          basePath={pagination.basePath}
        />
      )}
    </>
  )
}
