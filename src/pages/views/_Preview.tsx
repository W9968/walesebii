import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import butter from '../../hooks/useButterClient'
import { Body, Changer, Wrapper } from '../../styles/Preview.element'
import {
  NextPrev,
  PrevPrev,
  PrevTitle,
  Pulse,
  TimeZone,
} from '../../components/exports'

interface IResponse {
  meta: any
  data: any
}

type TypeParams = {
  slug: string
}

const _Preview: React.FC = () => {
  const { slug } = useParams<TypeParams>()
  const [post, setPost] = useState<IResponse>()

  useEffect(() => {
    butter.post.retrieve(slug).then((response): void => setPost(response.data))
  }, [slug])

  return (
    <>
      <Wrapper>
        {post?.data === undefined ? (
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Pulse />
          </div>
        ) : (
          <>
            <TimeZone date={post.data.created} />
            <PrevTitle title={post.data.title} />
            <Body dangerouslySetInnerHTML={{ __html: post.data.body }} />
            <Changer>
              {/* prev post */}
              {post.meta.previous_post !== null && (
                <NextPrev slug={post.meta.previous_post.slug} />
              )}
              {/* next post */}
              {post.meta.next_post !== null && (
                <PrevPrev slug={post.meta.next_post.slug} />
              )}
            </Changer>
          </>
        )}
      </Wrapper>
    </>
  )
}

export default _Preview
