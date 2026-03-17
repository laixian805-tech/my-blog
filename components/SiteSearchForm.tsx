'use client'

import { FormEvent, useEffect, useId, useState } from 'react'
import { useSearchParams } from 'next/navigation'

interface SiteSearchFormProps {
  compact?: boolean
  placeholder?: string
  className?: string
  inputClassName?: string
  onSubmit?: () => void
}

export default function SiteSearchForm({
  compact = false,
  placeholder = '搜索博客和网安笔记',
  className = '',
  inputClassName = '',
  onSubmit,
}: SiteSearchFormProps) {
  const searchParams = useSearchParams()
  const inputId = useId()
  const currentQuery = searchParams.get('q') ?? ''
  const [value, setValue] = useState(currentQuery)

  useEffect(() => {
    setValue(currentQuery)
  }, [currentQuery])

  const formClassName = compact
    ? 'flex w-full items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm transition focus-within:border-sky-300 focus-within:ring-2 focus-within:ring-sky-100 dark:border-gray-800 dark:bg-gray-950 dark:focus-within:border-sky-500 dark:focus-within:ring-sky-500/20'
    : 'flex w-full items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2.5 shadow-sm transition focus-within:border-sky-300 focus-within:ring-2 focus-within:ring-sky-100 dark:border-gray-800 dark:bg-gray-950 dark:focus-within:border-sky-500 dark:focus-within:ring-sky-500/20'

  const submit = (_event: FormEvent<HTMLFormElement>) => {
    onSubmit?.()
  }

  return (
    <form
      action="/search"
      method="get"
      className={`${formClassName} ${className}`}
      onSubmit={submit}
    >
      <label htmlFor={inputId} className="sr-only">
        搜索博客和网安笔记
      </label>
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
        id={inputId}
        name="q"
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
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
