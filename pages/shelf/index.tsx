import moment from 'moment'
import type { NextPage } from 'next'
import { __butter } from 'store/__butter'
import { useEffect, useState } from 'react'
import { Idata } from 'interface/Iresponse'
import { PostItemCard } from 'components/export'
import { Parag, Section, Title } from 'styles/Writing.module'

const Home: NextPage = () => {
  const [response, setResponse] = useState<Idata[]>([])

  useEffect((): void => {
    __butter.post.list({ page: 1, page_size: 15 }).then((res): void => {
      res.data !== undefined && setResponse(res.data.data)
    })
  }, []) // eslint-disable-line

  console.log(response)

  return (
    <>
      <Section>
        <Title>/shelf</Title>
        <Parag>
          A collection of my <span className='line'>somewhat</span>{' '}
          <i>(un)organized</i> musings.
        </Parag>
      </Section>
      {response.map((el: Idata, key: number) => {
        return (
          <PostItemCard
            key={key}
            slug={el.slug}
            title={el.title}
            summary={el.summary}
            published={moment(el.published).format('LL')}
          />
        )
      })}
    </>
  )
}

export default Home
