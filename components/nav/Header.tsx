import { FC } from 'react'
import { Line, NavBar } from 'styles/header.module'

import Logo from 'components/logo/Logo'
import Menu from 'components/navigation_menu/Menu'

const Header: FC = () => {
  return (
    <NavBar>
      <Logo />
      <Line />
      <Menu />
    </NavBar>
  )
}

export default Header
