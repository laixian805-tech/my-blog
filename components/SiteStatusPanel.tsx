'use client'

import { ReactNode, useEffect } from 'react'

const systemSansStyle = {
  fontFamily: 'Inter, Roboto, ui-sans-serif, system-ui, sans-serif',
}

type SiteStatusPanelProps = {
  fallbackUv: number
  fallbackPv: number
  lastUpdated: string
}

function StatusRow({ label, value, isLast }: { label: string; value: ReactNode; isLast: boolean }) {
  return (
    <div
      className={`flex items-center justify-between gap-6 pb-4 ${
        isLast ? 'pb-0' : 'border-b border-gray-100 dark:border-gray-800'
      }`}
    >
      <span className="text-sm text-slate-400 dark:text-slate-500">{label}</span>
      <span
        style={systemSansStyle}
        className="text-sm font-semibold text-slate-900 dark:text-slate-100"
      >
        {value}
      </span>
    </div>
  )
}

export default function SiteStatusPanel({
  fallbackUv,
  fallbackPv,
  lastUpdated,
}: SiteStatusPanelProps) {
  useEffect(() => {
    const scriptId = 'busuanzi-script'
    const existingScript = document.getElementById(scriptId)
    existingScript?.remove()

    const script = document.createElement('script')
    script.id = scriptId
    script.async = true
    script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  const statusItems = [
    {
      label: '独立访客 (UV)',
      value: (
        <span id="busuanzi_container_site_uv" className="inline-flex items-center gap-1">
          <span id="busuanzi_value_site_uv" suppressHydrationWarning>
            {fallbackUv}
          </span>
          <span>位朋友</span>
        </span>
      ),
    },
    {
      label: '总访问量 (PV)',
      value: (
        <span id="busuanzi_container_site_pv" className="inline-flex items-center gap-1">
          <span id="busuanzi_value_site_pv" suppressHydrationWarning>
            {fallbackPv}
          </span>
          <span>次</span>
        </span>
      ),
    },
    { label: '最后更新', value: lastUpdated },
  ]

  return (
    <div className="rounded-[26px] border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] dark:border-gray-800 dark:bg-gray-950/90 dark:shadow-[0_10px_24px_rgba(2,6,23,0.16)]">
      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">站点状态</p>
      <div className="mt-5 space-y-4">
        {statusItems.map((item, index) => (
          <StatusRow
            key={item.label}
            label={item.label}
            value={item.value}
            isLast={index === statusItems.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
