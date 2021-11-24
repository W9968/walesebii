import { FC } from 'react'
import Link from 'next/link'
import { Idata } from 'interface/Iresponse'
import { Card, Col, Timing, HeadLine, Intro } from 'styles/Card.module'

const BlogCard: FC<Idata> = ({ slug, title, summary, published }) => {
  return (
    <Link href={`/posts/${slug}`} passHref>
      <Card initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Col>
          <Timing>{published}</Timing>
        </Col>
        <Col>
          <HeadLine>{title}</HeadLine>
          <Intro>{summary}</Intro>
        </Col>
      </Card>
    </Link>
  )
}

export default BlogCard
