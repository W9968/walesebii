import Head from 'next/head'
import type { NextPage } from 'next'
import LandingPage from 'components/landing/LandingPage'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>walee</title>
        <meta name='description' content='wale sebiiy personal portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LandingPage />
    </>
  )
}

export default Home
