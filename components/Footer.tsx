import type { ComponentProps } from 'react'
import Link from './Link'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

type SocialKind = ComponentProps<typeof SocialIcon>['kind']

const socialItems: Array<{ kind: SocialKind; href: string }> = [
  siteMetadata.email ? { kind: 'mail', href: `mailto:${siteMetadata.email}` } : null,
  siteMetadata.github ? { kind: 'github', href: siteMetadata.github } : null,
  siteMetadata.facebook ? { kind: 'facebook', href: siteMetadata.facebook } : null,
  siteMetadata.youtube ? { kind: 'youtube', href: siteMetadata.youtube } : null,
  siteMetadata.linkedin ? { kind: 'linkedin', href: siteMetadata.linkedin } : null,
  siteMetadata.twitter ? { kind: 'twitter', href: siteMetadata.twitter } : null,
  siteMetadata.bluesky ? { kind: 'bluesky', href: siteMetadata.bluesky } : null,
  siteMetadata.x ? { kind: 'x', href: siteMetadata.x } : null,
  siteMetadata.instagram ? { kind: 'instagram', href: siteMetadata.instagram } : null,
  siteMetadata.threads ? { kind: 'threads', href: siteMetadata.threads } : null,
  siteMetadata.medium ? { kind: 'medium', href: siteMetadata.medium } : null,
].filter((item): item is { kind: SocialKind; href: string } => Boolean(item))

export default function Footer() {
  return (
    <footer className="mt-16 pb-10">
      <div className="rounded-[32px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,245,249,0.94))] p-6 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.25)] sm:p-8 dark:border-gray-800 dark:bg-[linear-gradient(180deg,rgba(2,6,23,0.96),rgba(6,23,23,0.98))]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
              {siteMetadata.title}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {siteMetadata.homeProfileTagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/nav"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-emerald-300"
            >
              <span>导航</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-emerald-500/20 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-emerald-500/50 dark:hover:text-emerald-300"
            >
              <span>归档</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/security"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-emerald-500/20 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-emerald-500/50 dark:hover:text-emerald-300"
            >
              <span>安全</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-slate-200/80 pt-6 lg:flex-row lg:items-center lg:justify-between dark:border-gray-800">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span>{siteMetadata.author}</span>
            <span>·</span>
            <span>&copy; {new Date().getFullYear()}</span>
            <span>·</span>
            <Link href="/">{siteMetadata.title}</Link>
            <span>·</span>
            <span>Next.js + MDX + Tailwind CSS</span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {socialItems.length > 0 && (
              <div className="flex items-center gap-3">
                {socialItems.map((item) => (
                  <SocialIcon
                    key={`${item.kind}-${item.href}`}
                    kind={item.kind}
                    href={item.href}
                    size={5}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
