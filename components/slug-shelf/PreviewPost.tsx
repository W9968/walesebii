import { FC } from 'react'
import Wrapper from 'shared/Wrapper'
import { postProp } from 'types/post'
import Navigation from 'shared/Navigation'
import { Container, PreviewContainer, Title } from 'styles/preview.module'

type props = {
  data: postProp
  prev: any
  next: any
}

const PreviewPost: FC<props> = ({ data, prev, next }) => {
  return (
    <Wrapper background='g'>
      <Navigation />
      <PreviewContainer>
        <Title>{data.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: data.body }} />
      </PreviewContainer>
    </Wrapper>
  )
}

export default PreviewPost
