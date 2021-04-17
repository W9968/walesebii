import React, { useEffect } from 'react'
import { BiCommand } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const MenuBtn = () => {
  const history = useHistory()

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      e.key === 'm' && history.push('/menu')
      e.key === 'a' && history.push('/')
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
