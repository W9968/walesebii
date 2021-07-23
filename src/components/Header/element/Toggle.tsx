import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import { BiSun, BiMoon } from 'react-icons/bi'

const play: HTMLAudioElement = new Audio('./sound/toggletheme.mp3')

type ToggleProps = {
  theme: string
  toggleTheme: () => void
}

const Toggle: React.FC<ToggleProps> = ({ theme, toggleTheme }) => {
  const [rotation, setRotation] = useState(0)

  useEffect((): void => {
    setRotation(0)
  }, [])

  return (
    <>
      {theme === 'dark' ? (
        <Btn
          animate={{ rotate: rotation }}
          onClick={() => {
            setRotation(rotation - 360)
          }}
          transition={{ type: 'spring' }}
          onMouseDownCapture={() => play.play()}>
          <Moon onClick={toggleTheme} />
        </Btn>
      ) : (
        <Btn
          animate={{ rotate: rotation }}
          onClick={() => {
            setRotation(rotation - 360)
          }}
          transition={{ type: 'spring' }}
          onMouseDownCapture={() => play.play()}>
          <Sun onClick={toggleTheme} />
        </Btn>
      )}
    </>
  )
}

export default Toggle

const Btn = styled(motion.button)`
  border: none;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
`

const Sun = styled(BiSun)`
  cursor: pointer;
  font-size: 1.5rem;
`

const Moon = styled(BiMoon)`
  cursor: pointer;
  font-size: 1.5rem;
`
