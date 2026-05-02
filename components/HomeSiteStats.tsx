import Link from '@/components/Link'
import SiteStatusPanel from '@/components/SiteStatusPanel'

interface HomeSiteStatsProps {
  totalPosts: number
  blogPostCount: number
  securityPostCount: number
  siteStartDate: string
  siteStatus: {
    initialUv: number | null
    initialPv: number | null
    lastUpdated: string
    enableLiveStats: boolean
  }
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

function StatCard({
  label,
  value,
  href,
  ariaLabel,
}: {
  label: string
  value: string
  href?: string
  ariaLabel?: string
}) {
  const className = `${href ? 'group block' : ''} rounded-[24px] border border-white/80 bg-white/72 px-4 py-4 shadow-[0_16px_34px_-30px_rgba(15,23,42,0.28)] backdrop-blur dark:border-white/8 dark:bg-slate-950/68`
  const content = (
    <>
      <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400">
        {label}
      </p>
      <p
        style={systemSansStyle}
        className="card-shell-title mt-3 text-3xl leading-none font-bold tracking-tight text-slate-950 dark:text-slate-50"
      >
        {value}
      </p>
      {href && (
        <p className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 transition group-hover:text-emerald-600 dark:text-emerald-300 dark:group-hover:text-emerald-200">
          <span>查看</span>
          <span aria-hidden="true">&rarr;</span>
        </p>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={className}>
        {content}
      </Link>
    )
  }

  return <div className={className}>{content}</div>
}

export default function HomeSiteStats({
  totalPosts,
  blogPostCount,
  securityPostCount,
  siteStartDate,
  siteStatus,
}: HomeSiteStatsProps) {
  const siteAgeDays = calculateSiteAgeDays(siteStartDate)
  const statItems = [
    { label: '总内容数', value: `${totalPosts}` },
    { label: 'Blog 数', value: `${blogPostCount}`, href: '/blog', ariaLabel: '查看 Blog 归档' },
    {
      label: '安全笔记数',
      value: `${securityPostCount}`,
      href: '/security',
      ariaLabel: '查看 Security 归档',
    },
    { label: '建站天数', value: `${siteAgeDays}` },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        {statItems.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.value}
            href={item.href}
            ariaLabel={item.ariaLabel}
          />
        ))}
      </div>

      <SiteStatusPanel
        initialUv={siteStatus.initialUv}
        initialPv={siteStatus.initialPv}
        lastUpdated={siteStatus.lastUpdated}
        enableLiveStats={siteStatus.enableLiveStats}
      />
    </div>
  )
}
