import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Section = styled(motion.section)`
  margin-top: ${(props) => props.theme.units._48};
`

export const Title = styled.span`
  font-weight: 700;
  text-transform: capitalize;
  color: ${(props) => props.theme.accent.primary};
  font-size: ${(props) => props.theme.units._18};
`
export const Parag = styled(motion.p)`
  width: 300px;
  margin: 16px 0px;
  letter-spacing: 0.25px;
  font-size: ${(props) => props.theme.units._16};
  color: ${(props) => props.theme.accent.secondary};
`
export const SeeGithub = styled.a`
  cursor: pointer;
  font-size: 0.9em;
  text-transform: capitalize;
  text-decoration: underline;
  transition: 300ms ease-in-out;
  color: ${(props) => props.theme.scheme.text};

  &:hover {
    color: ${(props) => props.theme.accent.hover};
  }
`
