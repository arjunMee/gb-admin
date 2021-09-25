import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from './auth'
import PropTypes from 'prop-types'

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      }}
    />
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.any,
}
