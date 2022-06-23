import Prism from 'prismjs'
import Head from 'next/head'
import Error from 'next/error'
import FullCard from 'components/card/FullCard'

import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { getPostAndMorePosts, getPostBySlug } from 'functions/serverless.butter'

import 'prismjs/themes/prism-tomorrow.min.css'

const Slug: NextPage<PageProp> = ({ post, previous, next }) => {
  const { isFallback } = useRouter()

  useEffect(() => {
    typeof window !== 'undefined' && Prism.highlightAll()
  }, [])

  if (!isFallback && !post.slug) {
    return <Error statusCode={404} />
  }

  console.log(previous)

  return isFallback ? (
    <Error statusCode={404} />
  ) : (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <FullCard
        title={post.title}
        body={post.body}
        prev={previous}
        next={next}
      />
    </>
  )
}

export async function getStaticProps({ params, preview = null }: param) {
  const { post, previous, next } = await getPostAndMorePosts(
    params.slug,
    preview
  )

  return {
    props: {
      post,
      next,
      previous,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const allPosts: Post[] = await getPostBySlug()
  return {
    paths: allPosts.map((post: any) => `/blog/${post.slug}`) || [],
    fallback: true,
  }
}

type param = {
  preview: any
  params: {
    slug: string
  }
}

type PageProp = {
  post: Post
  previous: PaginatePost
  next: PaginatePost
}

type PaginatePost = {
  slug: string
  title: string
  featured_image: string | null
}

type Post = {
  created: Date
  published: Date
  url: string
  slug: string
  featured_image?: any
  featured_image_alt: string
  author: {
    first_name: string
    last_name: string
    email: string
    slug: string
    bio: string
    title: string
    linkedin_url: string
    twitter_handle: string
  }
  tags: any[]
  categories: any[]
  title: string
  body: string
  summary: string
  updated: Date
  seo_title: string
  meta_description: string
  status: string
}

export default Slug
