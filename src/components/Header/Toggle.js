import React from 'react'
import styled from 'styled-components'
import { func, string } from 'prop-types'
import { BiSun, BiMoon } from 'react-icons/bi'

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <>
      {theme === 'dark' ? (
        <Moon onClick={toggleTheme} />
      ) : (
        <Sun onClick={toggleTheme} />
      )}
    </>
  )
}

Toggle.prototype = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle

const Sun = styled(BiSun)`
  margin: 0px 10px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.3s ease-in-out;
`
const Moon = styled(BiMoon)`
  margin: 0px 10px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.3s ease-in-out;
`
