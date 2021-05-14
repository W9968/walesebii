import React from 'react'
import styled from 'styled-components'

const Writings = () => {
  return (
    <>
      <Section>
        <Title>writing</Title>
        <Parag>A collection of what I know about coding and design</Parag>
      </Section>
    </>
  )
}

export default Writings

const Section = styled.section`
  .divider {
    height: 3px;
    width: 100px;
    margin: 48px auto;
    background: linear-gradient(-90deg, #ddd6f3, #faaca8);
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: capitalize;

  /* gradient */
  background: -webkit-linear-gradient(right, #00d2ff 80%, #3a7bd5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Parag = styled.p`
  line-height: 36px;
  margin: 16px 0px;
  font-size: 1.225rem;
  letter-spacing: 0.25px;
`
