/* eslint-disable react/no-children-prop */
import { Switch, Route } from 'react-router-dom';
import React from 'react';
// import useCurrentUser from 'hooks/auth/useCurrentUser';
import AppLayout from 'components/layouts/AppLayout';
import TodoList from 'pages/TodoList';
import NotFound from 'pages/NotFound';
import ScrollToTop from 'components/common/ScrollToTop';
import routePaths from './route-paths';

const routes = [
  {
    path: routePaths.home,
    component: TodoList,
  },
];

const AppRouter = () => {
  return (
    <AppLayout>
      <ScrollToTop />
      <Switch>
        {routes.map(({ path, component, ...rest }) => (
          <Route key={path} path={path} component={component} exact {...rest} />
        ))}
        <Route path="*" component={NotFound} />
      </Switch>
    </AppLayout>
  );
};

export default AppRouter;
