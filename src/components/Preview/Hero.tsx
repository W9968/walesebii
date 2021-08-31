import React from 'react'
import { Title } from 'styles/Preview.element'

type HeroProps = {
  title: string
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return <Title>{title}</Title>
}

export default Hero
