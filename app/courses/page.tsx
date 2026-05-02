import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'
import { allCourseNotes } from 'contentlayer/generated'

export const metadata = genPageMetadata({
  title: '课程学习',
  description: '按课程目录整理课程内容。',
})

const courseSections = [
  {
    id: 'paper-writing',
    title: '论文写作指导',
    status: '准备中',
  },
  {
    id: 'machine-learning',
    title: '机器学习',
    status: '准备中',
  },
  {
    id: 'blockchain',
    title: '区块链',
    status: '已更新',
  },
  {
    id: 'data-lab',
    title: '数据项目实验与分析',
    status: '准备中',
  },
] as const

const blockchainDescriptions: Record<string, string> = {
  'courses/blockchain/sha256-study-notes': 'SHA-256 哈希算法实验说明文档',
  'courses/blockchain/eth-wallet-study-notes': 'ETH 钱包实验说明',
  'courses/blockchain/nft-auction-study-notes': 'NFT 拍卖实验说明',
  'courses/blockchain/elliptic-curve-signature-study-notes': '椭圆曲线签名实验说明',
}

export default function CoursesPage() {
  const blockchainItems = allCourseNotes
    .filter((item) => !item.draft && item.path.startsWith('courses/blockchain/'))
    .sort((left, right) => new Date(left.date).getTime() - new Date(right.date).getTime())

  return (
    <div className="py-8 sm:py-10">
      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[28px] border border-slate-200 bg-white/94 p-5 shadow-[0_18px_36px_-30px_rgba(15,23,42,0.28)] dark:border-gray-800 dark:bg-slate-950/84">
            <h1 className="text-2xl font-black tracking-tight text-slate-950 dark:text-slate-100">
              课程学习
            </h1>
            <nav className="mt-6 space-y-2" aria-label="课程目录">
              {courseSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-300"
                >
                  <span>{section.title}</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="space-y-5">
          {courseSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="rounded-[28px] border border-slate-200 bg-white/94 p-6 shadow-[0_18px_36px_-30px_rgba(15,23,42,0.28)] dark:border-gray-800 dark:bg-slate-950/84"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-black tracking-tight text-slate-950 dark:text-slate-100">
                  {section.title}
                </h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:bg-gray-800 dark:text-slate-300">
                  {section.id === 'blockchain' ? `${blockchainItems.length} Tasks` : section.status}
                </span>
              </div>

              {section.id === 'blockchain' ? (
                <div className="mt-6 space-y-3">
                  {blockchainItems.map((item) => (
                    <Link
                      key={item.path}
                      href={`/${item.path}`}
                      className="group flex items-center justify-between gap-4 rounded-[22px] border border-slate-200 bg-slate-50/82 px-4 py-4 transition hover:border-emerald-300 hover:bg-emerald-50/70 dark:border-gray-800 dark:bg-gray-900/74 dark:hover:border-emerald-500/45 dark:hover:bg-emerald-500/10"
                    >
                      <h3 className="text-base font-bold text-slate-900 transition group-hover:text-emerald-700 dark:text-slate-100 dark:group-hover:text-emerald-300">
                        {blockchainDescriptions[item.path] || item.title}
                      </h3>
                      <span className="shrink-0 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                        查看
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-[22px] border border-dashed border-slate-300 bg-slate-50/80 px-4 py-5 text-sm font-medium text-slate-500 dark:border-gray-700 dark:bg-gray-900/60 dark:text-slate-400">
                  {section.status}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
