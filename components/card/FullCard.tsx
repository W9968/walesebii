import { FC, useEffect } from 'react'
import { Linkers, Row, StyledBlogBody, StyledCardFull } from 'styles/card.style'

import { useRouter } from 'next/router'
import Text from 'components/text/Text'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'

const FullCard: FC<ComponentProp> = function ({ title, body, prev, next }) {
  const { push } = useRouter()
  return (
    <StyledCardFull>
      <Text color={'white'} size={42} weight={700} content={title} />
      <StyledBlogBody dangerouslySetInnerHTML={{ __html: body }} />

      <Row>
        {next !== null ? (
          <Linkers onClick={() => push(`/blog/${next.slug}`)}>
            <div>
              <Text capitalize={'first'} content={'next post'} />
              <Text capitalize={'first'} content={<BiRightArrowAlt />} />
            </div>

            <Text capitalize={'first'} color={'gray'} content={next.title} />
          </Linkers>
        ) : (
          <Linkers></Linkers>
        )}
        {prev !== null ? (
          <Linkers onClick={() => push(`/blog/${prev.slug}`)}>
            <div style={{ flexDirection: 'row-reverse' }}>
              <Text capitalize={'first'} content={'previous post'} />
              <Text capitalize={'first'} content={<BiLeftArrowAlt />} />
            </div>

            <Text capitalize={'first'} color={'gray'} content={prev.title} />
          </Linkers>
        ) : (
          <Linkers></Linkers>
        )}
      </Row>
    </StyledCardFull>
  )
}

type ComponentProp = {
  title: string
  body: string
  prev: PaginatePost
  next: PaginatePost
}

type PaginatePost = {
  slug: string
  title: string
  featured_image: string | null
}

export default FullCard
