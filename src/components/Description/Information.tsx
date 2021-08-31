import React from 'react'
import { Wrapper, Name, UnderLine } from 'styles/Contact.element'

type InformationProps = {
  info: string
  svg: React.ReactNode
}

const Information: React.FC<InformationProps> = ({ info, svg }) => {
  return (
    <>
      <Wrapper>
        <Name>
          <span className='icon'>{svg}</span>
          <UnderLine className='title'>{info}</UnderLine>
        </Name>
      </Wrapper>
    </>
  )
}

export default Information
