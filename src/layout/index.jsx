import React, { useEffect, useState, Suspense } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Provider,
  KeepAlive
} from 'react-component-keepalive';

import './index.scss';
import routes from 'router'
import Menu from './menu';
import Navbar from './navbar';

function RouteWithSubRoutes(route) {
  const createRouteName = (path = '') => {
    if (path === '/') return 'home'
    return path.substring(1).replace(/\/:/g, '/').replace(/\//g, '-')
  }
  const name = createRouteName(route.path)
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <KeepAlive name={name}><route.component {...props} routes={route.routes} /></KeepAlive>
      )}
    />
  );
}

function Page() {
  const [keepAliveList] = useState(['permission-account'])

  useEffect(() => {
  })

  return (
    <Router>
      <Provider include={keepAliveList}> 
        <main className="wrapper">
          <header className="header">
            <h1>
              <span className="logo">
                <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />Ant Design
              </span>
            </h1>
          </header>
          <section className="main">
            <Menu />
            <div className="content">
              <Navbar />
              {/* <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                  ))}
                </Switch>
              </Suspense> */}
              <Switch>
                {routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))}
              </Switch>
            </div>
          </section>
        </main>
      </Provider>
    </Router>
  );
}

export default Page;
