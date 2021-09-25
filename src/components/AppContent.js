import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import { useSelector } from 'react-redux'

// routes config
import routes from '../routes'

const AppContent = () => {
  const profile = useSelector((state) => state.dashboardState.authenticated)

  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => {
                    if (profile) {
                      return <route.component {...props} />
                    } else {
                      return (
                        <Redirect
                          to={{
                            pathname: '/login',
                          }}
                        />
                      )
                    }
                  }}
                />
              )
            )
          })}
          <Redirect from="/" to="/login" />
        </Switch>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
