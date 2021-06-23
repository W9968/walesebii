import React from 'react'
import styled from 'styled-components'

const _Home = () => {
  return (
    <>
      <Section>
        <Title>Walee Sebiiy</Title>
        <Parag>
          <span className='lining'>a.k.a JAGARKIN</span>, Mostly a Web
          developer, occasionally a photographer, definitely not practicing
          minimalist, sharing what I know about design and code.
        </Parag>
        <Parag>currently a Student.</Parag>
      </Section>
    </>
  )
}

export default _Home

const Section = styled.section`
  .lining {
    text-decoration: line-through;
    font-weight: 700;
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;
`

const Parag = styled.p`
  line-height: 36px;
  margin: 16px 0px;
  font-size: 1.225rem;
  letter-spacing: 0.25px;
`
