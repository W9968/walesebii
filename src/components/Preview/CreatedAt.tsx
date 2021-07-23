import React from 'react'
import moment from 'moment'
import { Timer } from '../../styles/Preview.element'

type CreatedAtProps = {
  date: string
}

const CreatedAt: React.FC<CreatedAtProps> = ({ date }) => {
  return <Timer>{moment(date).format('ll')}</Timer>
}

export default CreatedAt
