import React from 'react'
import styled from 'styled-components'
import { func, string } from 'prop-types'
import { BiSun, BiMoon } from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion'

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <>
      <AnimatePresence>
        {theme === 'dark' ? (
          <motion.div
            initial={{ rotate: 0 }}
            whileTap={{ rotate: 360 }}
            transition={{ type: 'spring' }}>
            <Moon onClick={toggleTheme} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: 0 }}
            whileTap={{ rotate: 360 }}
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
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.3s ease-in-out;
`
const Moon = styled(BiMoon)`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.3s ease-in-out;
`
