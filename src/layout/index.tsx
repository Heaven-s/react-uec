import React, { useEffect, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './index.scss';
import routes from '../router'
import Menu from './menu';
import Navbar from './navbar';

function RouteWithSubRoutes(route: any) {
  
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

  useEffect(() => {
  })

  return (
    <Router>
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
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))}
              </Switch>
            </Suspense>
            {/* <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch> */}
          </div>
        </section>
      </main>
    </Router>
  );
}

export default Page;
