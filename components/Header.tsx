import { Suspense } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import SiteSearchForm from './SiteSearchForm'
import StaticSiteSearchForm from './StaticSiteSearchForm'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  let headerClass =
    'sticky top-0 z-50 border-b border-slate-200/70 bg-white/86 backdrop-blur-xl dark:border-gray-800/80 dark:bg-slate-950/82'
  if (!siteMetadata.stickyNav) {
    headerClass = headerClass.replace('sticky top-0 z-50 ', '')
  }

  return (
    <header className={headerClass}>
      <div className="flex flex-col gap-4 py-5 lg:gap-5">
        <div className="flex items-start justify-between gap-4 lg:items-center">
          <div className="flex min-w-0 flex-1 items-center gap-4">
            <Link href="/" aria-label={siteMetadata.headerTitle} className="shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(236,253,245,0.96))] shadow-[0_14px_30px_-22px_rgba(15,23,42,0.6)] dark:border-emerald-500/10 dark:bg-[linear-gradient(180deg,rgba(2,6,23,0.96),rgba(6,23,23,0.98))]">
                  <Logo />
                </div>
                <div className="hidden min-w-0 sm:block">
                  <p className="text-xs font-semibold tracking-[0.22em] text-emerald-700 uppercase dark:text-emerald-300">
                    {siteMetadata.homePortalLabel}
                  </p>
                  <div className="mt-1 text-lg font-black tracking-tight text-slate-950 dark:text-white">
                    {siteMetadata.headerTitle}
                  </div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {siteMetadata.homeProfileTagline}
                  </p>
                </div>
              </div>
            </Link>

            <div className="hidden min-w-0 flex-1 lg:block">
              <Suspense
                fallback={
                  <StaticSiteSearchForm
                    placeholder="搜索知识入口、博客和安全笔记"
                    className="border-emerald-100/80 bg-white/86 dark:border-gray-800 dark:bg-slate-950/80"
                  />
                }
              >
                <SiteSearchForm
                  placeholder="搜索知识入口、博客和安全笔记"
                  className="border-emerald-100/80 bg-white/86 dark:border-gray-800 dark:bg-slate-950/80"
                />
              </Suspense>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="hidden min-w-0 flex-1 lg:hidden">
            <Suspense
              fallback={
                <StaticSiteSearchForm
                  compact
                  placeholder="搜索知识入口、博客和安全笔记"
                  className="border-emerald-100/80 bg-white/86 dark:border-gray-800 dark:bg-slate-950/80"
                />
              }
            >
              <SiteSearchForm
                compact
                placeholder="搜索知识入口、博客和安全笔记"
                className="border-emerald-100/80 bg-white/86 dark:border-gray-800 dark:bg-slate-950/80"
              />
            </Suspense>
          </div>

          <div className="no-scrollbar hidden max-w-full items-center gap-2 overflow-x-auto sm:flex">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="inline-flex items-center rounded-full border border-transparent bg-transparent px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-200 dark:hover:border-emerald-500/20 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-300"
                >
                  {link.title}
                </Link>
              ))}
          </div>

          <div className="hidden rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-emerald-700 uppercase lg:inline-flex dark:bg-emerald-500/12 dark:text-emerald-300">
            学习入口优先
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
