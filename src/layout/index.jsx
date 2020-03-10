import React, { useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Provider
} from 'react-component-keepalive';

import './index.scss';
import routes from 'router'
import Menu from './menu';
import Navbar from './navbar';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
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
