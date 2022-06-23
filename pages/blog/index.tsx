import Head from 'next/head'
import type { NextPage } from 'next'

import { motion } from 'framer-motion'
import { BiSearch } from 'react-icons/bi'
import { Heading } from 'styles/grid.style'
import { getAllPostsForHome } from 'functions/serverless.butter'

import Card from 'components/card/Card'
import Text from 'components/text/Text'
import Input from 'components/input/Input'
import { ChangeEvent, useState } from 'react'

const Blog: NextPage<PageProp> = ({ data }) => {
  const [isSearch, setSearch] = useState<string>('')

  return (
    <>
      <Head>
        <title>Walees | Shelf</title>
        <meta name='description' content='wale sebiiy personal portfolio' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <motion.div variants={column} initial={'hidden'} animate={'visible'}>
        <Heading variants={content}>
          <Text
            size={48}
            weight={700}
            color={'white'}
            content={'blog'}
            capitalize={'first'}
          />
          <Text
            size={16}
            color={'gray'}
            content={
              'This is a collection of things I found interesting and worth sharing with you guys, it is mostly about web development and how I see code and design.'
            }
          />
          <Input
            placeholder={'Search articles'}
            icon={<BiSearch size={21} />}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
        </Heading>

        {data
          .filter((el: Post) => el.title.toLowerCase().includes(isSearch))
          .map((el: Post, key) => (
            <Card
              key={key}
              slug={el.slug}
              title={el.title}
              summary={el.summary}
              published={el.published}
              variants={content}
            />
          ))}
      </motion.div>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const data = (await getAllPostsForHome(preview)) || []
  return {
    props: { data },
    revalidate: 1,
  }
}

type Post = {
  slug: string
  title: string
  summary: string
  published: string
}

type PageProp = {
  data: Post[]
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

export default Blog
