import React from 'react'
import { BsDot } from 'react-icons/bs'
import { Time } from '../../../styles/Footer.element'

const Year: React.FC = () => {
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
