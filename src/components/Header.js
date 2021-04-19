import React, { useState } from 'react'
import styled from 'styled-components'

import Logo from './Header/Logo'
import MenuBtn from './Header/MenuBtn'
import Toggle from './Header/Toggle'

const Header = ({ mode, modeFunc, state }) => {
  const {
    toggleMenu: [toggleMenu, setToggleMenu],
  } = { toggleMenu: useState(false), ...(state || {}) }

  return (
    <>
      <Container>
        <Logo />
        <div className='icons'>
          <Link onClick={() => setToggleMenu(!toggleMenu)}>
            <MenuBtn />
          </Link>

          <Toggle theme={mode} toggleTheme={modeFunc} />
        </div>
      </Container>
    </>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  margin-bottom: 64px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  .icons {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

const Link = styled.span`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  justify-content: center;
  color: ${({ theme }) => theme.text};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.hover};
  }
`
