import React from 'react'
import styled from 'styled-components'

import SocialIcons from '../../components/Footer/SocialIcons.jsx'
import Year from '../../components/Footer/Year.jsx'

const _Footer = () => {
  return (
    <>
      <Footing>
        <SocialIcons />
        <Year />
      </Footing>
    </>
  )
}

export default _Footer

const Footing = styled.footer`
  display: flex;
  margin-top: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
