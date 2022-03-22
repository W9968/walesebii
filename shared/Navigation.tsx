import { FC } from 'react'
import { Logo, Menu } from 'components/export'
import { Navbar } from 'styles/header.module'

const Navigation: FC = () => {
  return (
    <Navbar>
      <Logo />
      <Menu />
    </Navbar>
  )
}

export default Navigation
