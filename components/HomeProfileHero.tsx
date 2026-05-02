import Image from '@/components/Image'
import Link from '@/components/Link'
import HomeKnowledgePortal from '@/components/HomeKnowledgePortal'
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
    return 'bg-slate-950 text-white hover:bg-emerald-600 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-emerald-300'
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
      <div className="relative overflow-hidden rounded-[40px] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(241,245,249,0.95)_52%,rgba(236,253,245,0.92))] px-6 py-6 shadow-[0_34px_90px_-52px_rgba(15,23,42,0.42)] sm:px-8 sm:py-8 lg:px-10 lg:py-10 dark:border-gray-800 dark:bg-[linear-gradient(135deg,rgba(2,6,23,0.98),rgba(6,23,23,0.98)_50%,rgba(3,7,18,0.98))]">
        <div className="pointer-events-none absolute -top-20 right-[-10%] h-56 w-56 rounded-full bg-emerald-200/35 blur-3xl dark:bg-emerald-500/10" />
        <div className="pointer-events-none absolute -bottom-20 left-[-8%] h-48 w-48 rounded-full bg-cyan-200/25 blur-3xl dark:bg-cyan-500/10" />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.12fr)_320px]">
          <div className="grid gap-6 lg:grid-rows-[auto_auto_1fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.32em] text-emerald-700 uppercase dark:text-emerald-300">
                {hero.eyebrow}
              </p>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
                {hero.title}
              </h1>
              <p className="max-w-2xl text-lg font-medium text-slate-700 dark:text-slate-200">
                {hero.subtitle}
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

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-end">
              <HomeSiteStats
                totalPosts={totalPosts}
                blogPostCount={blogPostCount}
                securityPostCount={securityPostCount}
                siteStartDate={SITE_START_DATE}
                siteStatus={siteStatus}
              />
              <div className="lg:self-end">
                <HomeKnowledgePortal />
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/70 bg-white/88 p-5 shadow-[0_18px_52px_-34px_rgba(15,23,42,0.38)] backdrop-blur dark:border-white/5 dark:bg-slate-950/82">
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center lg:flex-col lg:items-start">
                <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-[30px] border border-emerald-100 bg-white shadow-[0_20px_44px_-28px_rgba(15,23,42,0.42)] sm:mx-0 dark:border-emerald-500/10 dark:bg-slate-950">
                  <Image
                    src={siteMetadata.homeProfileAvatar}
                    alt="首页头像"
                    fill
                    sizes="144px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="min-w-0 flex-1 space-y-3 text-center sm:text-left lg:text-left">
                  <p className="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase dark:text-slate-500">
                    {siteMetadata.homePortalLabel}
                  </p>
                  <h2 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                    {siteMetadata.headerTitle}
                  </h2>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {siteMetadata.homeProfileTagline}
                  </p>
                </div>
              </div>

              <Link
                href={siteMetadata.homeProfileGithub}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-emerald-300"
              >
                <span>GitHub</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
