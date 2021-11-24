import { FC } from 'react'
import { variantsIn } from 'animation/variants'
import { Parag, Section, Title } from 'styles/home.module'

const HeroBigTitle: FC = () => {
  return (
    <Section
      transition={{ duration: 0.4, ease: 'easeOut' }}
      initial={'initial'}
      animate={'animation'}
      variants={variantsIn}>
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
