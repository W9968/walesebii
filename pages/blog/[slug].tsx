import Head from 'next/head'
import { ShelfPreview } from 'components/export'
import type { NextPage } from 'next'
import { getPostBySlug, getPostAndMorePosts } from 'functions/serverless.butter'
import { postProp } from 'types/post.d'

type param = {
  preview: any
  params: {
    slug: string
  }
}

type staticProps = {
  post: postProp
  previous: any
  next: any
}

const Slug: NextPage<staticProps> = ({ post, previous, next }) => {
  return (
    <>
      <Head>
        <title>Wale - {post.seo_title}</title>
        <meta name='description' content={post.seo_title} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ShelfPreview data={post} prev={previous} next={next} />
    </>
  )
}

export default Slug

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
  }
}

export async function getStaticPaths() {
  const allPosts = await getPostBySlug()
  return {
    paths: allPosts?.map((post: any) => `/blog/${post.slug}`) || [],
    fallback: true,
  }
}
