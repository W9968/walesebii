import { FC } from 'react'
import { Spin } from 'components/export'
import { CardWrapper, Container, PostGrid } from 'styles/shelf.module'

import moment from 'moment'
import Link from 'next/link'
import Navigation from 'shared/Navigation'

type post = {
  slug: string
  title: string
  summary: string
  published: string
}

type props = {
  payload: post[]
}

const Shelf: FC<props> = ({ payload }) => {
  return (
    <Container>
      <Navigation />

      {payload.length === 0 ? (
        <Spin />
      ) : (
        <PostGrid variants={animation} initial={'onMount'} animate={'mounted'}>
          {payload.map((item: post, key: number): JSX.Element => {
            return (
              <Link href={`/blog/${item.slug}`} passHref key={key}>
                <CardWrapper variants={variant}>
                  <h4>{item.title}</h4>
                  <code>{moment(item.published).format('LL')}</code>
                  <p>{item.summary}</p>
                </CardWrapper>
              </Link>
            )
          })}
        </PostGrid>
      )}
    </Container>
  )
}

export default Shelf

const animation = {
  onMount: { opacity: 0 },
  mounted: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
}

const variant = {
  onMount: { opacity: 0 },
  mounted: { opacity: 1 },
}
