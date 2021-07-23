import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import { PrevPost, Button } from '../../styles/Preview.element'

type NextPostProps = {
  slug: string
}

const NextPost: React.FC<NextPostProps> = ({ slug }) => {
  const history = useHistory()

  return (
    <PrevPost
      onClick={() => {
        history.push(`/posts/${slug}`)
        window.location.reload()
      }}>
      <Button>
        <BsArrowLeft className='icon' />
        <p>older</p>
      </Button>
      {slug.replaceAll('-', ' ')}
    </PrevPost>
  )
}

export default NextPost
