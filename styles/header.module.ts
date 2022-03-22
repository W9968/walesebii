import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 1200px;
  display: flex;
  padding-top: 3rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1240px) {
    width: 100%;
  }
`

export const NavigationListContainer = styled.div``

export const NavigationLink = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  font-weight: 500;
  padding: 10px 18px;
  border-radius: 12px;
  display: inline-block;
  letter-spacing: 0.5px;
  text-decoration: none;
  text-transform: capitalize;
  transition: 300ms ease-in-out;
  font-size: ${({ theme }) => theme.units._16};
  color: ${({ theme }) => theme.scheme.background};

  &:hover {
    background: #eaeaea;
  }
`
