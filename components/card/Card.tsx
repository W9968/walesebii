import { FC } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { StyledCard, StyledCardHeader } from 'styles/card.style'

import Text from 'components/text/Text'
import Link from 'next/link'

const Card: FC<Post & Record<string, any>> = function ({
  slug,
  title,
  summary,
  published,
  ...rest
}) {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <StyledCard {...rest}>
        <Text size={12} content={new Date(published).toLocaleDateString()} />
        <StyledCardHeader>
          <Text
            content={title}
            size={20}
            color={'white'}
            capitalize={'first'}
            weight={600}
          />
          <BiRightArrowAlt />
        </StyledCardHeader>
        <Text content={summary} size={16} color={'gray'} />
      </StyledCard>
    </Link>
  )
}

type Post = {
  slug: string
  title: string
  summary: string
  published: string
}

export default Card
