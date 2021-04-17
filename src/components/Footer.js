import React from 'react'
import styled from 'styled-components'
import SocialIcons from './Footer/SocialIcons'
import Year from './Footer/Year'

const Footer = () => {
  return (
    <>
      <Footing>
        <SocialIcons />
        <Year />
      </Footing>
    </>
  )
}

export default Footer

const Footing = styled.footer`
  display: flex;
  margin-top: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
