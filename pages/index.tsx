import Head from 'next/head'
import type { NextPage } from 'next'
import LandingPage from 'components/landing/LandingPage'
import Wrapper from 'shared/Wrapper'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wale</title>
        <meta name='description' content='wale sebiiy personal portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LandingPage />
      <Wrapper background='b'>
        <p>gello</p>
      </Wrapper>
    </>
  )
}

export default Home
