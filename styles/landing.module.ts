import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  flex: 1;
  width: 100%;
  display: flex;
  padding-bottom: 10%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled(motion.h1)`
  font-size: 9vh;
  font-weight: 700;
  user-select: none;
  text-transform: capitalize;
  will-change: transform, opacity;

  @media (max-width: 1200px) {
    font-size: 8vw;
  }

  & .animated {
    background-clip: text;
    background: linear-gradient(
      45deg,
      hsl(180deg 63% 50%) 0%,
      hsl(224deg 74% 36%) 50%,
      hsl(267deg 86% 22%) 100%
    );
    background-size: 150% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  -moz-user-select: none;
  -webkit-user-select: none;
`
