import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.units._16};
  background: ${({ theme }) => theme.scheme.accent_1};
`

export const PreviewContainer = styled.div`
  flex: 1;
  width: 800px;
  margin-top: 82px;

  @media (max-width: 850px) {
    width: 100%;
  }

  > div {
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
      line-height: 1.3rem;
      border-radius: 12px;
      color: ${({ theme }) => theme.scheme.accent_1};
      background-color: ${({ theme }) => theme.scheme.background};
    }

    a {
      color: ${({ theme }) => theme.scheme.accent_2};
      &:hover {
        background-color: ${({ theme }) => theme.scheme.dominant};
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
      }
      padding-left: 1rem;
      border-left: 5px solid ${({ theme }) => theme.scheme.accent_2};
    }
  }

  ul,
  ol {
    margin-left: 24px;
    > li {
      padding-bottom: 5px;
    }
  }
`

export const Timer = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.125rem;
`

export const Title = styled.p`
  font-weight: 800;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.scheme.background};
`
