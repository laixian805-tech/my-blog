import { genPageMetadata } from 'app/seo'
import NavPortal from '@/components/nav/NavPortal'

export const metadata = genPageMetadata({
  title: 'Nav',
  description: '按学习路线整理的个人导航门户，集中收纳求职、算法、后端、AI、网安和常用工具站点。',
})

export default function NavPage() {
  return <NavPortal />
}
