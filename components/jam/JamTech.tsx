import { FC } from 'react'
import { variantsIn } from 'animation/variants'
import { Parag, Section, SeeGithub, Title } from 'styles/Jam.module'
import { useViewportScroll, useTransform, motion } from 'framer-motion'

const JamTech: FC = () => {
  const { scrollY } = useViewportScroll()
  const slide = useTransform(scrollY, [0, 300], [0, -100])

  return (
    <Section>
      <motion.div style={{ y: slide, x: 0 }}>
        <Parag
          initial={'initial'}
          animate={'animation'}
          variants={variantsIn}
          transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}>
          <Title>STACK</Title>, I’m familiar with technologies such as
          JavaScript, Typescript, React, Nextjs, Greensock, Framer Motion,
          Laravel, Sanity, ...{' '}
          <SeeGithub href='https://github.com/nyuuke' target={'_blank'}>
            see my github
          </SeeGithub>
        </Parag>
      </motion.div>
    </Section>
  )
}

export default JamTech
