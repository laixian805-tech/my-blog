'use client'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import NextImage from 'next/image'
import { Fragment, useState } from 'react'
import Link from '@/components/Link'
import { PortalCategory, PortalLink, portalCategories, portalLinks } from '@/data/portalData'
import { withSitePath } from '@/lib/sitePath'
import { PortalGlyph } from './PortalIcons'

function getCategoryAccentClasses(categoryId: string, active: boolean) {
  const toneMap = {
    all: active
      ? 'bg-sky-100 text-sky-600 ring-1 ring-sky-200 dark:bg-sky-500/20 dark:text-sky-200 dark:ring-sky-500/30'
      : 'bg-sky-50 text-sky-600 ring-1 ring-sky-100 dark:bg-sky-500/12 dark:text-sky-300 dark:ring-sky-500/20',
    Forum: active
      ? 'bg-violet-100 text-violet-600 ring-1 ring-violet-200 dark:bg-violet-500/20 dark:text-violet-200 dark:ring-violet-500/30'
      : 'bg-violet-50 text-violet-600 ring-1 ring-violet-100 dark:bg-violet-500/12 dark:text-violet-300 dark:ring-violet-500/20',
    TargetDrones: active
      ? 'bg-emerald-100 text-emerald-600 ring-1 ring-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-200 dark:ring-emerald-500/30'
      : 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 dark:bg-emerald-500/12 dark:text-emerald-300 dark:ring-emerald-500/20',
    SlackOff: active
      ? 'bg-fuchsia-100 text-fuchsia-600 ring-1 ring-fuchsia-200 dark:bg-fuchsia-500/20 dark:text-fuchsia-200 dark:ring-fuchsia-500/30'
      : 'bg-fuchsia-50 text-fuchsia-600 ring-1 ring-fuchsia-100 dark:bg-fuchsia-500/12 dark:text-fuchsia-300 dark:ring-fuchsia-500/20',
    ToolChain: active
      ? 'bg-amber-100 text-amber-700 ring-1 ring-amber-200 dark:bg-amber-500/20 dark:text-amber-200 dark:ring-amber-500/30'
      : 'bg-amber-50 text-amber-700 ring-1 ring-amber-100 dark:bg-amber-500/12 dark:text-amber-300 dark:ring-amber-500/20',
    VulnerabilityDatabase: active
      ? 'bg-rose-100 text-rose-600 ring-1 ring-rose-200 dark:bg-rose-500/20 dark:text-rose-200 dark:ring-rose-500/30'
      : 'bg-rose-50 text-rose-600 ring-1 ring-rose-100 dark:bg-rose-500/12 dark:text-rose-300 dark:ring-rose-500/20',
    meme: active
      ? 'bg-cyan-100 text-cyan-600 ring-1 ring-cyan-200 dark:bg-cyan-500/20 dark:text-cyan-200 dark:ring-cyan-500/30'
      : 'bg-cyan-50 text-cyan-600 ring-1 ring-cyan-100 dark:bg-cyan-500/12 dark:text-cyan-300 dark:ring-cyan-500/20',
    AI: active
      ? 'bg-orange-100 text-orange-600 ring-1 ring-orange-200 dark:bg-orange-500/20 dark:text-orange-200 dark:ring-orange-500/30'
      : 'bg-orange-50 text-orange-600 ring-1 ring-orange-100 dark:bg-orange-500/12 dark:text-orange-300 dark:ring-orange-500/20',
    Server: active
      ? 'bg-teal-100 text-teal-700 ring-1 ring-teal-200 dark:bg-teal-500/20 dark:text-teal-200 dark:ring-teal-500/30'
      : 'bg-teal-50 text-teal-700 ring-1 ring-teal-100 dark:bg-teal-500/12 dark:text-teal-300 dark:ring-teal-500/20',
    CampusWelfare: active
      ? 'bg-lime-100 text-lime-700 ring-1 ring-lime-200 dark:bg-lime-500/20 dark:text-lime-200 dark:ring-lime-500/30'
      : 'bg-lime-50 text-lime-700 ring-1 ring-lime-100 dark:bg-lime-500/12 dark:text-lime-300 dark:ring-lime-500/20',
    papers: active
      ? 'bg-indigo-100 text-indigo-700 ring-1 ring-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-200 dark:ring-indigo-500/30'
      : 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100 dark:bg-indigo-500/12 dark:text-indigo-300 dark:ring-indigo-500/20',
    gowork: active
      ? 'bg-amber-100 text-amber-700 ring-1 ring-amber-200 dark:bg-amber-500/20 dark:text-amber-200 dark:ring-amber-500/30'
      : 'bg-amber-50 text-amber-700 ring-1 ring-amber-100 dark:bg-amber-500/12 dark:text-amber-300 dark:ring-amber-500/20',
    Information: active
      ? 'bg-slate-200 text-slate-700 ring-1 ring-slate-300 dark:bg-slate-700/50 dark:text-slate-100 dark:ring-slate-600'
      : 'bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700',
  } as const

  return toneMap[categoryId as keyof typeof toneMap] ?? toneMap.all
}

