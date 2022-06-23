import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Row = styled.article`
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column-reverse;
  }
`

export const Column = styled(motion.div)`
  &:first-child {
    width: 60%;
    gap: 1.5rem;
    display: grid;
    grid-template-rows: auto auto;

    @media (max-width: 600px) {
      width: 100%;
      gap: 1rem;
    }
  }

  &:last-child {
    width: 150px;
    height: 150px;
    display: flex;
    border-radius: 50%;
    align-items: flex-end;
    flex-direction: column;
    background: ${({ theme }) => theme.primary.accent_600};
  }
`

export const Heading = styled(motion.div)`
  gap: 1rem;
  display: grid;
  grid-template-rows: auto auto;
  padding-bottom: 1.5rem;
`
