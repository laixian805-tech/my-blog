import HomeKnowledgePortal from '@/components/HomeKnowledgePortal'
import HomeProfileHero from '@/components/HomeProfileHero'

export default function Home({
  totalPosts,
  blogPostCount,
  securityPostCount,
}: {
  totalPosts: number
  blogPostCount: number
  securityPostCount: number
}) {
  return (
    <div className="relative right-1/2 left-1/2 -mx-[50vw] w-screen overflow-x-clip bg-[linear-gradient(180deg,rgba(248,250,252,1),rgba(236,253,245,0.76)_28%,rgba(255,255,255,1)_58%,rgba(240,253,250,0.82)_100%)] dark:bg-[linear-gradient(180deg,rgba(2,6,23,1),rgba(6,23,23,0.98)_30%,rgba(3,7,18,1)_62%,rgba(6,23,23,0.98)_100%)]">
      <div className="mx-auto max-w-7xl px-4 pb-18 sm:px-6 lg:px-8">
        <HomeProfileHero
          totalPosts={totalPosts}
          blogPostCount={blogPostCount}
          securityPostCount={securityPostCount}
        />

        <div className="py-10 sm:py-12">
          <HomeKnowledgePortal />
        </div>
      </div>
    </div>
  )
}
