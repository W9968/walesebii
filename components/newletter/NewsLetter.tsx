import React from 'react'
import Wrapper from 'shared/Wrapper'
import {
  NewsContainer,
  StyledHeader,
  StyledParag,
} from 'styles/newletter.module'

const NewsLetter = () => {
  return (
    <Wrapper background='w'>
      <NewsContainer>
        <StyledHeader>Shall I keep you in the loop?</StyledHeader>
        <StyledParag>
          Content includes articles early access to products and ongoing
          learnings.
        </StyledParag>
      </NewsContainer>
    </Wrapper>
  )
}

export default NewsLetter
