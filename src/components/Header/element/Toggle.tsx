import React from 'react'

import useSound from 'use-sound'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { BiSun, BiMoon } from 'react-icons/bi'

import soundElement from 'components/sound/toggletheme.mp3'

type ToggleProps = {
  theme: string
  toggleTheme: () => void
}

const Toggle: React.FC<ToggleProps> = ({ theme, toggleTheme }) => {
  const [play] = useSound(soundElement, { interrupt: true })
  return (
    <>
      {theme === 'dark' ? (
        <Btn
          animate={{ opacity: 1 }}
          whileTap={{ rotate: 180 }}
          transition={{ type: 'spring' }}
          onMouseDownCapture={() => play()}>
          <Moon onClick={toggleTheme} />
        </Btn>
      ) : (
        <Btn
          animate={{ opacity: 1 }}
          whileTap={{ rotate: 180 }}
          transition={{ type: 'spring' }}
          onMouseDownCapture={() => play()}>
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
