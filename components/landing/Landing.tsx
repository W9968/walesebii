import { FC, Children } from 'react'
import { useTrail, a } from '@react-spring/web'
import {
  Heading,
  LandingContainer,
  Title,
  TrailText,
} from 'styles/landing.module'

const Trail: FC<{ open: boolean }> = ({ open, children }) => {
  const items = Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 4000, friction: 400 },
    opacity: open ? 1 : 0,
    y: open ? 0 : 32,
    height: open ? 110 : 0,
    from: { opacity: 0, y: 32, height: 0 },
  })

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <TrailText key={index} style={style}>
          <a.span style={{ height }}>{items[index]}</a.span>
          <span> </span>
        </TrailText>
      ))}
    </div>
  )
}

const Landing: FC = () => {
  return (
    <LandingContainer>
      <Title>
        <Heading>
          <Trail open={true}>
            <span>meet your next</span>
            <span>
              <span className='animated'>creative</span> developer.
            </span>
          </Trail>
        </Heading>
      </Title>
    </LandingContainer>
  )
}

export default Landing
