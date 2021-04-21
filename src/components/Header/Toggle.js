import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { func, string } from 'prop-types'
import { BiSun, BiMoon } from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion'

const Toggle = ({ theme, toggleTheme }) => {
  const [rotation, setRotation] = useState(0)

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
            <Moon onClick={toggleTheme} />
          </motion.div>
        ) : (
          <motion.div
            //initial={{ rotate: 0 }}
            animate={{ rotate: rotation }}
            onClick={() => setRotation(rotation - 360)}
            transition={{ type: 'spring' }}>
            <Sun onClick={toggleTheme} />
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

const Sun = styled(BiSun)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
`
const Moon = styled(BiMoon)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
`