function getCategoryBadgeClasses(categoryId: string) {
  return getCategoryAccentClasses(categoryId, false)
}

function getCategorySiteIconClasses(categoryId: string) {
  const toneMap = {
    all: 'bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-[0_14px_28px_-18px_rgba(14,165,233,0.85)]',
    Forum:
      'bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-[0_14px_28px_-18px_rgba(168,85,247,0.85)]',
    TargetDrones:
      'bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-[0_14px_28px_-18px_rgba(16,185,129,0.85)]',
    SlackOff:
      'bg-gradient-to-br from-fuchsia-500 to-pink-500 text-white shadow-[0_14px_28px_-18px_rgba(217,70,239,0.85)]',
    ToolChain:
      'bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-[0_14px_28px_-18px_rgba(245,158,11,0.9)]',
    VulnerabilityDatabase:
      'bg-gradient-to-br from-rose-500 to-red-500 text-white shadow-[0_14px_28px_-18px_rgba(244,63,94,0.85)]',
    meme: 'bg-gradient-to-br from-cyan-500 to-sky-500 text-white shadow-[0_14px_28px_-18px_rgba(6,182,212,0.85)]',
    AI: 'bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-[0_14px_28px_-18px_rgba(249,115,22,0.85)]',
    Server:
      'bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-[0_14px_28px_-18px_rgba(20,184,166,0.85)]',
    CampusWelfare:
      'bg-gradient-to-br from-lime-500 to-emerald-500 text-white shadow-[0_14px_28px_-18px_rgba(132,204,22,0.85)]',
    papers:
      'bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-[0_14px_28px_-18px_rgba(99,102,241,0.85)]',
    gowork:
      'bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-[0_14px_28px_-18px_rgba(245,158,11,0.9)]',
    Information:
      'bg-gradient-to-br from-slate-600 to-slate-800 text-white shadow-[0_14px_28px_-18px_rgba(51,65,85,0.85)]',
  } as const

  return toneMap[categoryId as keyof typeof toneMap] ?? toneMap.all
}

function getCategoryExternalClasses(categoryId: string) {
  const toneMap = {
    all: 'text-sky-300 group-hover:text-sky-500 dark:text-sky-400/80 dark:group-hover:text-sky-300',
    Forum:
      'text-violet-300 group-hover:text-violet-500 dark:text-violet-400/80 dark:group-hover:text-violet-300',
    TargetDrones:
      'text-emerald-300 group-hover:text-emerald-500 dark:text-emerald-400/80 dark:group-hover:text-emerald-300',
    SlackOff:
      'text-fuchsia-300 group-hover:text-fuchsia-500 dark:text-fuchsia-400/80 dark:group-hover:text-fuchsia-300',
    ToolChain:
      'text-amber-300 group-hover:text-amber-500 dark:text-amber-400/80 dark:group-hover:text-amber-300',
    VulnerabilityDatabase:
      'text-rose-300 group-hover:text-rose-500 dark:text-rose-400/80 dark:group-hover:text-rose-300',
    meme: 'text-cyan-300 group-hover:text-cyan-500 dark:text-cyan-400/80 dark:group-hover:text-cyan-300',
    AI: 'text-orange-300 group-hover:text-orange-500 dark:text-orange-400/80 dark:group-hover:text-orange-300',
    Server:
      'text-teal-300 group-hover:text-teal-500 dark:text-teal-400/80 dark:group-hover:text-teal-300',
    CampusWelfare:
      'text-lime-300 group-hover:text-lime-500 dark:text-lime-400/80 dark:group-hover:text-lime-300',
    papers:
      'text-indigo-300 group-hover:text-indigo-500 dark:text-indigo-400/80 dark:group-hover:text-indigo-300',
    gowork:
      'text-amber-300 group-hover:text-amber-500 dark:text-amber-400/80 dark:group-hover:text-amber-300',
    Information:
      'text-slate-300 group-hover:text-slate-500 dark:text-slate-400/80 dark:group-hover:text-slate-200',
  } as const

  return toneMap[categoryId as keyof typeof toneMap] ?? toneMap.all
}

