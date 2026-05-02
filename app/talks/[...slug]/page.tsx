import 'css/prism.css'
import 'katex/dist/katex.css'

import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { allCoreContent, coreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allAuthors, allTalks } from 'contentlayer/generated'
import type { Talk } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { getAuthorDetails, getPostLayout, serializeJsonLd } from '@/lib/postPage'
import { notFound } from 'next/navigation'

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const post = allTalks.find((item) => item.slug === slug && !item.draft)

  if (!post) {
    return
  }

  const authorDetails = getAuthorDetails(post.authors, allAuthors, post.path)
  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  const authors = authorDetails.map((author) => author.name)
  let imageList = [siteMetadata.socialBanner]

  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }

  const ogImages = imageList.map((img) => ({
    url: img && img.includes('http') ? img : siteMetadata.siteUrl + img,
  }))

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'zh_CN',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  return allTalks
    .filter((item) => !item.draft)
    .map((item) => ({ slug: item.slug.split('/').map((name) => decodeURI(name)) }))
}

export default async function TalkDetailPage(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const publishedTalks = allTalks.filter((item) => !item.draft)
  const sortedCoreContents = allCoreContent(sortPosts(publishedTalks))
  const postIndex = sortedCoreContents.findIndex((item) => item.slug === slug)

  if (postIndex === -1) {
    return notFound()
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const post = publishedTalks.find((item) => item.slug === slug) as Talk
  const authorDetails = getAuthorDetails(post.authors, allAuthors, post.path)
  const mainContent = coreContent(post)
  const jsonLd = {
    ...post.structuredData,
    author: authorDetails.map((author) => ({
      '@type': 'Person',
      name: author.name,
    })),
  }

  const Layout = getPostLayout(layouts, post.layout, defaultLayout, post.path)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <Layout
        content={mainContent}
        authorDetails={authorDetails}
        next={next}
        prev={prev}
        toc={post.toc}
      >
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </Layout>
    </>
  )
}
