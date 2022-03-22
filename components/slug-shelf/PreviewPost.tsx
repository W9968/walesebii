import { FC } from 'react'
import Head from 'next/head'
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
    <Container>
      <Head>
        <title>Wale - {data.seo_title}</title>
        <meta name='description' content={data.seo_title} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <PreviewContainer>
        <Title>{data.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: data.body }} />
      </PreviewContainer>
    </Container>
  )
}

export default PreviewPost
