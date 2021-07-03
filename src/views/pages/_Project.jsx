import React from 'react'
import styled from 'styled-components'
import { projects } from '../../components/project_card/projects.jsx'
import CardProject from '../../components/project_card/CardProject.jsx'

const _Project = () => {
  return (
    <>
      <Section>
        <Title>Project</Title>
        <Parag>
          List of different projects written mostly in JavaScript, also to show
          my progress
        </Parag>
        <div className='divider' />
        {projects.map((el, key) => {
          return (
            <CardProject
              key={key}
              title={el.title}
              summery={el.summery}
              link={el.image}
              externalLink={el.url}
            />
          )
        })}
      </Section>
    </>
  )
}

export default _Project

const Section = styled.section`
  ul {
    margin: 0px 20px;
  }

  .divider {
    height: 3px;
    width: 100px;
    margin: 48px auto;
    background: linear-gradient(-90deg, #ddd6f3, #faaca8);
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: capitalize;

  /* gradient */
  background-clip: text;
  background: -webkit-linear-gradient(right, #ee0979 80%, #ff6a00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Parag = styled.p`
  line-height: 36px;
  margin: 16px 0px;
  font-size: 1.225rem;
  letter-spacing: 0.25px;
`
