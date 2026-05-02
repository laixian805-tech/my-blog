import type { ReactNode } from 'react'
import Link from '@/components/Link'
import { archiveSectionMeta, type ArchiveListItem } from '@/lib/archive'

interface ArchiveCardProps {
  item: ArchiveListItem
  showSectionBadge?: boolean
  titleContent?: ReactNode
  summaryContent?: ReactNode
  footerContent?: ReactNode
  compactHoverDetails?: boolean
}

export default function ArchiveCard({
  item,
  showSectionBadge = false,
  titleContent,
  summaryContent,
  footerContent,
  compactHoverDetails = false,
}: ArchiveCardProps) {
  const sectionMeta = archiveSectionMeta[item.section]
  const visibleTags = item.tags?.filter(Boolean).slice(0, 4) ?? []

  return (
    <article>
      <Link
        href={item.href}
        className="group block rounded-[24px] border border-slate-200/80 bg-white/84 px-5 py-4 shadow-[0_14px_30px_-28px_rgba(15,23,42,0.3)] transition hover:border-emerald-300 hover:bg-white hover:shadow-[0_24px_44px_-30px_rgba(16,185,129,0.22)] dark:border-gray-800 dark:bg-slate-950/80 dark:hover:border-emerald-500/35 dark:hover:bg-slate-950"
      >
        <div className="flex items-start gap-4">
          {showSectionBadge && (
            <span
              className={`mt-0.5 hidden shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold lg:inline-flex ${sectionMeta.badgeClassName}`}
            >
              {sectionMeta.label}
            </span>
          )}

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-bold tracking-tight text-slate-950 transition group-hover:text-emerald-700 dark:text-slate-100 dark:group-hover:text-emerald-300">
                {titleContent ?? item.title}
              </h3>
              <span className="shrink-0 text-sm text-slate-500 dark:text-slate-400">
                {item.dateLabel}
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-200 ${
                compactHoverDetails
                  ? 'mt-3 max-h-24 opacity-100 sm:mt-0 sm:max-h-0 sm:opacity-0 sm:group-hover:mt-3 sm:group-hover:max-h-48 sm:group-hover:opacity-100'
                  : 'mt-3 max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100'
              }`}
            >
              {(summaryContent ?? item.summary) && (
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {summaryContent ?? item.summary}
                </p>
              )}

              {visibleTags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {visibleTags.map((tag) => (
                    <span
                      key={`${item.id}-${tag}`}
                      className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-slate-500 uppercase dark:bg-gray-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {footerContent ? (
                <div className="mt-3">{footerContent}</div>
              ) : (
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  <span>继续查看</span>
                  <span aria-hidden="true">&rarr;</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
