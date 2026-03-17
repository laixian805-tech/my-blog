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
      <div className="grid gap-8 rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(241,245,249,0.9))] p-6 shadow-[0_25px_70px_-50px_rgba(15,23,42,0.55)] sm:p-8 lg:grid-cols-[minmax(280px,320px)_minmax(0,1fr)] lg:items-center dark:border-gray-800 dark:bg-[linear-gradient(135deg,rgba(3,7,18,0.98),rgba(15,23,42,0.92))]">
        <div className="flex flex-col items-center gap-5">
          <div className="relative h-52 w-52 overflow-hidden rounded-full sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80">
            <Image
              src={siteMetadata.homeProfileAvatar}
              alt="首页头像"
              fill
              sizes="(min-width: 1024px) 320px, (min-width: 768px) 288px, 220px"
              className="object-cover"
              priority
            />
          </div>
          <Link
            href={siteMetadata.homeProfileGithub}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-sky-300"
          >
            GitHub
          </Link>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.3em] text-sky-600 uppercase dark:text-sky-300">
              Dashboard
            </p>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Welcome to tlx&apos;s Blog
            </h1>
            <p className="text-lg font-medium text-slate-500 dark:text-slate-300">
              Write the Code, Change the World
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-950/65">
            <div className="mb-4">
              <p className="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase dark:text-slate-500">
                Blog Stats
              </p>
            </div>
            <HomeSiteStats
              totalPosts={totalPosts}
              blogPostCount={blogPostCount}
              securityPostCount={securityPostCount}
              siteStartDate={SITE_START_DATE}
            />
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              访问数据已迁移到 Vercel Analytics 仪表盘查看。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
