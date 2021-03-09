import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { SidebarContextProvider } from './contexts/SidebarContext';
import RootRouter from './router/RootRouter';
import startup from './startup';
import apolloClient from './graphql/apollo';
import 'normalize.css';
import './styles/index.scss';

startup();

const App = () => (
  <ApolloProvider client={apolloClient}>
    <SidebarContextProvider>
      <RootRouter />
    </SidebarContextProvider>
  </ApolloProvider>
);

export default App;
