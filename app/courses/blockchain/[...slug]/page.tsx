import 'css/prism.css'
import 'katex/dist/katex.css'

import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { allCoreContent, coreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allAuthors, allCourseNotes } from 'contentlayer/generated'
import type { CourseNote } from 'contentlayer/generated'
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
  const post = allCourseNotes.find((item) => item.slug === `blockchain/${slug}` && !item.draft)

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
  return allCourseNotes
    .filter((item) => !item.draft && item.slug.startsWith('blockchain/'))
    .map((item) => ({
      slug: item.slug
        .replace(/^blockchain\//, '')
        .split('/')
        .map((name) => decodeURI(name)),
    }))
}

export default async function CourseDetailPage(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const scopedNotes = allCourseNotes.filter(
    (item) => !item.draft && item.slug.startsWith('blockchain/')
  )
  const sortedCoreContents = allCoreContent(sortPosts(scopedNotes))
  const postIndex = sortedCoreContents.findIndex((item) => item.slug === `blockchain/${slug}`)

  if (postIndex === -1) {
    return notFound()
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const post = scopedNotes.find((item) => item.slug === `blockchain/${slug}`) as CourseNote
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
