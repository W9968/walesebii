import styled from 'styled-components'
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillQuestionCircle,
} from 'react-icons/ai'

export const Footer = styled.footer`
  display: flex;
  margin-top: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Time = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: ${(props) => props.theme.text};
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`

export const Github = styled(AiOutlineGithub)`
  font-size: 1.5rem;
  margin: 0px 10px;
  color: ${({ theme }) => theme.text};
  &:hover {
    color: #0074d9;
  }
`
export const Twitter = styled(AiOutlineTwitter)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  &:hover {
    color: #7fdbff;
  }
`

export const Info = styled(AiFillQuestionCircle)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  &:hover {
    color: #ee0000;
  }
`
