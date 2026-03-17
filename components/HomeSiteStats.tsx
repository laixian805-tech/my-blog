interface HomeSiteStatsProps {
  totalPosts: number
  blogPostCount: number
  securityPostCount: number
  siteStartDate: string
}

function calculateSiteAgeDays(siteStartDate: string) {
  const start = new Date(siteStartDate)
  const now = new Date()
  const diffMs = now.getTime() - start.getTime()
  return Math.max(1, Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1)
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-4 shadow-sm dark:border-gray-800 dark:bg-gray-950/80">
      <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase dark:text-slate-500">
        {label}
      </p>
      <p className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
        {value}
      </p>
    </div>
  )
}

export default function HomeSiteStats({
  totalPosts,
  blogPostCount,
  securityPostCount,
  siteStartDate,
}: HomeSiteStatsProps) {
  const siteAgeDays = `${calculateSiteAgeDays(siteStartDate)} 天`

  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard label="总文章数" value={`${totalPosts} 篇`} />
      <StatCard label="博客文章" value={`${blogPostCount} 篇`} />
      <StatCard label="网安笔记" value={`${securityPostCount} 篇`} />
      <StatCard label="建站天数" value={siteAgeDays} />
    </div>
  )
}
