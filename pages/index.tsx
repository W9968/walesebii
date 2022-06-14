import Head from 'next/head'
import type { NextPage } from 'next'
import ThreeWrapper from 'shared/ThreeWrapper'
import { SubscribeNews, LandingSection } from 'components/export'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wale</title>
        <meta name='description' content='wale sebiiy personal portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LandingSection />
      <SubscribeNews />
      <ThreeWrapper />
    </>
  )
}

export default Home
