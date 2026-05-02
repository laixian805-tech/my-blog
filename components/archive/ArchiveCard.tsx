import type { ReactNode } from 'react'
import Link from '@/components/Link'
import { archiveSectionMeta, type ArchiveListItem } from '@/lib/archive'

interface ArchiveCardProps {
  item: ArchiveListItem
  showSectionBadge?: boolean
  titleContent?: ReactNode
  summaryContent?: ReactNode
  footerContent?: ReactNode
}

export default function ArchiveCard({
  item,
  showSectionBadge = false,
  titleContent,
  summaryContent,
  footerContent,
}: ArchiveCardProps) {
  const sectionMeta = archiveSectionMeta[item.section]
  const visibleTags = item.tags?.filter(Boolean).slice(0, 4) ?? []

  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white/94 p-5 shadow-[0_18px_38px_-32px_rgba(15,23,42,0.8)] transition duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_30px_60px_-34px_rgba(16,185,129,0.38)] dark:border-gray-800 dark:bg-slate-950/82 dark:hover:border-emerald-500/55">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-br ${sectionMeta.accentClassName}`}
      />

      <div className="relative">
        <div className="flex flex-wrap items-center gap-3">
          {showSectionBadge && (
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${sectionMeta.badgeClassName}`}
            >
              {sectionMeta.label}
            </span>
          )}
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {item.dateLabel}
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-950 dark:text-slate-100">
          <Link href={item.href}>{titleContent ?? item.title}</Link>
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {summaryContent ?? item.summary}
        </p>

        {visibleTags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
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
          <div className="mt-4">{footerContent}</div>
        ) : (
          <div className="mt-5 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
            <Link href={item.href}>继续查看 &rarr;</Link>
          </div>
        )}
      </div>
    </article>
  )
}
