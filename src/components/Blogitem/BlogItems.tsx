import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Col, Timing, HeadLine, Intro } from '../../styles/Blog.elemnt'

type BlogItemProps = {
  slug: string
  title: string
  intro: string
  time: string
}

const BlogItems: React.FC<BlogItemProps> = ({ slug, title, intro, time }) => {
  const history = useHistory()
  return (
    <>
      <Card
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => history.push(`/posts/${slug}`)}>
        <Col>
          <Timing>{time}</Timing>
        </Col>
        <Col>
          <HeadLine>{title}</HeadLine>
          <Intro>{intro}</Intro>
        </Col>
      </Card>
    </>
  )
}

export default BlogItems
