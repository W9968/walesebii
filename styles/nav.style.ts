import styled from 'styled-components'

export const StyledNav = styled.div`
  display: flex;
  padding-top: 1rem;
  align-items: center;
  flex-direction: row;
  padding-bottom: 4rem;
  justify-content: space-between;

  @media (max-width: 600px) {
    padding-bottom: 2.5rem;
  }
`

export const StyledLinks = styled.div``

export const StyledNavigationButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  margin-right: 1.5rem;
  border-radius: 5px;
  transition: 200ms ease-in-out;

  &:hover {
    & > p {
      color: ${({ theme }) => theme.primary.accent_100};
    }
  }
`
