import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (sessionStorage.getItem('session') === null) {
            return <Redirect to='*' />
          } else {
            return <Component {...props} />
          }
        }}
      />
    </>
  )
}

export default PrivateRoute
