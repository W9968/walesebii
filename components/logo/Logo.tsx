import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Logo: FC = () => {
  return (
    <Button whileTap={{ scale: 0.9 }}>
      <Link passHref href='/'>
        <Svg
          width='310'
          height='322'
          viewBox='0 0 310 322'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <Fill d='M5.38146 49.5C-2.21854 12.4 -2.01854 8.80001 7.58146 2.20001C9.48146 0.900012 12.3815 0 14.5815 0C20.7815 0 26.1815 3.70001 50.1815 24.2C85.0815 54 91.7815 61.6 109.581 92C125.481 119 125.581 119 155.081 119C174.881 119 175.881 118.9 180.381 116.6C187.381 113 190.181 109.4 202.881 88C218.881 60.9 224.581 54.4 256.081 27.2C284.081 3.00001 289.681 -0.699982 296.681 0.300018C303.681 1.20002 307.981 5.40002 309.681 12.8C310.382 16 309.281 22.7 304.181 48.1C295.081 93.5 293.081 97.4 264.081 129C252.981 141.1 245.581 149.9 244.381 152.7C241.381 159.5 241.081 166.3 243.481 176C246.881 189.9 248.081 208.1 246.781 225.5C245.081 248.5 241.481 258.9 231.181 271C228.081 274.6 223.481 281.5 220.881 286.5C208.381 310 183.281 325.5 164.781 321C157.581 319.3 151.581 319.3 144.381 321C126.081 325.4 101.581 310.5 89.2815 287.5C86.6815 282.5 81.9815 275.6 78.9815 272C72.7815 264.9 67.5815 254.8 65.2815 245.5C62.9815 236.8 61.2815 213 62.0815 202C62.3815 196.8 63.8815 186.9 65.2815 180C68.0815 165.7 67.9815 158.6 64.6815 152.1C63.4815 149.8 54.3815 139.1 44.3815 128.2C16.9815 98.2 14.1815 92.6 5.38146 49.5ZM153.594 286.394C150.657 286.296 147.812 285.829 145.5 285C140.8 283.3 139 283.1 139 284.5C139 285 140.3 286.9 141.9 288.8C143.6 290.6 146.9 295.5 149.3 299.6C151.7 303.7 154.3 307 155.1 307C155.416 307 155.92 306.594 156.518 305.905C157.434 304.851 158.572 303.135 159.6 301.2C161.3 298 164.8 292.8 167.5 289.7C172.8 283.3 172.2 282.3 164.5 284.9C161.343 286.028 157.391 286.52 153.594 286.394Z' />
        </Svg>
      </Link>
    </Button>
  )
}

export default Logo

const Button = styled(motion.button)`
  border: none;
  display: flex;
  outline: none;
  cursor: pointer;
  background: none;
`

const Svg = styled.svg`
  width: 42px;
  height: 42px;
  display: flex;
`

const Fill = styled.path`
  fill: ${(props) => props.theme.scheme.text};
`