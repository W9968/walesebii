import React from 'react'
import styled from 'styled-components'
import { BsDot } from 'react-icons/bs'

const Year = () => {
  return (
    <>
      <Time>
        <BsDot />
        {new Date().getFullYear()}
      </Time>
    </>
  )
}

export default Year

const Time = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) => theme.text};
`
