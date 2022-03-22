import styled from 'styled-components'

type styledProps = {
  readonly bg: 'b' | 'g' | 'w'
}

const color =
  'linear-gradient(245deg,hsl(350deg 33% 93%) 0%,hsl(227deg 52% 94%) 33%,hsl(227deg 52% 94%) 67%,hsl(350deg 33% 93%) 100%)'

export const ContainerFluid = styled.main<styledProps>`
  background-attachment: fixed;
  background: ${({ theme, bg }) =>
    bg === 'b'
      ? theme.scheme.background
      : bg === 'w'
      ? theme.scheme.foreground
      : bg === 'g'
      ? color
      : theme.scheme.background};
`

export const Container = styled.section`
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.units._16};
`
