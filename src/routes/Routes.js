import React, { lazy } from "react";
import { PrivateRoute } from 'react-auth-kit'
import { Route, Switch } from 'react-router-dom'

import { _routes } from '../config/routes'

// import Home from '../pages/Home/Home'
// import Account from '../pages/Account/Account'
// import Login from '../pages/Login/Login'
// import Test from '../pages/Test/Test'
// import NotFound from '../pages/NotFound/NotFound'

// Lazy load page
const Home = lazy(() => import('../pages/Home/Home'));
const Account = lazy(() => import('../pages/Account/Account'));
const Login = lazy(() => import('../pages/Login/Login'));
const Test = lazy(() => import('../pages/Test/Test'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const Routes = () => {
    return (
        <Switch>
            <Route component={Home} path={_routes._home} exact />
            <Route component={Login} path={_routes._login} exact />
            <Route component={Test} path={_routes._test} exact />
            <PrivateRoute component={Account} path={_routes._account} loginPath={_routes._login} exact />
            <Route component={NotFound} />
        </Switch>
    )
}
