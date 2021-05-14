import React from 'react'
import styled from 'styled-components'

const CardProject = () => {
  return (
    <>
      <Container>
        <Title>hello</Title>
        <Parag>test parag</Parag>
      </Container>
    </>
  )
}

export default CardProject

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 25px;
  border-radius: 12px;
  flex-direction: column;
  align-items: flex-start;
  height: calc(3.5 * 4rem);
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.hover};
`

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.225rem;
  text-transform: capitalize;
`

const Parag = styled.p`
  width: 100%;
  overflow: hidden;
  font-size: 1.125rem;
  margin-bottom: 1rem;
  text-overflow: ellipsis;
`
