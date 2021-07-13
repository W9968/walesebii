import React from 'react'
import styled from 'styled-components'
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillQuestionCircle,
} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const SocialIcons = () => {
  return (
    <>
      <Social>
        <a href='https://twitter.com/oryvle' target={'_blank'} rel='noreferrer'>
          <Twitter />
        </a>
        <a href='https://github.com/oryale' target={'_blank'} rel='noreferrer'>
          <Github />
        </a>
        <NavLink to='/meta'>
          <Info />
        </NavLink>
      </Social>
    </>
  )
}

export default SocialIcons

const Social = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`

const Github = styled(AiOutlineGithub)`
  font-size: 1.5rem;
  margin: 0px 10px;
  color: ${({ theme }) => theme.text};

  &:hover {
    color: #0074d9;
  }
`
const Twitter = styled(AiOutlineTwitter)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};

  &:hover {
    color: #7fdbff;
  }
`

const Info = styled(AiFillQuestionCircle)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};

  &:hover {
    color: #1bffcd;
  }
`
