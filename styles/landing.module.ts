import styled, { keyframes, Keyframes } from 'styled-components'
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

const gradient = keyframes`
  0% { background-position: 0% 50%;  }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
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
      90deg,
      #a0e9ff 30%,
      #a162e8 50%,
      #f093b0 70%,
      #edca85 94%
    );
    background-size: 150% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradient} 10s ease infinite;
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
