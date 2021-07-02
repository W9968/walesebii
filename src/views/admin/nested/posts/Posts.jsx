import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useHistory, Switch, Route } from 'react-router'

import { VscEye } from 'react-icons/vsc'
import { BiArrowBack, BiEdit, BiTrash } from 'react-icons/bi'
import useFetch from '../../../../hooks/useFetch'

import AddPost from './CRUD/AddPost'
import EditPost from './CRUD/EditPost'

const Posts = () => {
  const history = useHistory()
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    useFetch.get('posts').then((response) => setData(response.data))
  })

  return (
    <>
      <Wrapper>
        <Backer>
          <Title>Manage posts</Title>
          <GoBack onClick={() => history.goBack()} whileTap={{ scale: 0.8 }}>
            <BiArrowBack />
          </GoBack>
        </Backer>
        <Switch>
          <Route path='/panel/posts/add' component={AddPost} />
          <Route path='/panel/posts/edit/:id' component={EditPost} />
          <Route exact path='/panel/posts'>
            <AddButton onClick={() => history.push('/panel/posts/add')}>
              add new post
            </AddButton>
            {data.map((el) => {
              return (
                <Card key={el._id}>
                  <HeadingTitle>{el.blogTitle}</HeadingTitle>
                  <Parag>{el.blogdesc}</Parag>
                  <Action>
                    <GoBack whileTap={{ scale: 0.8 }}>
                      <VscEye />
                    </GoBack>
                    <GoBack
                      whileTap={{ scale: 0.8 }}
                      onClick={() =>
                        history.push(`/panel/posts/edit/${el._id}`)
                      }>
                      <BiEdit />
                    </GoBack>
                    <GoBack
                      whileTap={{ scale: 0.8 }}
                      onClick={() => useFetch.delete(`/posts/${el._id}`)}>
                      <BiTrash />
                    </GoBack>
                  </Action>
                </Card>
              )
            })}
          </Route>
        </Switch>
      </Wrapper>
    </>
  )
}

export default Posts

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Backer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: space-between;
`

const GoBack = styled(motion.button)`
  border: none;
  outline: none;
  display: flex;
  padding: 10px;
  background: none;
  font-size: 1.225rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.hover} 0px 0px 1rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: capitalize;
`

const AddButton = styled.button`
  border: none;
  outline: none;
  padding: 15px;
  font-size: 1.125rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.hover};
`

const Card = styled.div`
  padding: 1rem 0;
  border-top: 1px solid ${({ theme }) => theme.hover};
`

const HeadingTitle = styled.h2`
  text-transform: capitalize;
  margin-bottom: 0.826rem;
`
const Parag = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.lightText};
`

const Action = styled.div`
  width: 150px;
  display: flex;
  margin-top: 1rem;
  flex-direction: row;
  justify-content: space-between;
`
