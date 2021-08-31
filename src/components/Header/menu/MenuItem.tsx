import React from 'react'
import { useMenu } from 'hooks/useMenu'
import { Wrapper, Name, Command, Parag } from 'styles/Header.element'

const play: HTMLAudioElement = new Audio('./sound/hover.mp3')

type MenutemProps = {
  link: string
  svg: React.ReactNode
  path: string
  command: string
}

const MenuItem: React.FC<MenutemProps> = ({ link, svg, path, command }) => {
  const { closeMenu } = useMenu()

  return (
    <>
      <Wrapper to={link} onClick={closeMenu} onMouseEnter={() => play.play()}>
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
