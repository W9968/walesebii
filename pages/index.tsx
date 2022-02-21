import Head from 'next/head'
import type { NextPage } from 'next'
import { LandingView } from 'components/export'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Walee Sebiiy</title> {/* eslint-disable-line */}
      </Head>
      <LandingView />
    </>
  )
}

export default Home
