import React from 'react'
import { ContactInfo } from 'components/exports'
import { BiPhone, BiEnvelope } from 'react-icons/bi'
import { Section, Title, Parag } from 'styles/Contact.element'

interface Iarray {
  icon: React.ReactChild
  text: string
}

const _Contact: React.FC = () => {
  const cords: Iarray[] = [
    { icon: <BiPhone />, text: '+216 58 06 18 35' },
    { icon: <BiEnvelope />, text: 'noreply@walee.tech' },
  ]

  return (
    <>
      <Section>
        <Title>Contact</Title>
        <Parag>Get in touch.</Parag>

        <cite>
          {cords.map((cord: Iarray, i: number) => {
            return <ContactInfo key={i} svg={cord.icon} info={cord.text} />
          })}
        </cite>
      </Section>
    </>
  )
}

export default _Contact
