import styled from 'styled-components'

export const Section = styled.section`
  ul {
    margin: 0px 20px;
  }
  .divider {
    height: 3px;
    width: 100px;
    margin: 48px auto;
    background: linear-gradient(-90deg, #ddd6f3, #faaca8);
  }
`

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: capitalize;
  /* gradient */
  background-clip: text;
  background: -webkit-linear-gradient(right, #ee0979 80%, #ff6a00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Paragraphe = styled.p`
  line-height: 36px;
  margin: 16px 0px;
  font-size: 1.225rem;
  letter-spacing: 0.25px;
`

export const Container = styled.a`
  width: 100%;
  display: flex;
  height: 300px;
  position: relative;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
`

export const Overly = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  transition: 300ms ease-in-out;
  :hover {
    opacity: 1;
    background: rgba(1, 1, 1, 0.5);
  }
  @media (max-width: 768px) {
    opacity: 1;
    background: rgba(1, 1, 1, 0.3);
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`

export const Title = styled.h1`
  color: #eaeaea;
  margin-bottom: 5px;
  font-size: 2.225rem;
  text-transform: capitalize;
`

export const Parag = styled.p`
  width: 100%;
  color: #eaeaea;
  overflow: hidden;
  font-size: 1.125rem;
  margin-bottom: 1rem;
  text-overflow: ellipsis;
`