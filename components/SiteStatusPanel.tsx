'use client'

import { ReactNode, useEffect, useState } from 'react'

const systemSansStyle = {
  fontFamily: 'Inter, Roboto, ui-sans-serif, system-ui, sans-serif',
}

type SiteStatusPanelProps = {
  initialUv: number | null
  initialPv: number | null
  lastUpdated: string
  enableLiveStats: boolean
}

function StatusRow({ label, value, isLast }: { label: string; value: ReactNode; isLast: boolean }) {
  return (
    <div
      className={`flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between ${
        isLast ? 'pb-0' : 'border-b border-gray-100 pb-4 dark:border-gray-800'
      }`}
    >
      <span className="text-sm whitespace-nowrap text-slate-400 dark:text-slate-500">{label}</span>
      <span
        style={systemSansStyle}
        className="self-start text-sm font-semibold text-slate-900 sm:self-auto dark:text-slate-100"
      >
        {value}
      </span>
    </div>
  )
}

function readBusuanziValue(id: string) {
  const raw = document.getElementById(id)?.textContent?.replace(/[^\d]/g, '') ?? ''
  return raw.length > 0 ? raw : null
}

export default function SiteStatusPanel({
  initialUv,
  initialPv,
  lastUpdated,
  enableLiveStats,
}: SiteStatusPanelProps) {
  const [uvValue, setUvValue] = useState<string | null>(() =>
    initialUv == null ? null : String(initialUv)
  )
  const [pvValue, setPvValue] = useState<string | null>(() =>
    initialPv == null ? null : String(initialPv)
  )

  useEffect(() => {
    if (!enableLiveStats) {
      return
    }

    const scriptId = 'busuanzi-script'
    const existingScript = document.getElementById(scriptId)
    existingScript?.remove()

    const syncLiveStats = () => {
      const nextUv = readBusuanziValue('busuanzi_value_site_uv')
      const nextPv = readBusuanziValue('busuanzi_value_site_pv')

      if (!nextUv || !nextPv) {
        return false
      }

      setUvValue(nextUv)
      setPvValue(nextPv)
      return true
    }

    const applyFallbackStats = () => {
      setUvValue(initialUv == null ? null : String(initialUv))
      setPvValue(initialPv == null ? null : String(initialPv))
    }

    applyFallbackStats()

    const script = document.createElement('script')
    script.id = scriptId
    script.async = true
    script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
    script.onload = () => {
      syncLiveStats()
    }
    script.onerror = () => {
      applyFallbackStats()
    }
    document.body.appendChild(script)

    const observer = new MutationObserver(() => {
      syncLiveStats()
    })

    const observedTargets = ['busuanzi_value_site_uv', 'busuanzi_value_site_pv']
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node))

    observedTargets.forEach((target) => {
      observer.observe(target, { childList: true, characterData: true, subtree: true })
    })

    const pollTimer = window.setInterval(() => {
      if (syncLiveStats()) {
        window.clearInterval(pollTimer)
      }
    }, 300)

    const fallbackTimer = window.setTimeout(() => {
      if (!syncLiveStats()) {
        applyFallbackStats()
      }
      window.clearInterval(pollTimer)
    }, 1800)

    return () => {
      observer.disconnect()
      window.clearInterval(pollTimer)
      window.clearTimeout(fallbackTimer)
      script.remove()
    }
  }, [enableLiveStats, initialPv, initialUv])

  const uvText = uvValue ? `${uvValue} 位朋友` : enableLiveStats ? '暂无数据' : '未接入'
  const pvText = pvValue ? `${pvValue} 次` : enableLiveStats ? '暂无数据' : '未接入'

  const statusItems = [
    {
      label: '独立访客 (UV)',
      value: <span className="whitespace-nowrap">{uvText}</span>,
    },
    {
      label: '总访问量 (PV)',
      value: <span className="whitespace-nowrap">{pvText}</span>,
    },
    { label: '最后更新', value: <span className="whitespace-nowrap">{lastUpdated}</span> },
  ]

  return (
    <div className="rounded-[26px] border border-slate-200/80 bg-white/88 p-5 shadow-[0_16px_34px_-30px_rgba(15,23,42,0.45)] dark:border-gray-800 dark:bg-slate-950/88">
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
      {enableLiveStats && (
        <div aria-hidden="true" className="hidden">
          <span id="busuanzi_container_site_uv">
            <span id="busuanzi_value_site_uv" />
          </span>
          <span id="busuanzi_container_site_pv">
            <span id="busuanzi_value_site_pv" />
          </span>
        </div>
      )}
    </div>
  )
}
