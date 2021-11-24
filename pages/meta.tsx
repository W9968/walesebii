import type { NextPage } from 'next'
import { variantsIn } from 'animation/variants'
import { Section, Title, Parag, List } from './../styles/Meta.module'

const meta: NextPage = () => {
  return (
    <Section
      transition={{ duration: 0.4, ease: 'easeOut' }}
      initial={'initial'}
      animate={'animation'}
      variants={variantsIn}>
      <Title>/meta</Title>
      <Parag>
        {"I've"} poured my heart and soul into making this little corner of the
        internet feel like me. I {"don't"} expect anyone else to care that much,
        but I figured I would write down some of the nooks and crannies of this
        place:
      </Parag>

      <List>
        <li>Dark (by default) and light mode.</li>
        <li>
          Sound design! Not much, a few whooshes and bleeps here and there.
        </li>
        <li>Fascinating hover interactions </li>
      </List>

      <div className='divider' />
      <Parag>This site would not exist, as it does today, without:</Parag>

      <List>
        <li>Sentry</li>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>Framer-Motion</li>
        <li>Styled-Components</li>
        <li>Vercel Web Servers</li>
      </List>
    </Section>
  )
}

export default meta
