import { FC } from 'react'
import Link from 'next/link'
import { variantsIn } from 'animation/variants'
import { Parag, Section, SeeGithub, Title } from 'styles/Jam.module'
import { useViewportScroll, useTransform, motion } from 'framer-motion'

const IntroWrite: FC = () => {
  const { scrollY } = useViewportScroll()
  const slide = useTransform(scrollY, [0, 300], [0, -100])

  return (
    <Section>
      <motion.div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          y: slide,
          x: 0,
        }}>
        <Parag
          initial={'initial'}
          animate={'animation'}
          variants={variantsIn}
          transition={{ delay: 0.4, duration: 0.4, ease: 'easeOut' }}>
          <Title>WRITING</Title>, I write, sometimes on topics ranging from
          coding and web design to linguistics and natural language processing.{' '}
          <Link href={'/shelf'} passHref>
            <SeeGithub>visit my shelf</SeeGithub>
          </Link>
        </Parag>
      </motion.div>
    </Section>
  )
}

export default IntroWrite
