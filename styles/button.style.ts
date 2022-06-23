import styled from 'styled-components'

export const StyledIconButton = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.primary.accent_600};

  & > * {
    margin: 0;
    padding: 0;
    display: flex;
    text-decoration: none;
  }
`
