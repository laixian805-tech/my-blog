import Link from '@/components/Link'
import { homePortalData } from '@/data/homePortalData'
import { portalLinks } from '@/data/portalData'
import { PortalGlyph } from '@/components/nav/PortalIcons'

function getCategoryCount(categoryId: string) {
  return portalLinks.filter((link) => link.categoryId === categoryId).length
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-xs font-semibold tracking-[0.28em] text-emerald-600 uppercase dark:text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  )
}

export default function HomeKnowledgePortal() {
  return (
    <div className="space-y-10">
      <section className="rounded-[34px] border border-emerald-100/80 bg-white/92 p-6 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)] sm:p-8 dark:border-emerald-500/10 dark:bg-slate-950/86">
        <SectionHeading
          eyebrow="Knowledge Entry"
          title="知识入口总览"
          description="先按主题进入，再顺着导航继续下钻。首页优先提供的是学习入口，而不是最新更新流。"
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {homePortalData.featuredCategories.map((item) => {
            const count = getCategoryCount(item.categoryId)

            return (
              <Link
                key={item.categoryId}
                href={item.href}
                className="group flex h-full flex-col rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(240,253,250,0.92))] p-5 shadow-[0_16px_36px_-28px_rgba(15,23,42,0.5)] transition duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_28px_52px_-30px_rgba(16,185,129,0.35)] dark:border-gray-800 dark:bg-[linear-gradient(180deg,rgba(2,6,23,0.96),rgba(6,23,23,0.98))] dark:hover:border-emerald-500/60"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 dark:bg-emerald-500/12 dark:text-emerald-300 dark:ring-emerald-500/20">
                    <PortalGlyph name={item.icon} className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-emerald-700 uppercase dark:bg-emerald-500/12 dark:text-emerald-300">
                    {count} Sites
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-lg font-bold text-slate-950 dark:text-slate-100">
                    {item.label}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-700 transition group-hover:text-emerald-600 dark:text-emerald-300 dark:group-hover:text-emerald-200">
                  <span>{item.ctaLabel}</span>
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="rounded-[34px] border border-slate-200/90 bg-white/92 p-6 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)] sm:p-8 dark:border-gray-800 dark:bg-slate-950/86">
        <SectionHeading
          eyebrow="Focus Tracks"
          title="四大专题通道"
          description="如果你不想先看所有分类，可以直接从这四条主线路进入，快速找到最适合的阅读入口。"
        />

        <div className="mt-8 grid gap-4 xl:grid-cols-2">
          {homePortalData.focusTracks.map((track) => (
            <Link
              key={track.title}
              href={track.href}
              className={`group relative overflow-hidden rounded-[30px] bg-gradient-to-br ${track.accentClassName} p-[1px] transition duration-200 hover:-translate-y-1`}
            >
              <div className="h-full rounded-[29px] bg-white/96 p-6 dark:bg-slate-950/94">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-slate-100 dark:text-slate-950">
                    <PortalGlyph name={track.icon} className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-slate-500 uppercase dark:bg-gray-800 dark:text-slate-300">
                    Topic
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <h3 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                    {track.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {track.description}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{track.note}</p>
                </div>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition group-hover:bg-emerald-600 dark:bg-slate-100 dark:text-slate-950 dark:group-hover:bg-emerald-300">
                  <span>{track.actionLabel}</span>
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-[34px] border border-slate-200/90 bg-[linear-gradient(180deg,rgba(236,253,245,0.96),rgba(255,255,255,0.98))] p-6 shadow-[0_24px_60px_-44px_rgba(15,23,42,0.42)] sm:p-8 dark:border-gray-800 dark:bg-[linear-gradient(180deg,rgba(6,23,23,0.98),rgba(2,6,23,0.98))]">
        <SectionHeading
          eyebrow={homePortalData.closing.eyebrow}
          title={homePortalData.closing.title}
          description={homePortalData.closing.description}
        />

        <div className="mt-6 flex flex-wrap gap-3">
          {homePortalData.closing.links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-emerald-500/20 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-emerald-500/50 dark:hover:text-emerald-300"
            >
              <span>{item.label}</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
