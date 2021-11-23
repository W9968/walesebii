import styled from 'styled-components'

export const SwitchToggleTheme = styled.button`
  border: none;
  padding: 8px;
  display: flex;
  outline: none;
  font-size: 20px;
  cursor: pointer;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.scheme.text};
  border-radius: ${(props) => props.theme.units._14};
  background-color: ${(props) => props.theme.scheme.body};
`
