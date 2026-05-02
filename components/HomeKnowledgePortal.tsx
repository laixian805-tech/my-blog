import Link from '@/components/Link'
import { allCourseNotes } from 'contentlayer/generated'

export default function HomeKnowledgePortal() {
  const courseCount = allCourseNotes.filter((item) => !item.draft).length

  return (
    <Link
      href="/courses"
      className="card-shell card-shell-interactive group block rounded-[30px] border border-emerald-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(236,253,245,0.92))] px-5 py-5 shadow-[0_20px_48px_-34px_rgba(16,185,129,0.35)] transition hover:border-emerald-300 hover:shadow-[0_28px_58px_-36px_rgba(16,185,129,0.4)] dark:border-emerald-500/18 dark:bg-[linear-gradient(180deg,rgba(6,23,23,0.96),rgba(2,6,23,0.98))] dark:hover:border-emerald-500/40"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-emerald-700 uppercase dark:text-emerald-300">
            课程学习
          </p>
          <h3 className="mt-3 text-xl font-black tracking-tight text-slate-950 dark:text-slate-100">
            大深专研一
          </h3>
        </div>
        <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-slate-500 uppercase ring-1 ring-slate-200/80 dark:bg-slate-950/90 dark:text-slate-300 dark:ring-gray-800">
          {courseCount} 篇
        </span>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-slate-700 transition group-hover:text-emerald-700 dark:text-slate-200 dark:group-hover:text-emerald-300">
          进入课程
        </span>
        <span
          aria-hidden="true"
          className="text-sm font-semibold text-emerald-700 transition group-hover:translate-x-0.5 dark:text-emerald-300"
        >
          &rarr;
        </span>
      </div>
    </Link>
  )
}
