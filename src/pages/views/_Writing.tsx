import React, { useState, useEffect } from 'react'
import butter from 'hooks/useButterClient'
import { BlogCard, Pulse } from 'components/exports'
import { Section, Title, Parag, Items } from 'styles/Blog.elemnt'

interface IResponse {
  meta: any
  data: any
}

interface IResponseButter {
  title: string
  slug: string
  time: string
  created: string
  summary: string
}

const _Writing: React.FC = () => {
  const [posts, setPosts] = useState<IResponse>()

  useEffect(() => {
    butter.post.list({ page: 1, page_size: 10 }).then((response): void => {
      response.data !== undefined && setPosts(response.data)
    })
  }, [])

  return (
    <>
      <Section>
        <Title>writing</Title>
        <Parag>A collection of what I know about coding and design</Parag>
        <div className='divider' />
        <Items initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {posts?.data === undefined ? (
            <div style={{ width: '100%', textAlign: 'center' }}>
              <Pulse />
            </div>
          ) : (
            posts?.data.map((el: IResponseButter, key: number) => {
              return (
                <BlogCard
                  key={key}
                  title={el.title}
                  slug={el.slug}
                  time={new Date(el.created).toLocaleDateString()}
                  intro={el.summary}
                />
              )
            })
          )}
        </Items>
      </Section>
    </>
  )
}

export default _Writing
