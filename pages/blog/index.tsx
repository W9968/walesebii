import Head from 'next/head'
import type { NextPage } from 'next'
import { ShelfView, Spin } from 'components/export'
import { getAllPostsForHome } from 'functions/serverless.butter'
import { Container } from 'styles/shelf.module'
import Navigation from 'shared/Navigation'

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
      <Container>
        <Navigation />
        {payload.length === 0 ? <Spin /> : <ShelfView payload={payload} />}
      </Container>
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
