import React from 'react'
import { BiPhone, BiEnvelope } from 'react-icons/bi'
import { ContactInfo } from '../../components/exports'
import { Section, Title, Parag } from '../../styles/Contact.element'

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
          {cords.map((cord, i: number) => {
            return <ContactInfo key={i} svg={cord.icon} info={cord.text} />
          })}
        </cite>
      </Section>
    </>
  )
}

export default _Contact
