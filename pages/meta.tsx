import { FC } from 'react'
import { Section, Title, Parag, List } from './../styles/Meta.module'

const meta: FC = () => {
  return (
    <Section
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'just', delay: 0.1 }}>
      <Title>meta</Title>
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
        <li>Custom cursor to make your experience even better</li>
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
