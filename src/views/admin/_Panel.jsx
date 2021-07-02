import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import { BiCog, BiBookAlt, BiCustomize } from 'react-icons/bi'

import Posts from './nested/posts/Posts'
import Project from './nested/project/Project'
import MenuItem from '../../components/Menu/MenuItem'

const _Panel = () => {
  return (
    <>
      <Wrapper>
        <Switch>
          <Route path='/panel/posts' component={Posts} />
          <Route path='/panel/project' component={Project} />
          <Route exact path='/panel/'>
            <Title>panel</Title>
            <Div>
              <MenuItem
                svg={<BiBookAlt />}
                link='/panel/posts'
                path='Manage Posts'
                command={<BiCog style={{ fontSize: '100%' }} />}
              />
              <MenuItem
                svg={<BiCustomize />}
                link='/panel/project'
                path='Manage Projects'
                command={<BiCog style={{ fontSize: '100%' }} />}
              />
            </Div>
          </Route>
        </Switch>
      </Wrapper>
    </>
  )
}

export default _Panel

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: capitalize;
`

const Div = styled.div`
  margin: 1rem 0;
`
