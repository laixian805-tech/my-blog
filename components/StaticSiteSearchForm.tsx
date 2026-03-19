import { withSitePath } from '@/lib/sitePath'

interface StaticSiteSearchFormProps {
  compact?: boolean
  placeholder?: string
  className?: string
  inputClassName?: string
}

export default function StaticSiteSearchForm({
  compact = false,
  placeholder = '搜索博客和网安笔记',
  className = '',
  inputClassName = '',
}: StaticSiteSearchFormProps) {
  const formClassName = compact
    ? 'flex w-full items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm transition dark:border-gray-800 dark:bg-gray-950'
    : 'flex w-full items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2.5 shadow-sm transition dark:border-gray-800 dark:bg-gray-950'
  const searchAction = withSitePath('/search/')

  return (
    <form action={searchAction} method="get" className={`${formClassName} ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={`shrink-0 text-gray-400 dark:text-gray-500 ${compact ? 'h-4 w-4' : 'h-5 w-5'}`}
      >
        <circle cx="11" cy="11" r="6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m19 19-3.5-3.5" />
      </svg>
      <input
        name="q"
        type="search"
        aria-label="搜索博客和网安笔记"
        placeholder={placeholder}
        className={`min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-gray-100 dark:placeholder:text-gray-500 ${inputClassName}`}
      />
      <button
        type="submit"
        className={`rounded-full bg-slate-900 font-medium text-white transition hover:bg-sky-600 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 ${compact ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'}`}
      >
        搜索
      </button>
    </form>
  )
}
