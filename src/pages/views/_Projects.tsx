import React from 'react'
import { Card, projects } from 'components/exports'
import { Section, Heading, Paragraphe } from 'styles/Projects.element'

interface Ielement {
  title: string
  summery: string
  image: string
  url: string
}

const _Projects: React.FC = () => {
  return (
    <>
      <Section>
        <Heading>Project</Heading>
        <Paragraphe>
          List of different projects written mostly in JavaScript, also to show
          my progress
        </Paragraphe>
        <div className='divider' />
        {projects.map((el: Ielement, key: number) => {
          return (
            <Card
              key={key}
              title={el.title}
              summary={el.summery}
              link={el.image}
              externalLink={el.url}
            />
          )
        })}
      </Section>
    </>
  )
}

export default _Projects
