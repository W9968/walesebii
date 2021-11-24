import type { NextPage } from 'next'
import { LandPage } from 'styles/home.module'
import { JamStack, JamWriting, LandingPageTitle } from 'components/export'

const Home: NextPage = () => {
  return (
    <LandPage>
      <LandingPageTitle />
      <JamStack />
      <JamWriting />
    </LandPage>
  )
}

export default Home
