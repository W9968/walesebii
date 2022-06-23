import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledCard = styled(motion.div)`
  cursor: pointer;
  padding: 1.2rem 0rem;
  transition: 300ms ease-in-out;
`

export const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 0.2rem;
  padding-bottom: 0.5rem;
  justify-content: space-between;
`

/**
 * full card
 */
export const StyledCardFull = styled(motion.div)`
  padding-bottom: 1rem;
`

export const Row = styled.div`
  display: flex;
  padding: 2rem 0;
  margin-top: 5rem;
  flex-direction: column;
`

export const Linkers = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;

  &:first-child {
    align-self: flex-end;
  }

  &:last-child {
    align-self: flex-start;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }
`

export const StyledBlogBody = styled(motion.div)`
  width: 100%;


  img {
      margin: 1rem 0;
      max-width: 100%;
    }

    pre {
      padding: 1rem;
      margin: 1rem 0;
      max-width: 100%;
      overflow-y: auto;
      font-size: 0.85rem;
      border-radius: 10px;
      line-height: 1.3rem;
      color: ${({ theme }) => theme.primary.accent_200};
      background-color: ${({ theme }) => theme.primary.accent_700};
    }

    a {
      color: ${({ theme }) => theme.primary.accent_200};
      &:hover {
        color: ${({ theme }) => theme.primary.accent_400};
        background-color: ${({ theme }) => theme.primary.accent_0};
      }
    }

    p {
      margin: 1rem 0;
      font-size: 1rem;
      line-height: 1.7rem;
    }

  blockquote {
      > p {
        font-size: 1rem;
        font-style: oblique;
        color: ${({ theme }) => theme.primary.accent_300};
      }
      padding-left: 1rem;
      border-left: 2px solid ${({ theme }) => theme.primary.accent_400};
    }
  }

  ul,ol {
    margin-left: 24px;
    > li {
      padding-bottom: 5px;
    }


`
