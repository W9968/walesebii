import styled from 'styled-components'
import { motion } from 'framer-motion'

type TextProps = {
  size: number
  align: 'start' | 'center' | 'end' | 'justify'
  capitalize: 'none' | 'upper' | 'first' | 'lower'
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  color: 'white' | 'gray' | 'error' | 'success' | 'dark' | 'default'
}

export const StyledText = styled(motion.p)<TextProps>`
  letter-spacing: 0.25px;
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
  line-height: calc(${({ size }) => size}px * 1.25);
  text-align: ${({ align }) => {
    switch (align) {
      case 'start':
        return 'start'
      case 'center':
        return 'center'
      case 'end':
        return 'end'
      case 'justify':
        return 'justify'
      default:
        return 'start'
    }
  }};
  text-transform: ${({ capitalize }) => {
    switch (capitalize) {
      case 'none':
        return 'none'
      case 'upper':
        return 'uppercase'
      case 'first':
        return 'capitalize'
      case 'lower':
        return 'lowercase'
      default:
        return 'none'
    }
  }};
  color: ${({ color, theme }) => {
    switch (color) {
      case 'white':
        return theme.primary.accent_0
      case 'gray':
        return theme.primary.accent_300
      case 'error':
        return
      case 'success':
        return
      case 'dark':
        return theme.primary.accent_900
      case 'default':
        return theme.primary.accent_100
      default:
        return theme.primary.accent_100
    }
  }};

  @media (max-width: 600px) {
    line-height: normal;
    font-size: ${({ size }) => size > 20 && size / 1.25}px;
  }
`
