interface HomeSiteStatsProps {
  totalPosts: number
  blogPostCount: number
  securityPostCount: number
  siteStartDate: string
}

const systemSansStyle = {
  fontFamily: 'Inter, Roboto, ui-sans-serif, system-ui, sans-serif',
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
    <div className="rounded-[24px] border border-gray-100 bg-white px-5 py-4 shadow-[0_4px_20px_rgba(15,23,42,0.04)] dark:border-gray-800 dark:bg-gray-950/90 dark:shadow-[0_10px_24px_rgba(2,6,23,0.16)]">
      <p className="text-[12px] font-semibold tracking-[0.08em] text-gray-600 dark:text-gray-300">
        {label}
      </p>
      <p
        style={systemSansStyle}
        className="mt-4 text-[2.5rem] leading-none font-bold tracking-tight text-slate-900 dark:text-slate-50"
      >
        {value}
      </p>
      <p className="mt-3 line-clamp-1 text-[13px] text-gray-400 dark:text-gray-500">{hint}</p>
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
    <div className="space-y-2.5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-base font-semibold text-slate-800 dark:text-slate-100">{label}</p>
          <p className="mt-1 text-[13px] text-slate-500 dark:text-slate-400">{value}</p>
        </div>
        <p
          style={systemSansStyle}
          className="text-sm font-semibold text-slate-700 dark:text-slate-200"
        >
          {percentage}%
        </p>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-gray-800">
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
  const statusItems = [
    { label: '部署平台', value: 'Vercel' },
    { label: '首页统计', value: '站内概览' },
    { label: '访客趋势', value: '暂未公开' },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="总文章数" value={`${totalPosts}`} hint="公开内容总量" />
        <StatCard label="博客文章" value={`${blogPostCount}`} hint="技术与开发笔记" />
        <StatCard label="网安笔记" value={`${securityPostCount}`} hint="靶场与安全学习记录" />
        <StatCard label="建站天数" value={`${siteAgeDays}`} hint="从首篇公开文章开始" />
      </div>

      <div className="grid gap-3 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,0.92fr)]">
        <div className="rounded-[26px] border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] dark:border-gray-800 dark:bg-gray-950/90 dark:shadow-[0_10px_24px_rgba(2,6,23,0.16)]">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">内容分布</p>
              <p className="mt-1 text-[13px] text-slate-500 dark:text-slate-400">
                Blog 列表与 Security 归档占比
              </p>
            </div>
            <div className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-medium tracking-[0.12em] text-sky-600 uppercase dark:bg-sky-500/12 dark:text-sky-300">
              Live
            </div>
          </div>
          <div className="space-y-5">
            <DistributionRow
              label="Blog"
              value={`${blogPostCount} 篇文章`}
              percentage={blogPercentage}
              barClassName="bg-sky-500 dark:bg-sky-400"
            />
            <DistributionRow
              label="Security"
              value={`${securityPostCount} 篇笔记`}
              percentage={securityPercentage}
              barClassName="bg-emerald-500 dark:bg-emerald-400"
            />
          </div>
        </div>

        <div className="rounded-[26px] border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] dark:border-gray-800 dark:bg-gray-950/90 dark:shadow-[0_10px_24px_rgba(2,6,23,0.16)]">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">站点状态</p>
          <div className="mt-5 space-y-4">
            {statusItems.map((item, index) => (
              <div
                key={item.label}
                className={`flex items-center justify-between gap-6 pb-4 ${
                  index === statusItems.length - 1
                    ? 'pb-0'
                    : 'border-b border-gray-100 dark:border-gray-800'
                }`}
              >
                <span className="text-sm text-slate-400 dark:text-slate-500">{item.label}</span>
                <span
                  style={systemSansStyle}
                  className="text-sm font-semibold text-slate-900 dark:text-slate-100"
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
