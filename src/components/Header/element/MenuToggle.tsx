import React, { useEffect } from 'react'
import styled from 'styled-components'

import { paths } from '../menu/paths'
import { BiCommand } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'

import { useMenu } from '../../../hooks/useMenu'

const MenuBtn: React.FC = () => {
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
