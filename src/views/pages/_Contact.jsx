import React from 'react'
import styled from 'styled-components'
import { BiPhone, BiEnvelope } from 'react-icons/bi'

import Information from '../../components/shared/Information.jsx'

const _Contact = () => {
  const cords = [
    { icon: <BiPhone />, text: '+216 58 06 18 35' },
    { icon: <BiEnvelope />, text: 'noreply@walee.tech' },
  ]

  return (
    <>
      <Section>
        <Title>Contact</Title>
        <Parag>Get in touch.</Parag>

        <cite>
          {cords.map((cord, i) => {
            return <Information key={i} svg={cord.icon} info={cord.text} />
          })}
        </cite>
      </Section>
    </>
  )
}

export default _Contact

const Section = styled.section``

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: capitalize;

  /* gradient */
  background: -webkit-linear-gradient(right, #7b4397 80%, #dc2430);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Parag = styled.p`
  line-height: 36px;
  margin: 16px 0px;
  font-size: 1.225rem;
  letter-spacing: 0.25px;
`
