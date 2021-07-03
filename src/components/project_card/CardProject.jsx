import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const CardProject = () => {
  return (
    <>
      <Container>
        <Image src='./asset/colorpicker.png' />
        <Overly initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
          <motion.div>
            <Title>hello</Title>
            <Parag>hello Hello</Parag>
          </motion.div>
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
  border-radius: 0.5rem;
`

const Overly = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  padding: 1rem 2rem;
  flex-direction: column;
  align-items: flex-start;

  justify-content: flex-end;
  background: rgba(1, 1, 1, 0.5);
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
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
