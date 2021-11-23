import { FC } from 'react'
import { BsDot } from 'react-icons/bs'
import { Time } from 'styles/Footer.module'

const Year: FC = () => {
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
