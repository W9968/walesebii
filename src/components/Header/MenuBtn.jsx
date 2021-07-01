import React, { useEffect } from 'react'
import styled from 'styled-components'
import { paths } from '../Menu/Menu.jsx'
import { BiCommand } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'
import { useMenu } from '../../hooks/useMenu.jsx'

const MenuBtn = () => {
  const history = useHistory()
  const { closeMenu } = useMenu()

  useEffect(() => {
    document.addEventListener('keyup', (e) => {
      e.altKey &&
        document.addEventListener('keydown', (e) => {
          paths.map((path) => {
            closeMenu()
            return (
              e.altKey && e.key === path.command && history.push(path.location)
            )
          })
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
