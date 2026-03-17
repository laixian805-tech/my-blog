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

function calculatePercentage(value: number, total: number) {
  if (!total) return 0
  return Math.round((value / total) * 100)
}

function StatCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-3xl border border-slate-200/85 bg-white/90 p-4 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.6)] dark:border-gray-800 dark:bg-gray-950/85">
      <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-400 uppercase dark:text-slate-500">
        {label}
      </p>
      <p className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">
        {value}
      </p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{hint}</p>
    </div>
  )
}

function DistributionRow({
  label,
  value,
  percentage,
  barClassName,
}: {
  label: string
  value: string
  percentage: number
  barClassName: string
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{label}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{value}</p>
        </div>
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{percentage}%</p>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-gray-800">
        <div
          className={`h-full rounded-full ${barClassName}`}
          style={{ width: `${Math.max(8, percentage)}%` }}
        />
      </div>
    </div>
  )
}

export default function HomeSiteStats({
  totalPosts,
  blogPostCount,
  securityPostCount,
  siteStartDate,
}: HomeSiteStatsProps) {
  const siteAgeDays = calculateSiteAgeDays(siteStartDate)
  const blogPercentage = calculatePercentage(blogPostCount, totalPosts)
  const securityPercentage = calculatePercentage(securityPostCount, totalPosts)

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="总文章数" value={`${totalPosts}`} hint="公开内容总量" />
        <StatCard label="博客文章" value={`${blogPostCount}`} hint="技术与开发笔记" />
        <StatCard label="网安笔记" value={`${securityPostCount}`} hint="靶场与安全学习记录" />
        <StatCard label="建站天数" value={`${siteAgeDays}`} hint="从首篇公开文章开始" />
      </div>

      <div className="grid gap-3 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
        <div className="rounded-3xl border border-slate-200/85 bg-white/90 p-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.6)] dark:border-gray-800 dark:bg-gray-950/85">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">内容分布</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                首页文章列表仅展示 Blog，Security 独立归档展示。
              </p>
            </div>
            <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-gray-900 dark:text-slate-300">
              Live
            </div>
          </div>
          <div className="space-y-4">
            <DistributionRow
              label="Blog"
              value={`${blogPostCount} 篇文章`}
              percentage={blogPercentage}
              barClassName="bg-gradient-to-r from-sky-500 to-cyan-400"
            />
            <DistributionRow
              label="Security"
              value={`${securityPostCount} 篇笔记`}
              percentage={securityPercentage}
              barClassName="bg-gradient-to-r from-emerald-500 to-teal-400"
            />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200/85 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.14),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.92))] p-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.6)] dark:border-gray-800 dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),linear-gradient(180deg,rgba(2,6,23,0.98),rgba(15,23,42,0.94))]">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">站点状态</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 dark:bg-gray-900/80">
              <span className="text-sm text-slate-500 dark:text-slate-400">部署平台</span>
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Vercel
              </span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 dark:bg-gray-900/80">
              <span className="text-sm text-slate-500 dark:text-slate-400">访问统计</span>
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Analytics
              </span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 dark:bg-gray-900/80">
              <span className="text-sm text-slate-500 dark:text-slate-400">更新时间</span>
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                实时构建
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
