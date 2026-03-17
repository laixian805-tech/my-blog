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
    <footer>
      <div className="mt-16 flex flex-col items-center">
        {socialItems.length > 0 && (
          <div className="mb-3 flex space-x-4">
            {socialItems.map((item) => (
              <SocialIcon
                key={`${item.kind}-${item.href}`}
                kind={item.kind}
                href={item.href}
                size={6}
              />
            ))}
          </div>
        )}

        <div className="mb-2 flex flex-wrap items-center justify-center gap-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span>{siteMetadata.author}</span>
          <span>·</span>
          <span>&copy; {new Date().getFullYear()}</span>
          <span>·</span>
          <Link href="/">{siteMetadata.title}</Link>
        </div>

        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          使用 Next.js、MDX 和 Tailwind CSS 构建
        </div>
      </div>
    </footer>
  )
}
