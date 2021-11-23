import styled from 'styled-components'
import { RiTwitterFill, RiInformationFill, RiGithubFill } from 'react-icons/ri'

export const DownPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const Time = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: ${(props) => props.theme.scheme.text};
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`

export const Github = styled(RiGithubFill)`
  font-size: 1.3em;
  margin: 0px 10px;
  cursor: pointer;
  color: ${(props) => props.theme.scheme.text};
  &:hover {
    color: #0074d9;
  }
`
export const Twitter = styled(RiTwitterFill)`
  font-size: 1.3em;
  cursor: pointer;
  color: ${(props) => props.theme.scheme.text};
  &:hover {
    color: #7fdbff;
  }
`

export const Info = styled(RiInformationFill)`
  font-size: 1.3em;
  cursor: pointer;
  color: ${(props) => props.theme.scheme.text};
  &:hover {
    color: ${(props) => props.theme.accent.hover};
  }
`
