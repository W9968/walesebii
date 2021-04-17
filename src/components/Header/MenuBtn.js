import React from 'react'
import { BiCommand } from 'react-icons/bi'
import styled from 'styled-components'

const MenuBtn = () => {
  return (
    <>
      <Command />
    </>
  )
}

export default MenuBtn

const Command = styled(BiCommand)`
  margin: 0px 10px;
  font-size: 1.5rem;
`
