import React, { useEffect, useState } from 'react'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { useHistory, useParams } from 'react-router-dom'
import butter from '../../hooks/butter-client'

import styled from 'styled-components'
import { Pulse } from '../exports'
import moment from 'moment'

const _Preview = () => {
  const history = useHistory()
  const { slug } = useParams()
  const [post, setPost] = useState({})

  useEffect(() => {
    butter.post.retrieve(slug).then((res) => setPost(res.data))
  })

  console.log(post)

  return (
    <>
      <Wrapper>
        {post.data === undefined ? (
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Pulse />
          </div>
        ) : (
          <>
            <Timer>{moment(post.data.created).format('ll')}</Timer>
            <Title>{post.data.title}</Title>
            <Body dangerouslySetInnerHTML={{ __html: post.data.body }} />
            <Changer>
              {/* prev post */}
              {post.meta.previous_post !== null && (
                <PrevPost
                  onClick={() => {
                    history.push(`/posts/${post.meta.previous_post.slug}`)
                    window.location.reload()
                  }}>
                  <Button>
                    <BsArrowLeft className='icon' />
                    <p>older</p>
                  </Button>
                  {post.meta.previous_post.slug.replaceAll('-', ' ')}
                </PrevPost>
              )}
              {/* next post */}
              {post.meta.next_post !== null && (
                <NextPost
                  key={post.meta.next_post.slug}
                  onClick={() => {
                    history.push(`/posts/${post.meta.next_post.slug}`)
                    window.location.reload()
                  }}>
                  <Button>
                    <p>newer</p>
                    <BsArrowRight className='icon' />
                  </Button>
                  {post.meta.next_post.slug.replaceAll('-', ' ')}
                </NextPost>
              )}
            </Changer>
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

const Timer = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.125rem;
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

const Changer = styled.div`
  display: flex;
  margin-top: 100px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

const Button = styled.div`
  border: none;
  outline: none;
  display: flex;
  padding: 10px 0;
  font-size: 1.125rem;
  align-items: center;

  p {
    margin: 0 5px;
    text-transform: capitalize;
  }

  .icon {
    font-size: 1.5rem;
  }
`

const NextPost = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  color: ${({ theme }) => theme.lightText};

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`
const PrevPost = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: ${({ theme }) => theme.lightText};

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`
