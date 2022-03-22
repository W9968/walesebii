import Head from 'next/head'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ShelfPreview, Spin } from 'components/export'
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
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <Spin />
  }

  return (
    <>
      {router.isFallback ? (
        <Spin />
      ) : (
        <>
          <Head>
            <title>Wale - {post.seo_title}</title>
          </Head>
          <ShelfPreview data={post} prev={previous} next={next} />
        </>
      )}
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
