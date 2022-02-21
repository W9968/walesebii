import Head from 'next/head'
import type { NextPage } from 'next'
import { LandingView } from 'components/export'
import { SizingSectionContainer } from 'styles/home.module'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Walee Sebiiy</title> {/* eslint-disable-line */}
      </Head>
      <LandingView />
      <SizingSectionContainer></SizingSectionContainer>
    </>
  )
}

export default Home
