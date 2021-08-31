import React from 'react'
import { Footer } from 'styles/Footer.element'

import Year from './element/Year'
import SocialIcons from './element/SocialIcons'

const _Footer: React.FC = () => {
  return (
    <>
      <Footer>
        <SocialIcons />
        <Year />
      </Footer>
    </>
  )
}

export default _Footer
