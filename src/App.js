import React from 'react';
import { ToastContainer } from 'react-toastify';
import LoadingOverlay from './components/common/LoadingOverlay';
import RootRouter from './router/RootRouter';
import startup from './startup';
import 'normalize.css';
import './styles/index.scss';
import DB from './db';

startup();

const useLoadDb = () => {
  const [dbLoaded, setDbLoaded] = React.useState(false);
  React.useEffect(() => {
    const offInit = DB.onInit((result) => {
      if (!result.success) {
        // eslint-disable-next-line no-alert
        alert(`Error loading app. It looks like your device is not supported. (${result.error})`);
        console.log(result);
      } else {
        setDbLoaded(true);
      }
    });
    return offInit;
  }, []);

  return dbLoaded;
};

const App = () => {
  const dbLoaded = useLoadDb();
  if (!dbLoaded) return <LoadingOverlay />;
  return (
    <>
      <RootRouter />
      <ToastContainer />
    </>
  );
};

export default App;
