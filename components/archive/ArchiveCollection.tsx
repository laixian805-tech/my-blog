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
  compactHoverDetails?: boolean
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
            className="text-sm font-semibold text-slate-600 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-300"
          >
            上一页
          </Link>
        ) : (
          <button className="cursor-auto text-sm text-slate-400 disabled:opacity-50" disabled>
            上一页
          </button>
        )}

        <span className="text-sm text-slate-500 dark:text-slate-400">
          第 {currentPage} / {totalPages} 页
        </span>

        {nextPage ? (
          <Link
            href={`${basePath}/page/${currentPage + 1}`}
            rel="next"
            className="text-sm font-semibold text-slate-600 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-300"
          >
            下一页
          </Link>
        ) : (
          <button className="cursor-auto text-sm text-slate-400 disabled:opacity-50" disabled>
            下一页
          </button>
        )}
      </nav>
    </div>
  )
}

export default function ArchiveCollection({
  title,
  items,
  emptyMessage,
  showSectionBadge = false,
  pagination,
  titleSuffix,
  compactHoverDetails = false,
}: ArchiveCollectionProps) {
  const groupedItems = groupArchiveItems(items)

  return (
    <>
      <div className="space-y-8 pt-6 pb-10">
        <div className="flex items-end justify-between gap-4">
          <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl dark:text-slate-100">
            {title}
          </h1>
          {titleSuffix && <div>{titleSuffix}</div>}
        </div>

        {!items.length ? (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-white px-6 py-12 text-center text-slate-500 dark:border-gray-700 dark:bg-gray-950/60 dark:text-slate-400">
            {emptyMessage}
          </div>
        ) : (
          groupedItems.map((group) => (
            <section
              key={group.label}
              className="grid gap-4 border-t border-slate-200/80 pt-6 lg:grid-cols-[84px_minmax(0,1fr)] dark:border-gray-800"
            >
              <div className="lg:pt-1">
                <div className="sticky top-24 text-left lg:text-right">
                  <p className="text-[12px] font-semibold tracking-[0.16em] text-slate-400 uppercase dark:text-slate-500">
                    {group.label}
                  </p>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    {group.items.length} 条
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {group.items.map((item) => (
                  <ArchiveCard
                    key={item.id}
                    item={item}
                    showSectionBadge={showSectionBadge}
                    compactHoverDetails={compactHoverDetails}
                  />
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
