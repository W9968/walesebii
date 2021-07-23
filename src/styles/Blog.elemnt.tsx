import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Section = styled.section`
  .divider {
    height: 3px;
    width: 100px;
    margin: 48px auto;
    background: linear-gradient(-90deg, #ddd6f3, #faaca8);
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: capitalize;
  /* gradient */
  background-clip: text;
  background: -webkit-linear-gradient(right, #00d2ff 80%, #3a7bd5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Parag = styled.p`
  line-height: 36px;
  margin: 16px 0px;
  font-size: 1.225rem;
  letter-spacing: 0.25px;
`

export const Items = styled(motion.div)``

export const Card = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
  align-items: flex-start;
  border-bottom: 2px solid ${(props) => props.theme.hover};
  &:first-child {
    border-top: 2px solid ${(props) => props.theme.hover};
  }
  &:hover {
    transition: 100ms ease-in-out;
    color: ${(props) => props.theme.lightText};
  }
`

export const Col = styled.div`
  padding: 1rem 0;
  &:last-child {
    flex: 1;
  }
`

export const Timing = styled.p`
  flex-basis: 5rem;
  line-height: 38px;
  margin-right: 2rem;
  font-size: 1.125rem;
  letter-spacing: 1px;
  color: ${(props) => props.theme.lightText};
`

export const HeadLine = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 0.625rem;
  text-transform: capitalize;
`

export const Intro = styled.p`
  font-weight: 500;
  font-size: 1.125rem;
  letter-spacing: 1px;
  color: ${(props) => props.theme.lightText};
`
