import React from 'react'
import styled from 'styled-components'
import Logo from './Header/Logo'
import MenuBtn from './Header/MenuBtn'
import Toggle from './Header/Toggle'

const Header = ({ mode, modeFunc }) => {
  return (
    <>
      <Container>
        <div className='logo'>
          <Logo />
        </div>

        <div className='icons'>
          <MenuBtn />
          <Toggle theme={mode} toggleTheme={modeFunc} />
        </div>
      </Container>
    </>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`
