import Home from '../pages/home'
import Page404 from '../pages/page404';
import { ROUTE } from '../pages/routes';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <>
        <div>React app</div>
        <div className={'switch__container'}>
          <Switch>
            <Route exact path={ROUTE.ROOT}>
              <div>ROOT</div>
            </Route>
            <Route path={ROUTE.HOME}>
              <Home />
            </Route>
            <Route path={ROUTE.ERROR}>
              <Page404 />
            </Route>
          </Switch>
        </div>

      </>
    </Router>
  );
}

export { App };