import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Section = styled(motion.section)`
  margin-top: ${(props) => props.theme.units._28};
`

export const Title = styled.h2`
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  font-size: ${(props) => props.theme.units._36};
`

export const Parag = styled.p`
  margin: 16px 0px;
  line-height: 1.7em;
  letter-spacing: 0.25px;
  font-size: ${(props) => props.theme.units._16};
  color: ${(props) => props.theme.accent.secondary};
`
