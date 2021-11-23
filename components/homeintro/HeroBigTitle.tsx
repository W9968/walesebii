import { FC } from 'react'
import { Parag, Section, Title } from 'styles/home.module'

const HeroBigTitle: FC = () => {
  return (
    <Section
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'just', delay: 0.1 }}>
      <Title>Walee Sebiiy</Title>
      <Parag>
        Crafting interfaces. building performant software and web experience.
        trying to achieve minimalism, sharing what i know about design and code
        currently a Software Engineering Student.
      </Parag>
    </Section>
  )
}

export default HeroBigTitle
