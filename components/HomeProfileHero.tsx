import Image from '@/components/Image'
import Link from '@/components/Link'
import HomeSiteStats from '@/components/HomeSiteStats'
import siteMetadata from '@/data/siteMetadata'

interface HomeProfileHeroProps {
  totalPosts: number
  blogPostCount: number
  securityPostCount: number
  className?: string
}

const SITE_START_DATE = '2026-03-06T00:00:00+08:00'

export default function HomeProfileHero({
  totalPosts,
  blogPostCount,
  securityPostCount,
  className = '',
}: HomeProfileHeroProps) {
  return (
    <div className={`pt-6 pb-10 ${className}`}>
      <div className="grid gap-8 rounded-[36px] border border-slate-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(241,245,249,0.92))] p-6 shadow-[0_30px_80px_-48px_rgba(15,23,42,0.65)] sm:p-8 lg:grid-cols-[minmax(280px,320px)_minmax(0,1fr)] lg:items-center dark:border-gray-800 dark:bg-[linear-gradient(135deg,rgba(3,7,18,0.98),rgba(15,23,42,0.94))]">
        <div className="flex flex-col items-center gap-5">
          <div className="relative h-56 w-56 overflow-hidden rounded-full border border-slate-200 bg-white shadow-[0_28px_60px_-32px_rgba(15,23,42,0.85)] sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 dark:border-gray-800 dark:bg-gray-950">
            <Image
              src={siteMetadata.homeProfileAvatar}
              alt="首页头像"
              fill
              sizes="(min-width: 1024px) 320px, (min-width: 768px) 288px, 224px"
              className="object-cover"
              priority
            />
          </div>
          <Link
            href={siteMetadata.homeProfileGithub}
            className="inline-flex min-w-32 items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-sky-300"
          >
            GitHub
          </Link>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.32em] text-sky-600 uppercase dark:text-sky-300">
              Dashboard
            </p>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Welcome to tlx&apos;s Blog
            </h1>
            <p className="text-lg font-medium text-slate-500 dark:text-slate-300">
              Write the Code, Change the World
            </p>
          </div>

          <div className="rounded-[30px] border border-slate-200/80 bg-white/70 p-5 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.65)] backdrop-blur dark:border-gray-800 dark:bg-gray-950/60">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase dark:text-slate-500">
                  Blog Stats
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  这里展示站内内容概览与建站信息，访客趋势暂未在首页公开。
                </p>
              </div>
              <div className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
                Overview
              </div>
            </div>
            <HomeSiteStats
              totalPosts={totalPosts}
              blogPostCount={blogPostCount}
              securityPostCount={securityPostCount}
              siteStartDate={SITE_START_DATE}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
