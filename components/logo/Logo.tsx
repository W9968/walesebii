import { FC } from 'react'
import { motion } from 'framer-motion'

import Link from 'next/link'
import styled from 'styled-components'

const Logo: FC = function () {
  return (
    <Link href={'/'} passHref>
      <StyledLogo variants={sentence} initial={'hidden'} animate={'visible'}>
        {line.split('').map((char, key) => (
          <motion.span variants={letter} key={key}>
            {char}
          </motion.span>
        ))}
      </StyledLogo>
    </Link>
  )
}

const line: string = 'walees'

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const StyledLogo = styled(motion.button)`
  border: none;
  outline: none;
  background: none;
  user-select: none;
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-family: 'Playfair Display', serif;
  color: ${({ theme }) => theme.primary.accent_0};

  & > span {
    font-family: 'Playfair Display', serif;
  }
`

export default Logo
