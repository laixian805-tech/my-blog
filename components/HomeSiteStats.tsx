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

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[24px] border border-emerald-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,253,250,0.94))] px-4 py-4 shadow-[0_16px_34px_-30px_rgba(15,23,42,0.45)] dark:border-emerald-500/10 dark:bg-[linear-gradient(180deg,rgba(2,6,23,0.94),rgba(6,23,23,0.96))]">
      <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400">
        {label}
      </p>
      <p
        style={systemSansStyle}
        className="mt-3 text-3xl leading-none font-bold tracking-tight text-slate-950 dark:text-slate-50"
      >
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
  siteStatus,
}: HomeSiteStatsProps) {
  const siteAgeDays = calculateSiteAgeDays(siteStartDate)

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <StatCard label="总内容数" value={`${totalPosts}`} />
        <StatCard label="Blog 数" value={`${blogPostCount}`} />
        <StatCard label="安全笔记数" value={`${securityPostCount}`} />
        <StatCard label="建站天数" value={`${siteAgeDays}`} />
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
