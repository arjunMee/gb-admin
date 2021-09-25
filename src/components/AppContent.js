import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
// import { ProtectedRoute } from './protected.route'
import auth from 'src/auth'

// routes config
import routes from '../routes'

const AppContent = () => {
  const profile = useSelector((state) => state.dashboardState.authenticated)

  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {/* <ProtectedRoute exact path="/app" component={AppLayout} /> */}

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
