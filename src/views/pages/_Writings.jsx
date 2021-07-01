import React, { useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import BlogITem from '../../components/blogItem/BlogITem'
import useFetch from '../../hooks/useFetch'

const _Writings = () => {
  const [posts, setPosts] = useState([])

  useLayoutEffect(() => {
    useFetch.get('/posts').then((res) => {
      setPosts(res.data)
    })
  }, []) // eslint-disable-line

  return (
    <>
      <Section>
        <Title>writing</Title>
        <Parag>A collection of what I know about coding and design</Parag>
        <Items>
          {posts.map((el) => {
            return (
              <BlogITem
                key={el._id}
                title={el.blogTitle}
                time={new Date(el.date).toLocaleDateString()}
                intro={el.blogdesc}
              />
            )
          })}
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

const Items = styled.div`
  margin: 2rem 0rem;
`
