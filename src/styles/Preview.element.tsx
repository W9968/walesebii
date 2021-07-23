import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Timer = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.125rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  text-transform: capitalize;
`

export const Body = styled.div`
  margin: 1rem 0;
  img {
    margin: 1rem 0;
    max-width: 100%;
  }
  pre {
    padding: 1rem;
    margin: 1rem 0;
    max-width: 100%;
    overflow-y: auto;
    line-height: 1.3rem;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.hover};
  }
  a {
    color: ${(props) => props.theme.lightText};
    &:hover {
      background-color: ${(props) => props.theme.hover};
    }
  }
  p {
    margin: 1rem 0;
    line-height: 2rem;
    font-size: 1.25rem;
  }
  blockquote {
    > p {
      font-size: 1rem;
      font-style: oblique;
    }
    padding-left: 1rem;
    border-left: 5px solid ${(props) => props.theme.text};
  }
`

export const Changer = styled.div`
  display: flex;
  margin-top: 100px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const Button = styled.div`
  border: none;
  outline: none;
  display: flex;
  padding: 10px 0;
  font-size: 1.125rem;
  align-items: center;
  p {
    margin: 0 5px;
    text-transform: capitalize;
  }
  .icon {
    font-size: 1.5rem;
  }
`

export const NextPost = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  color: ${(props) => props.theme.lightText};
  &:hover {
    color: ${(props) => props.theme.text};
  }
`
export const PrevPost = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: ${(props) => props.theme.lightText};
  &:hover {
    color: ${(props) => props.theme.text};
  }
`
