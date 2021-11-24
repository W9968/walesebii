import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Card = styled(motion.div)`
  width: 100%;
  padding: 1em;
  display: flex;
  cursor: pointer;
  border-radius: 15px;
  flex-direction: column;
  align-items: flex-start;
  transition: 300ms ease-in-out;

  &:last-child {
    border: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.accent.third};
  }
`

export const Col = styled.div`
  &:last-child {
    flex: 1;
  }
`

export const Timing = styled.p`
  font-size: 14px;
  letter-spacing: 1px;
`

export const HeadLine = styled.h3`
  font-weight: 600;
  filter: contrast(0.7);
  letter-spacing: 0.25px;
  text-transform: capitalize;
  font-size: ${(props) => props.theme.units._18};
`

export const Intro = styled.p`
  font-weight: 400;
  letter-spacing: 1px;
  filter: contrast(0.5);
`