function getCategoryLabel(categoryId: string) {
  return portalCategories.find((category) => category.id === categoryId)?.label ?? '未分类'
}

function getDomainLabel(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

function CategoryButton({
  category,
  active,
  count,
  onClick,
}: {
  category: PortalCategory
  active: boolean
  count: number
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${
        active
          ? 'border-sky-300 bg-sky-50 text-sky-700 shadow-sm dark:border-sky-500/60 dark:bg-sky-500/10 dark:text-sky-200'
          : 'border-transparent bg-transparent text-slate-600 hover:border-slate-200 hover:bg-white hover:text-slate-900 dark:text-slate-300 dark:hover:border-gray-700 dark:hover:bg-gray-900 dark:hover:text-white'
      }`}
      aria-pressed={active}
    >
      <span className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-2xl ${getCategoryAccentClasses(
            category.id,
            active
          )}`}
        >
          <PortalGlyph name={category.icon} className="h-5 w-5" />
        </span>
        <span className="text-sm font-semibold">{category.label}</span>
      </span>
      <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{count}</span>
    </button>
  )
}

function PortalSiteIcon({
  title,
  iconPath,
  categoryId,
}: {
  title: string
  iconPath?: string
  categoryId: string
}) {
  const resolvedIconSrc = iconPath ? withSitePath(iconPath) : null
  const [failed, setFailed] = useState(!resolvedIconSrc)

  if (!resolvedIconSrc || failed) {
    return (
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold ${getCategorySiteIconClasses(
          categoryId
        )}`}
      >
        {title.slice(0, 1).toUpperCase()}
      </div>
    )
  }

  return (
    <NextImage
      src={resolvedIconSrc}
      alt={`${title} 图标`}
      width={48}
      height={48}
      loading="lazy"
      decoding="async"
      unoptimized
      className="h-12 w-12 rounded-2xl border border-slate-200 bg-white object-contain p-1.5 shadow-[0_12px_24px_-20px_rgba(15,23,42,0.75)] dark:border-gray-700 dark:bg-gray-900"
      onError={() => setFailed(true)}
    />
  )
}

function PortalCard({ link, showCategoryLabel }: { link: PortalLink; showCategoryLabel: boolean }) {
  const categoryLabel = getCategoryLabel(link.categoryId)
  const keywordPreview = link.keywords.slice(0, 3)

  return (
    <Link
      href={link.url}
      className="group flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_12px_35px_-24px_rgba(15,23,42,0.7)] transition duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_25px_50px_-25px_rgba(14,165,233,0.45)] dark:border-gray-800 dark:bg-gray-900 dark:hover:border-sky-500/70"
      aria-label={`打开 ${link.title}`}
    >
      <div className="flex items-start gap-4">
        <PortalSiteIcon title={link.title} iconPath={link.iconPath} categoryId={link.categoryId} />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-base font-semibold text-slate-900 dark:text-slate-100">
                {link.title}
              </h3>
              <p className="mt-1 text-xs font-medium tracking-wide text-slate-400 uppercase dark:text-slate-500">
                {getDomainLabel(link.url)}
              </p>
            </div>
            <span className={`transition ${getCategoryExternalClasses(link.categoryId)}`}>
              <PortalGlyph name="external" className="h-4 w-4" />
            </span>
          </div>
          {showCategoryLabel && (
            <span
              className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${getCategoryBadgeClasses(
                link.categoryId
              )}`}
            >
              {categoryLabel}
            </span>
          )}
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {link.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {keywordPreview.map((keyword) => (
          <span
            key={`${link.id}-${keyword}`}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500 dark:bg-gray-800 dark:text-slate-300"
          >
            {keyword}
          </span>
        ))}
      </div>
    </Link>
  )
}

