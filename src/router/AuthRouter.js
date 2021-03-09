import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthLayout from 'components/layouts/AuthLayout';
import Login from 'pages/auth/Login';
import ScrollToTop from 'components/common/ScrollToTop';
import routePaths from './route-paths';

export const authRoutes = [
  {
    path: routePaths.login,
    component: Login,
  },
];

const AuthRouter = () => (
  <AuthLayout>
    <ScrollToTop />
    <Switch>
      {authRoutes.map(({ path, component, ...rest }) => (
        <Route key={path} path={path} component={component} exact {...rest} />
      ))}
      <Route render={() => <Redirect to={routePaths.login} />} />
    </Switch>
  </AuthLayout>
);

export default AuthRouter;
