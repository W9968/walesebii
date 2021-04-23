import React, { useState, useEffect } from 'react'
import useSound from 'use-sound'
import styled from 'styled-components'
import { func, string } from 'prop-types'
import { BiSun, BiMoon } from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion'

import ToggleSFX from '../sfx/toggletheme.mp3'

const Toggle = ({ theme, toggleTheme }) => {
  const [rotation, setRotation] = useState(0)
  const [play] = useSound(ToggleSFX)

  useEffect(() => {
    setRotation(0)
  }, [])

  return (
    <>
      <AnimatePresence>
        {theme === 'dark' ? (
          <motion.div
            //initial={{ rotate: 0 }}
            animate={{ rotate: rotation }}
            onClick={() => setRotation(rotation + 360)}
            transition={{ type: 'spring' }}>
            <Btn onMouseDownCapture={play}>
              <Moon onClick={toggleTheme} />
            </Btn>
          </motion.div>
        ) : (
          <motion.div
            //initial={{ rotate: 0 }}
            animate={{ rotate: rotation }}
            onClick={() => setRotation(rotation - 360)}
            transition={{ type: 'spring' }}>
            <Btn onMouseDownCapture={play}>
              <Sun onClick={toggleTheme} />
            </Btn>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

Toggle.prototype = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle

const Btn = styled.button`
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
