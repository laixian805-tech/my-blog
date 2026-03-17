'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

const BUSUANZI_SCRIPT_SRC = 'https://busuanzi.sukap.cn/busuanzi.pure.mini.js'

interface HomeSiteStatsProps {
  totalPosts: number
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

export default function HomeSiteStats({ totalPosts, siteStartDate }: HomeSiteStatsProps) {
  const [uv, setUv] = useState('--')
  const [pv, setPv] = useState('--')
  const [siteAgeDays, setSiteAgeDays] = useState('--')

  useEffect(() => {
    setSiteAgeDays(`${calculateSiteAgeDays(siteStartDate)} 天`)

    const checkValues = () => {
      const nextUv = document.getElementById('busuanzi_value_site_uv')?.textContent?.trim()
      const nextPv = document.getElementById('busuanzi_value_site_pv')?.textContent?.trim()

      if (nextUv && nextUv !== '0') {
        setUv(nextUv)
      }

      if (nextPv && nextPv !== '0') {
        setPv(nextPv)
      }
    }

    checkValues()
    const interval = window.setInterval(checkValues, 600)

    return () => window.clearInterval(interval)
  }, [siteStartDate])

  return (
    <>
      <Script src={BUSUANZI_SCRIPT_SRC} strategy="afterInteractive" />
      <div className="hidden" aria-hidden="true">
        <span id="busuanzi_container_site_uv">
          <span id="busuanzi_value_site_uv" />
        </span>
        <span id="busuanzi_container_site_pv">
          <span id="busuanzi_value_site_pv" />
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="总文章数" value={`${totalPosts} 篇`} />
        <StatCard label="访客 UV" value={uv} />
        <StatCard label="访问 PV" value={pv} />
        <StatCard label="建站天数" value={siteAgeDays} />
      </div>
    </>
  )
}
