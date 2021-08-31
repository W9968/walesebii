import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import { NextPost, Button } from 'styles/Preview.element'

type NextPostProps = {
  slug: string
}

const PrevPost: React.FC<NextPostProps> = ({ slug }) => {
  const history = useHistory()

  return (
    <NextPost
      onClick={() => {
        history.push(`/posts/${slug}`)
        window.location.reload()
      }}>
      <Button>
        <p>newer</p>
        <BsArrowRight className='icon' />
      </Button>
      {slug.replaceAll('-', ' ')}
    </NextPost>
  )
}

export default PrevPost
