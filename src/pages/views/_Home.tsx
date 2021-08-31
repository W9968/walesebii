import React from 'react'
import { Section, Title, Parag } from 'styles/Land.element'

const _Home: React.FC = () => {
  return (
    <>
      <Section>
        <Title>Walee Sebiiy</Title>
        <Parag>
          <span className='lining'>a.k.a ORYALE</span>, Mostly a Web developer,
          occasionally a photographer, definitely not practicing minimalist,
          sharing what I know about design and code.
        </Parag>
        <Parag>currently a Student.</Parag>
      </Section>
    </>
  )
}

export default _Home
