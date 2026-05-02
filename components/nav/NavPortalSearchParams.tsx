'use client'

import { useSearchParams } from 'next/navigation'
import NavPortal from './NavPortal'

export default function NavPortalSearchParams() {
  const searchParams = useSearchParams()
  const categoryId = searchParams.get('category') ?? 'all'

  return <NavPortal initialCategoryId={categoryId} />
}
