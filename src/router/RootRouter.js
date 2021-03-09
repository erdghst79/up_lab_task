import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingOverlay from 'components/common/LoadingOverlay';
import AppRouter from './AppRouter';
import AuthRouter from './AuthRouter';
import useCurrentUser from '../hooks/auth/useCurrentUser';

const RootRouter = ({ children }) => {
  const [user, loading] = useCurrentUser();

  if (loading && !user) {
    return <LoadingOverlay />;
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      {children} {user ? <AppRouter /> : <AuthRouter />}
    </Router>
  );
};

export default RootRouter;
