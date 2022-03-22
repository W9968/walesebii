import Head from 'next/head'
import type { NextPage } from 'next'
import { ShelfView } from 'components/export'
import { getAllPostsForHome } from 'functions/serverless.butter'

type staticProps = {
  payload: post[]
}

type post = {
  slug: string
  title: string
  summary: string
  published: string
}

const index: NextPage<staticProps> = ({ payload }) => {
  return (
    <>
      <Head>
        <title>Wale - Shelf</title>
        <meta name='description' content='wale sebiiy personal portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ShelfView payload={payload} />
    </>
  )
}

export default index

export async function getStaticProps({ preview = null }) {
  const payload = (await getAllPostsForHome(preview)) || []
  return {
    props: { payload },
  }
}
