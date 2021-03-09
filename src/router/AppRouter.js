/* eslint-disable react/no-children-prop */
import { Switch, Route } from 'react-router-dom';
import React from 'react';
// import useCurrentUser from 'hooks/auth/useCurrentUser';
import AuthLayout from 'components/layouts/AuthLayout';
import AppLayout from 'components/layouts/AppLayout';
import Home from 'pages/app/Home';
import NotFound from 'pages/NotFound';
import ScrollToTop from 'components/common/ScrollToTop';
import routePaths from './route-paths';
import { authRoutes } from './AuthRouter';

const routes = [
  {
    path: routePaths.home,
    component: Home,
  },
];

const AppRouter = () => {
  // const [me] = useCurrentUser();
  // const emailVerified = get(me, 'verified');
  return (
    <Switch>
      {/* {!emailVerified && (
        <Route path={routePaths.activateAccount} exact>
          <ActivateAccount />
        </Route>
      )} */}
      {/* {!emailVerified && <Redirect to={routePaths.activateAccount} />} */}
      <Route path="/secure/:path?">
        <AppLayout>
          <ScrollToTop />
          <Switch>
            {routes.map(({ path, component, ...rest }) => (
              <Route key={path} path={path} component={component} exact {...rest} />
            ))}
            <Route path="*" component={NotFound} />
          </Switch>
        </AppLayout>
      </Route>

      <Route>
        <AuthLayout>
          <Switch>
            {authRoutes.map(({ path, component, ...rest }) => (
              <Route key={path} path={path} component={component} exact {...rest} />
            ))}
            <Route path="*" component={NotFound} />
          </Switch>
        </AuthLayout>
      </Route>
    </Switch>
  );
};

export default AppRouter;
