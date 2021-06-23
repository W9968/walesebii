import React from 'react'
import styled from 'styled-components'

const _NotFound = () => {
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

export default _NotFound

const Section = styled.section`
  .link {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    :hover {
      text-decoration: underline;
    }
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
