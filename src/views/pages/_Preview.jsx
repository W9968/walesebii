import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import butter from '../../hooks/butter-client'
import { useParams } from 'react-router'
import { Pulse } from '../exports'

const _Preview = () => {
  const { slug } = useParams()
  const [post, setPost] = useState({})

  useEffect(() => {
    butter.post.retrieve(slug).then((res) => setPost(res.data))
  }, [slug])

  return (
    <>
      <Wrapper>
        {post.data === undefined ? (
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Pulse />
          </div>
        ) : (
          <>
            <Title>{post.data.title}</Title>
            <Body dangerouslySetInnerHTML={{ __html: post.data.body }} />
          </>
        )}
      </Wrapper>
    </>
  )
}

export default _Preview

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  text-transform: capitalize;
`

const Body = styled.div`
  margin: 1rem 0;

  img {
    margin: 1rem 0;
    max-width: 100%;
  }

  pre {
    padding: 1rem;
    margin: 1rem 0;
    max-width: 100%;
    overflow-y: auto;
    line-height: 1.3rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.hover};
  }

  p {
    margin: 1rem 0;
    line-height: 2rem;
    font-size: 1.25rem;
  }
`