function CategoryList({
  activeCategoryId,
  onSelect,
}: {
  activeCategoryId: string
  onSelect: (categoryId: string) => void
}) {
  return (
    <div className="space-y-2">
      {portalCategories.map((category) => {
        const count =
          category.id === 'all'
            ? portalLinks.length
            : portalLinks.filter((link) => link.categoryId === category.id).length

        return (
          <CategoryButton
            key={category.id}
            category={category}
            active={activeCategoryId === category.id}
            count={count}
            onClick={() => onSelect(category.id)}
          />
        )
      })}
    </div>
  )
}

export default function NavPortal({ initialCategoryId = 'all' }: { initialCategoryId?: string }) {
  const normalizedCategoryId = portalCategories.some(
    (category) => category.id === initialCategoryId
  )
    ? initialCategoryId
    : 'all'

  const [activeCategoryId, setActiveCategoryId] = useState(normalizedCategoryId)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const activeCategory =
    portalCategories.find((category) => category.id === activeCategoryId) ?? portalCategories[0]

  const filteredLinks =
    activeCategoryId === 'all'
      ? portalLinks
      : portalLinks.filter((link) => link.categoryId === activeCategoryId)

  const resultTitle = activeCategory.label === '全部' ? '全部导航' : activeCategory.label
  const resultDescription =
    activeCategoryId === 'all'
      ? `集中收纳常用学习站点，目前共 ${filteredLinks.length} 个入口。`
      : `当前分类下共整理了 ${filteredLinks.length} 个常用站点。`

  return (
    <div className="relative right-1/2 left-1/2 -mx-[50vw] w-screen overflow-x-clip border-y border-slate-200 bg-[linear-gradient(180deg,rgba(241,245,249,0.95),rgba(248,250,252,1))] dark:border-gray-800 dark:bg-[linear-gradient(180deg,rgba(2,6,23,0.96),rgba(3,7,18,1))]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-[28px] border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950/85">
              <div className="mb-4 px-1">
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
                  Categories
                </p>
                <h2 className="mt-2 text-lg font-bold text-slate-900 dark:text-slate-100">
                  学习路线分类
                </h2>
              </div>
              <CategoryList activeCategoryId={activeCategoryId} onSelect={setActiveCategoryId} />
            </div>
          </aside>

          <section className="min-w-0">
            <div className="rounded-[28px] border border-slate-200 bg-white/90 p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950/85">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
                    Current Section
                  </p>
                  <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    {resultTitle}
                  </h1>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {resultDescription}
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 lg:hidden dark:border-gray-700 dark:bg-gray-900 dark:text-slate-100 dark:hover:border-sky-500 dark:hover:text-sky-200"
                  onClick={() => setDrawerOpen(true)}
                >
                  <PortalGlyph name="menu" className="h-5 w-5" />
                  <span>分类面板</span>
                </button>
              </div>

              {filteredLinks.length > 0 ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredLinks.map((link) => (
                    <PortalCard
                      key={link.id}
                      link={link}
                      showCategoryLabel={activeCategoryId === 'all'}
                    />
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-[24px] border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center dark:border-gray-700 dark:bg-gray-900">
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    这个分类还没有整理站点
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    可以先切回“全部”查看完整导航。
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      <Transition show={drawerOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setDrawerOpen}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 flex justify-start">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="-translate-x-full opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="ease-in duration-150"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="-translate-x-full opacity-0"
              >
                <DialogPanel className="h-full w-[88vw] max-w-sm border-r border-slate-200 bg-white px-5 py-6 shadow-2xl dark:border-gray-800 dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
                        Categories
                      </p>
                      <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                        学习路线分类
                      </h2>
                    </div>
                    <button
                      type="button"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-500 transition hover:border-sky-300 hover:text-sky-700 dark:border-gray-700 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-200"
                      onClick={() => setDrawerOpen(false)}
                    >
                      <PortalGlyph name="close" className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="mt-6">
                    <CategoryList
                      activeCategoryId={activeCategoryId}
                      onSelect={(categoryId) => {
                        setActiveCategoryId(categoryId)
                        setDrawerOpen(false)
                      }}
                    />
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
