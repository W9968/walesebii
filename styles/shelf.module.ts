import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.units._16};
  background: ${({ theme }) => theme.scheme.accent_1};
`

export const PostGrid = styled(motion.div)`
  display: grid;
  grid-gap: 24px;
  margin-top: 100px;
  grid-template-columns: 450px 450px;

  @media (max-width: 950px) {
    grid-template-columns: auto;
  }
`

export const CardWrapper = styled(motion.div)`
  width: 100%;
  height: 225px;
  padding: 24px;
  display: flex;
  cursor: pointer;
  border-radius: 12px;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }) => theme.scheme.foreground};
  filter: drop-shadow(0mm 2mm 4mm rgba(115, 115, 115, 0.2));

  @media (max-width: 950px) {
  }

  :hover {
    transition: 300ms ease-in-out;
    background: ${({ theme }) => theme.scheme.dominant};

    > p {
      color: black;
    }
  }

  & > code {
    width: 100%;
    font-size: 14px;
    margin-top: 10px;
    padding-bottom: 5px;
    margin-bottom: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.scheme.accent_2};
  }

  & > h4 {
    font-size: 1.2rem;
    word-break: break-word;
    letter-spacing: 0.5px;
    text-transform: capitalize;
  }

  & > p {
    font-weight: 400;
    word-break: break-word;
    color: ${({ theme }) => theme.scheme.accent_2};
  }
`
