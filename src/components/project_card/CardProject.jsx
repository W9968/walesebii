import React from 'react'
import styled from 'styled-components'

const CardProject = ({ title, summery, link }) => {
  return (
    <>
      <Container>
        <Image src={link} alt={title} />
        <Overly>
          <Title>{title}</Title>
          <Parag>{summery}</Parag>
        </Overly>
      </Container>
    </>
  )
}

export default CardProject

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 300px;
  position: relative;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
`

const Overly = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  transition: 300ms ease-in-out;

  :hover {
    opacity: 1;
    background: rgba(1, 1, 1, 0.5);
  }

  @media (max-width: 768px) {
    opacity: 1;
    background: rgba(1, 1, 1, 0.3);
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`

const Title = styled.h1`
  color: #eaeaea;
  margin-bottom: 5px;
  font-size: 2.225rem;
  text-transform: capitalize;
`

const Parag = styled.p`
  width: 100%;
  color: #eaeaea;
  overflow: hidden;
  font-size: 1.125rem;
  margin-bottom: 1rem;
  text-overflow: ellipsis;
`
