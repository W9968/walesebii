import { FC } from 'react'
import { DownPage } from 'styles/Footer.module'
import Socials from './element/Socials'
import Year from './element/Year'

const Footer: FC = () => {
  return (
    <DownPage>
      <Socials />
      <Year />
    </DownPage>
  )
}

export default Footer
