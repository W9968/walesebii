import Head from 'next/head'
import type { NextPage } from 'next'
import { ShelfView } from 'components/export'

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>walee</title>
        <meta name='description' content='wale sebiiy personal portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ShelfView />
    </>
  )
}

export default index
