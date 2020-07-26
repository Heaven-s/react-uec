import React, { useEffect, useState, useReducer } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-component-keepalive'
import { StoreProvider } from 'store'

import './index.scss'
import routes from 'router'
import Menu from './menu'
import Navbar from './navbar'

import reducer from 'context/reducer'

export const FetContext = React.createContext(null)

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

function Page(props) {
  const [keepAliveList] = useState(['permission-account', 'permission-role'])

  useEffect(() => {})

  console.log('props', props)

  const [state, dispatch] = useReducer(reducer, { index: 1 })

  return (
    <StoreProvider>
      <Router>
        <Provider include={keepAliveList}>
          <main className="wrapper">
            <header className="header">
              <h1>
                <span className="logo">
                  <img
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                  />
                  Ant Design {state.index || '--'}
                </span>
              </h1>
            </header>
            <section className="main">
              <Menu />
              <div className="content">
                <Navbar />
                <FetContext.Provider value={dispatch}>
                  <Switch>
                    {routes.map((route, i) => (
                      <RouteWithSubRoutes key={i} {...route} />
                    ))}
                  </Switch>
                </FetContext.Provider>
              </div>
            </section>
          </main>
        </Provider>
      </Router>
    </StoreProvider>
  )
}

export default Page
