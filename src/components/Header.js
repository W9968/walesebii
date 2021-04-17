import React from 'react'
import styled from 'styled-components'
import { NavLink, useHistory } from 'react-router-dom'

import Logo from './Header/Logo'
import MenuBtn from './Header/MenuBtn'
import Toggle from './Header/Toggle'

const Header = ({ mode, modeFunc }) => {
  const history = useHistory()

  return (
    <>
      <Container>
        <Logo />
        <div className='icons'>
          <Link
            to='/menu'
            onClick={() => {
              window.location.pathname === '/menu' && history.goBack()
            }}>
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

const Link = styled(NavLink)`
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
