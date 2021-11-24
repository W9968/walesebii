import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Section = styled(motion.section)`
  margin-top: ${(props) => props.theme.units._28};

  ul {
    margin: 0px 20px;
  }
  .divider {
    height: 3px;
    width: 100px;
    margin: 48px auto;
    background: linear-gradient(-90deg, #ff5277, #faaca8);
  }
`

export const Title = styled.h2`
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  font-size: ${(props) => props.theme.units._36};
  color: ${(props) => props.theme.accent.hover};
`

export const List = styled.ul`
  margin: 16px 0px;
  line-height: 1.7em;
  letter-spacing: 0.25px;
  font-size: ${(props) => props.theme.units._16};
`

export const Parag = styled.p`
  margin: 16px 0px;
  line-height: 1.7em;
  letter-spacing: 0.25px;
  font-size: ${(props) => props.theme.units._16};
`
