import React from 'react'
import { NavLink } from 'react-router-dom'
import { useMenu } from './../../../hooks/useMenu'
import { Social, Twitter, Github, Info } from '../../../styles/Footer.element'

const SocialIcons: React.FC = () => {
  const { closeMenu } = useMenu()
  return (
    <>
      <Social>
        <a href='https://twitter.com/oryvle' target={'_blank'} rel='noreferrer'>
          <Twitter />
        </a>
        <a href='https://github.com/oryale' target={'_blank'} rel='noreferrer'>
          <Github />
        </a>
        <NavLink to='/meta' onClick={closeMenu}>
          <Info />
        </NavLink>
      </Social>
    </>
  )
}

export default SocialIcons
