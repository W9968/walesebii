import React, { useEffect } from 'react'
import styled from 'styled-components'
import { paths } from '../Menu/Menu'
import { BiCommand } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'

const MenuBtn = () => {
  const history = useHistory()

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      paths.map((path) => {
        return e.key === path.command && history.push(path.location)
      })
    })
  }, []) // eslint-disable-line

  return (
    <>
      <Command />
    </>
  )
}

export default MenuBtn

const Command = styled(BiCommand)`
  font-size: 1.5rem;
`
