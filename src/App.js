import React from 'react';
import RootRouter from './router/RootRouter';
import startup from './startup';
import 'normalize.css';
import './styles/index.scss';

startup();

const App = () => <RootRouter />;

export default App;
