import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router'
import { BiArrowBack } from 'react-icons/bi'

const Project = () => {
  const history = useHistory()
  return (
    <>
      <Wrapper>
        <Backer>
          <Title>Manage Projects</Title>
          <GoBack onClick={() => history.goBack()} whileTap={{ scale: 0.8 }}>
            <BiArrowBack />
          </GoBack>
        </Backer>
      </Wrapper>
    </>
  )
}

export default Project

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Backer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: space-between;
`

const GoBack = styled(motion.button)`
  border: none;
  outline: none;
  display: flex;
  padding: 10px;
  background: none;
  font-size: 1.225rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.hover} 0px 0px 1rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: capitalize;
`
