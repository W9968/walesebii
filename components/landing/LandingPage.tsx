import { FC } from 'react'
import Wrapper from 'shared/Wrapper'
import Navigation from 'shared/Navigation'
import { Container, Title } from 'styles/landing.module'

const LandingPage: FC = () => {
  return (
    <Wrapper background='g'>
      <Navigation />
      <Container variants={animation} initial={'onMount'} animate={'mounted'}>
        <Title variants={variant}>meet your next</Title>
        <Title variants={variant}>
          <span className='animated'>creative</span> developer
        </Title>
      </Container>
    </Wrapper>
  )
}

export default LandingPage

const animation = {
  onMount: { opacity: 0 },
  mounted: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
}

const variant = {
  onMount: { opacity: 0, y: '24px' },
  mounted: { opacity: 1, y: 0 },
}
