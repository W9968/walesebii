import React from 'react'
import { useMenu } from '../../hooks/useMenu'
import { Container, Link } from '../../styles/Header.element'
// imports
import Logo from './element/Logo'
import Toggle from './element/Toggle'
import MenuToggle from './element/MenuToggle'

// sound import
const clickon: HTMLAudioElement = new Audio('./sound/clickon.mp3')
const clickoff: HTMLAudioElement = new Audio('./sound/clickoff.mp3')

type NavProps = {
  mode: string
  modeFunc: () => void
}

const _Nav: React.FC<NavProps> = ({ mode, modeFunc }) => {
  const { toggleMenu, closeMenu, isMenuOpen } = useMenu()

  return (
    <>
      <Container>
        <span onClick={closeMenu}>
          <Logo />
        </span>
        <div className='icons'>
          <Link
            onClick={toggleMenu}
            onMouseDownCapture={() => {
              isMenuOpen ? clickon.play() : clickoff.play()
            }}>
            <MenuToggle />
          </Link>

          <Toggle theme={mode} toggleTheme={modeFunc} />
        </div>
      </Container>
    </>
  )
}

export default _Nav
