import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ControlledRoute = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (JSON.parse(sessionStorage.getItem('session'))) {
            return <Redirect to='/panel' />
          } else {
            return <Component {...props} />
          }
        }}
      />
    </>
  )
}

export default ControlledRoute
