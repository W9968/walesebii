import styled from 'styled-components'
import { a } from '@react-spring/web'

export const LandingContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.div`
  margin-top: -16%;
  display: flex;
`

export const Heading = styled.div`
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  -moz-user-select: none;
  -webkit-user-select: none;

  & .animated {
    background-clip: text;
    background: linear-gradient(
      271deg,
      #a0e9ff 30%,
      #a162e8 50%,
      #f093b0 70%,
      #edca85 94%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
`

export const TrailText = styled(a.div)`
  width: 100%;
  font-size: 9vh;
  font-weight: 700;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-transform: capitalize;
  will-change: transform, opacity;

  > span {
    overflow: hidden;
  }
`
