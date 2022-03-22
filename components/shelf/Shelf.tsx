import moment from 'moment'
import Link from 'next/link'
import butter from 'hooks/useButter'
import Navigation from 'shared/Navigation'
import { FC, useState, useEffect } from 'react'
import { CardWrapper, Container, PostGrid } from 'styles/shelf.module'
import { Spin } from 'components/export'

type post = {
  slug: string
  title: string
  summary: string
  published: string
}

const Shelf: FC = () => {
  const [data, setData] = useState<post[]>([])

  useEffect(() => {
    butter.post.list({ page: 1, page_size: 20 }).then((res): void => {
      res.data != undefined && setData(res.data.data)
    })
  }, [])

  return (
    <Container>
      <Navigation />

      {data.length === 0 ? (
        <Spin />
      ) : (
        <PostGrid variants={animation} initial={'onMount'} animate={'mounted'}>
          {data.map((item: post, key: number): JSX.Element => {
            return (
              <Link href={`/shelf/${item.slug}`} passHref key={key}>
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
