import Text from 'components/text/Text'
import Image from 'next/image'

import { FC } from 'react'
import { Column, Row } from 'styles/grid.style'

const Banner: FC = () => {
  return (
    <Row>
      <Column variants={column} initial={'hidden'} animate={'visible'}>
        <div>
          <Text
            size={48}
            weight={700}
            color={'white'}
            variants={content}
            capitalize={'first'}
            content={'wale e.sebii'}
          />
          <Text
            size={16}
            weight={400}
            variants={content}
            capitalize={'first'}
            content={'software engineering student'}
          />
        </div>
        <Text
          size={16}
          weight={400}
          color={'gray'}
          variants={content}
          content={
            'Crafting interfaces. Building performant software and web experience, trying to achieve minimalism, sharing what i know about design and code.'
          }
        />
      </Column>
      <Column variants={column} initial={'hidden'} animate={'visible'}>
        <Image
          width={150}
          height={150}
          src={'/asset/iphone_avatar.png'}
          alt={'iphone emoji me wale walee sebii avatar'}
        />
      </Column>
    </Row>
  )
}

const column = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const content = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'jsut',
    },
  },
}

export default Banner
