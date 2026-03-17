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
    'flex items-center justify-between gap-4 bg-white py-6 dark:bg-gray-950 lg:gap-6'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <div className="flex min-w-0 flex-1 items-center gap-4 lg:gap-6">
        <Link href="/" aria-label={siteMetadata.headerTitle} className="shrink-0">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>

        <div className="hidden min-w-0 flex-1 lg:block">
          <Suspense fallback={<StaticSiteSearchForm />}>
            <SiteSearchForm />
          </Suspense>
        </div>
      </div>

      <div className="flex items-center gap-4 leading-5 sm:gap-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
