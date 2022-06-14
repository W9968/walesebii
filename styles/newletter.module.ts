import styled from 'styled-components'

export const NewsContainer = styled.div`
  width: 1200px;
  min-height: 600px;

  @media (max-width: 1250px) {
    width: 80%;
  }
`

export const StyledHeader = styled.h1`
  letter-spacing: 1px;
  margin-bottom: 25px;
  font-size: ${({ theme }) => theme.units._36};
`

export const StyledParag = styled.p`
  width: 70%;
  font-size: ${({ theme }) => theme.units._18};
  color: ${({ theme }) => theme.scheme.accent_2};
`
