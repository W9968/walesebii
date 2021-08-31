import React from 'react'
import { Container, Image, Overly, Title, Parag } from 'styles/Projects.element'

type CardProps = {
  title: string
  summary: string
  link: string
  externalLink: string
}

const CardProject: React.FC<CardProps> = ({
  title,
  summary,
  link,
  externalLink,
}) => {
  return (
    <Container href={externalLink} target={'_blank'}>
      <Image src={link} alt={title} />
      <Overly>
        <Title>{title}</Title>
        <Parag>{summary}</Parag>
      </Overly>
    </Container>
  )
}

export default CardProject
