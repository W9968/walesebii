import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import BlogITem from '../../components/blogItem/BlogITem'
import butter from '../../hooks/butter-client'
import { motion as m } from 'framer-motion'
import { Pulse } from '../exports'

const _Writings = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    butter.post.list({ page: 1, page_size: 10 }).then(function (response) {
      setPosts(response.data)
    })
  }, [])

  console.log(posts)

  return (
    <>
      <Section>
        <Title>writing</Title>
        <Parag>A collection of what I know about coding and design</Parag>
        <div className='divider' />
        <Items initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {posts.data === undefined ? (
            <div style={{ width: '100%', textAlign: 'center' }}>
              <Pulse />
            </div>
          ) : (
            posts.data.map((el, key) => {
              return (
                <BlogITem
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

export default _Writings

const Section = styled.section`
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
  background: -webkit-linear-gradient(right, #00d2ff 80%, #3a7bd5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Parag = styled.p`
  line-height: 36px;
  margin: 16px 0px;
  font-size: 1.225rem;
  letter-spacing: 0.25px;
`

const Items = styled(m.div)``
