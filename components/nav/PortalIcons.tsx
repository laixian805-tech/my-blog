import { PortalIconName } from '@/data/portalData'

interface PortalGlyphProps {
  name: PortalIconName | 'search' | 'menu' | 'close' | 'external'
  className?: string
}

export function PortalGlyph({ name, className = 'h-5 w-5' }: PortalGlyphProps) {
  const commonProps = {
    className,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    viewBox: '0 0 24 24',
  }

  switch (name) {
    case 'grid':
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 4.75h5.5v5.5h-5.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.75 4.75h5.5v5.5h-5.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 13.75h5.5v5.5h-5.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.75 13.75h5.5v5.5h-5.5z" />
        </svg>
      )
    case 'briefcase':
      return (
        <svg {...commonProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 6.5V5.75A1.75 1.75 0 0 1 10.75 4h2.5A1.75 1.75 0 0 1 15 5.75v.75"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 10.25c0-1.38 1.12-2.5 2.5-2.5h11c1.38 0 2.5 1.12 2.5 2.5v5.25A2.5 2.5 0 0 1 17.5 18h-11A2.5 2.5 0 0 1 4 15.5v-5.25Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 12h4" />
        </svg>
      )
    case 'terminal':
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m7 8 3 3-3 3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.5 14H17" />
          <rect x="4" y="5" width="16" height="14" rx="2.5" />
        </svg>
      )
    case 'server':
      return (
        <svg {...commonProps}>
          <rect x="4" y="5" width="16" height="5" rx="2" />
          <rect x="4" y="14" width="16" height="5" rx="2" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 7.5h.01M7.5 16.5h.01M11 7.5h6M11 16.5h6"
          />
        </svg>
      )
    case 'sparkles':
      return (
        <svg {...commonProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3.5 13.7 8.3 18.5 10 13.7 11.7 12 16.5 10.3 11.7 5.5 10 10.3 8.3 12 3.5Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.5 4 .7 2 .8.3-.8.3-.7 2-.7-2-.8-.3.8-.3.7-2ZM6 15.5l.5 1.5 1.5.5-1.5.5L6 20l-.5-1.5L4 18l1.5-.5L6 15.5Z"
          />
        </svg>
      )
    case 'shield':
      return (
        <svg {...commonProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4 6.5 6v4.2c0 4.2 2.3 8 5.5 9.8 3.2-1.8 5.5-5.6 5.5-9.8V6L12 4Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 12 1.7 1.7 3.3-3.4" />
        </svg>
      )
    case 'users':
      return (
        <svg {...commonProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.5 18.5v-.75A3.75 3.75 0 0 0 11.75 14h-1.5a3.75 3.75 0 0 0-3.75 3.75v.75"
          />
          <circle cx="11" cy="8.75" r="2.75" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.5v-.25A3.25 3.25 0 0 0 15.5 15M15.25 6.5A2.5 2.5 0 0 1 15.25 11.5"
          />
        </svg>
      )
    case 'toolbox':
      return (
        <svg {...commonProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 7V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 10.5h16v5A2.5 2.5 0 0 1 17.5 18h-11A2.5 2.5 0 0 1 4 15.5v-5Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 10.5v2h4v-2" />
        </svg>
      )
    case 'book-open':
      return (
        <svg {...commonProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 6.5A2.5 2.5 0 0 1 7.5 4H19v14H7.5A2.5 2.5 0 0 0 5 20V6.5Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 6.5A2.5 2.5 0 0 1 7.5 4H19" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 20h12.5" />
        </svg>
      )
    case 'github':
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 18.5c-4 .9-4-2-5.5-2.5M14.5 20v-2.1a3.3 3.3 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.6A5.2 5.2 0 0 0 18.3 5a4.8 4.8 0 0 0-.1-3.5s-1.1-.3-3.7 1.4a12.8 12.8 0 0 0-6.8 0C5.1 1.2 4 1.5 4 1.5A4.8 4.8 0 0 0 3.9 5a5.2 5.2 0 0 0-1.4 3.7c0 5.1 3.1 6.3 6.1 6.6a3.3 3.3 0 0 0-.9 2.6V20"
          />
        </svg>
      )
    case 'search':
      return (
        <svg {...commonProps}>
          <circle cx="11" cy="11" r="6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 19-3.5-3.5" />
        </svg>
      )
    case 'menu':
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 7h15M4.5 12h15M4.5 17h15" />
        </svg>
      )
    case 'close':
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 6 12 12M18 6 6 18" />
        </svg>
      )
    case 'external':
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5h6v6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 5-8.5 8.5" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7H6.5A1.5 1.5 0 0 0 5 8.5v9A1.5 1.5 0 0 0 6.5 19h9a1.5 1.5 0 0 0 1.5-1.5V16"
          />
        </svg>
      )
    default:
      return null
  }
}
