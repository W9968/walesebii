import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Tooltip } from '@chakra-ui/tooltip'

import Logo from './Header/Logo'
import MenuBtn from './Header/MenuBtn'
import Toggle from './Header/Toggle'

const Header = ({ mode, modeFunc }) => {
  return (
    <>
      <Container>
        <Logo />
        <div className='icons'>
          <Tooltip
            hasArrow={true}
            placement='top'
            label='M for menu'
            aria-label='A tooltip'>
            <Link to='/menu'>
              <MenuBtn />
            </Link>
          </Tooltip>

          <Tooltip
            hasArrow={true}
            placement='top'
            label={`Activate ${mode} mode`}
            aria-label='A tooltip'>
            <Toggle theme={mode} toggleTheme={modeFunc} />
          </Tooltip>
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

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`
