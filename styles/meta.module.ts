import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Section = styled(motion.section)`
  margin-top: ${(props) => props.theme.units._28};

  ul {
    margin: 0px 20px;
  }
`

export const Title = styled.h2`
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  font-size: ${(props) => props.theme.units._36};
  color: ${(props) => props.theme.scheme.foreground};
`

export const List = styled.ul`
  margin: 16px 0px;
  line-height: 1.7em;
  letter-spacing: 0.25px;
  font-size: ${(props) => props.theme.units._16};
  color: ${(props) => props.theme.accent.light_forground};
`

export const Parag = styled.p`
  width: 800px;
  margin: 16px 0px;
  line-height: 1.7em;
  letter-spacing: 0.25px;
  font-size: ${(props) => props.theme.units._16};
  color: ${(props) => props.theme.accent.light_forground};

  @media (max-width: 850px) {
    width: 100%;
  }
`
