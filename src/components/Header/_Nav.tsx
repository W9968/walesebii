import React from 'react'
import useSound from 'use-sound'
import { useMenu } from 'hooks/useMenu'
import { Container, Link } from 'styles/Header.element'
// imports
import Logo from './element/Logo'
import Toggle from './element/Toggle'
import MenuToggle from './element/MenuToggle'

// sound import
import clickon from 'components/sound/clickon.mp3'
import clickoff from 'components/sound/clickoff.mp3'

type NavProps = {
  mode: string
  modeFunc: () => void
}

const _Nav: React.FC<NavProps> = ({ mode, modeFunc }) => {
  const [playOn] = useSound(clickon, { interrupt: true })
  const [playOff] = useSound(clickoff, { interrupt: true })
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
              isMenuOpen ? playOn() : playOff()
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
