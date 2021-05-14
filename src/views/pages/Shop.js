import React from 'react'
import styled from 'styled-components'

const Shop = () => {
  return (
    <>
      <Section>
        <Title>shop</Title>
        <Parag>
          wanted to take this a step further and turn it into a brand
        </Parag>
      </Section>
    </>
  )
}

export default Shop

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
  background: -webkit-linear-gradient(right, #5d26c1 80%, #59c173);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Parag = styled.p`
  line-height: 36px;
  margin: 16px 0px;
  font-size: 1.225rem;
  letter-spacing: 0.25px;
`
