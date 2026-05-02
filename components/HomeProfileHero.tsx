import Image from '@/components/Image'
import Link from '@/components/Link'
import HomeSiteStats from '@/components/HomeSiteStats'
import { homePortalData } from '@/data/homePortalData'
import siteMetadata from '@/data/siteMetadata'

interface HomeProfileHeroProps {
  totalPosts: number
  blogPostCount: number
  securityPostCount: number
  className?: string
}

const SITE_START_DATE = '2026-03-06T00:00:00+08:00'

function getActionClassName(variant: 'primary' | 'secondary' | 'ghost') {
  if (variant === 'primary') {
    return 'bg-slate-950 text-white hover:bg-emerald-600 dark:bg-emerald-400 dark:text-slate-950 dark:hover:bg-emerald-300'
  }

  if (variant === 'secondary') {
    return 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-100 dark:bg-emerald-500/12 dark:text-emerald-200 dark:ring-emerald-500/20 dark:hover:bg-emerald-500/20'
  }

  return 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-slate-950 dark:text-slate-200 dark:ring-gray-800 dark:hover:bg-slate-900'
}

export default function HomeProfileHero({
  totalPosts,
  blogPostCount,
  securityPostCount,
  className = '',
}: HomeProfileHeroProps) {
  const siteStatus = siteMetadata.siteStatus
  const hero = homePortalData.hero

  return (
    <section className={`pt-6 ${className}`}>
      <div className="relative overflow-hidden rounded-[40px] border border-emerald-100/80 bg-[linear-gradient(135deg,rgba(236,253,245,0.96),rgba(255,255,255,0.98)_42%,rgba(240,253,250,0.96))] p-6 shadow-[0_34px_90px_-52px_rgba(15,23,42,0.7)] sm:p-8 lg:p-10 dark:border-emerald-500/10 dark:bg-[linear-gradient(135deg,rgba(2,6,23,0.98),rgba(6,23,23,0.98)_45%,rgba(3,7,18,0.98))]">
        <div className="pointer-events-none absolute -top-24 right-[-12%] h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/10" />
        <div className="pointer-events-none absolute -bottom-24 left-[-10%] h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/10" />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,420px)] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.34em] text-emerald-700 uppercase dark:text-emerald-300">
                {hero.eyebrow}
              </p>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
                {hero.title}
              </h1>
              <p className="text-lg font-medium text-slate-700 dark:text-slate-200">
                {hero.subtitle}
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                {hero.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {hero.actions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${getActionClassName(
                    action.variant
                  )}`}
                >
                  <span>{action.label}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(220px,260px)]">
              <div className="rounded-[30px] border border-white/60 bg-white/80 p-5 shadow-[0_16px_44px_-34px_rgba(15,23,42,0.42)] backdrop-blur dark:border-white/5 dark:bg-slate-950/70">
                <p className="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase dark:text-slate-500">
                  Reading Notes
                </p>
                <div className="mt-4 space-y-3">
                  <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">
                    这里的内容不是一次性展示，而是持续整理成可查、可跳转、可复用的知识入口。
                  </p>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    如果你是第一次来到这里，建议先从学习导航开始，再进入 Blog 或 Security 专题。
                  </p>
                </div>
              </div>

              <div className="rounded-[30px] border border-emerald-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(236,253,245,0.94))] p-5 shadow-[0_16px_44px_-34px_rgba(16,185,129,0.35)] dark:border-emerald-500/10 dark:bg-[linear-gradient(180deg,rgba(2,6,23,0.94),rgba(6,23,23,0.96))]">
                <p className="text-xs font-semibold tracking-[0.22em] text-emerald-700 uppercase dark:text-emerald-300">
                  Start Here
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                  <li>先看 `学习导航`，快速定位你要学的主题。</li>
                  <li>要看沉淀内容时，进入 `全部文章` 或 `安全专题`。</li>
                  <li>首页更像入口地图，不再承担文章流展示。</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[34px] border border-white/70 bg-white/88 p-5 shadow-[0_18px_52px_-34px_rgba(15,23,42,0.5)] backdrop-blur dark:border-white/5 dark:bg-slate-950/82">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-[0_20px_44px_-28px_rgba(15,23,42,0.55)] sm:mx-0 dark:border-emerald-500/10 dark:bg-slate-950">
                  <Image
                    src={siteMetadata.homeProfileAvatar}
                    alt="首页头像"
                    fill
                    sizes="144px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="min-w-0 flex-1 space-y-3 text-center sm:text-left">
                  <p className="text-xs font-semibold tracking-[0.24em] text-slate-400 uppercase dark:text-slate-500">
                    {siteMetadata.homePortalLabel}
                  </p>
                  <h2 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                    {siteMetadata.headerTitle}
                  </h2>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {siteMetadata.homeProfileTagline}
                  </p>
                  <Link
                    href={siteMetadata.homeProfileGithub}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-emerald-300"
                  >
                    <span>GitHub</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-[34px] border border-white/70 bg-white/88 p-5 shadow-[0_18px_52px_-34px_rgba(15,23,42,0.5)] backdrop-blur dark:border-white/5 dark:bg-slate-950/82">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold tracking-[0.24em] text-slate-400 uppercase dark:text-slate-500">
                    Site Snapshot
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    只展示真实可得的状态信息，访问量拿不到时会明确标出来。
                  </p>
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-slate-500 uppercase dark:bg-gray-800 dark:text-slate-300">
                  Honest
                </div>
              </div>

              <HomeSiteStats
                totalPosts={totalPosts}
                blogPostCount={blogPostCount}
                securityPostCount={securityPostCount}
                siteStartDate={SITE_START_DATE}
                siteStatus={siteStatus}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
