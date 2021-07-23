import React from 'react'
import { Parag, Section, Title } from './../../styles/NotFound.element'

const _404 = () => {
  return (
    <>
      <Section>
        <Title>This Page cannot be found</Title>
        <blockquote cite='http://www.aaronsw.com/weblog/visitingmit'>
          <Parag>
            it doesn't exist, it never has, yet not all those who wander are
            lost.
          </Parag>

          <cite>"J.R.R. Tolkein, The Fellowship of the Ring "</cite>
        </blockquote>
      </Section>
    </>
  )
}

export default _404
