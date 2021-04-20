import React from 'react'
import styled from 'styled-components'
import { useMenu } from '../hooks/useMenu'

import Logo from './Header/Logo'
import MenuBtn from './Header/MenuBtn'
import Toggle from './Header/Toggle'

const Header = ({ mode, modeFunc }) => {
  const { toggleMenu, closeMenu } = useMenu()

  return (
    <>
      <Container>
        <span onClick={closeMenu}>
          <Logo />
        </span>
        <div className='icons'>
          <Link onClick={toggleMenu}>
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

const Link = styled.button`
  padding: 10px;
  display: flex;
  border: none;
  outline: none;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  background-color: transparent;
  justify-content: center;
  color: ${({ theme }) => theme.text};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.hover};
  }
`
