import type { NextPage } from 'next'
import { Section, Title, Parag, List } from 'styles/meta.module'

const variantsIn = {
  initial: { opacity: 0, y: 20 },
  animation: { opacity: 1, y: 0 },
}

const Meta: NextPage = () => {
  return (
    <Section initial={'initial'} animate={'animation'} variants={variantsIn}>
      <Title>meta</Title>
      <Parag>
        {"I've"} poured my heart and soul into making this little corner of the
        internet feel like me. I {"don't"} expect anyone else to care that much,
        but I figured I would write down some of the nooks and crannies of this
        place:
      </Parag>

      <List>
        <li>Some cool animation here and there.</li>
        <li>
          Sound design! Not much, a few whooshes and bleeps here and there.
        </li>
        <li>Fascinating hover interactions.</li>
      </List>

      <div className='divider' />
      <Parag>This site would not exist, as it does today, without:</Parag>

      <List>
        <li>Sentry</li>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>React-Spring</li>
        <li>Framer-Motion</li>
        <li>Styled-Components</li>
        <li>Vercel Web Servers</li>
      </List>
    </Section>
  )
}

export default Meta
