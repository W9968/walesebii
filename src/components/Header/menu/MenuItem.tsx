import React from 'react'
import useSound from 'use-sound'
import { useMenu } from 'hooks/useMenu'
import { Wrapper, Name, Command, Parag } from 'styles/Header.element'

import soundElement from 'components/sound/hover.mp3'

type MenutemProps = {
  link: string
  svg: React.ReactNode
  path: string
  command: string
}

const MenuItem: React.FC<MenutemProps> = ({ link, svg, path, command }) => {
  const { closeMenu } = useMenu()
  const [play] = useSound(soundElement, { interrupt: true })

  return (
    <>
      <Wrapper to={link} onClick={closeMenu} onMouseEnter={() => play()}>
        <Name>
          <span className='icon'>{svg}</span>
          <Parag className='title'>{path}</Parag>
        </Name>
        <Command className='shortcut'>{command}</Command>
      </Wrapper>
    </>
  )
}

export default MenuItem
