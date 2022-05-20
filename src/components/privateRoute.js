import { Route, Redirect } from 'react-router-dom'

export function PrivateRoute ({ children, ...rest}) {
  return (
    <Route
      {...rest}
      render = {({ location }) => 
        localStorage.getItem('access_token') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export function PrivateLoginRoute ({ children, ...rest}) {
  return (
    <Route
      {...rest}
      render = {({ location }) => 
        !localStorage.getItem('access_token') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}