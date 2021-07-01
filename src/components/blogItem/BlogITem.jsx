import React from 'react'
import styled from 'styled-components'

const BlogITem = ({ title, time, intro }) => {
  return (
    <>
      <Card>
        <Col>
          <Timing>{time}</Timing>
        </Col>
        <Col>
          <HeadLine>{title}</HeadLine>
          <Intro>{intro}</Intro>
        </Col>
      </Card>
    </>
  )
}

export default BlogITem

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
  align-items: flex-start;
  transition: 100ms ease-in-out;
  border-bottom: 2px solid ${({ theme }) => theme.hover};

  &:first-child {
    border-top: 2px solid ${({ theme }) => theme.hover};
  }

  &:hover {
    color: ${({ theme }) => theme.lightText};
  }
`

const Col = styled.div`
  padding: 1rem 0;

  &:last-child {
    flex: 1;
  }
`

const Timing = styled.p`
  flex-basis: 5rem;
  line-height: 38px;
  margin-right: 2rem;
  font-size: 1.125rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.lightText};
`

const HeadLine = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 0.625rem;
  text-transform: capitalize;
`

const Intro = styled.p`
  font-weight: 500;
  font-size: 1.125rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.lightText};
`
