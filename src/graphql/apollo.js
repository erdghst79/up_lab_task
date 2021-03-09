/* eslint-disable no-console */
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import isEmpty from 'lodash/isEmpty';
import settings from '../config/settings';
import introspectionQueryResultData from './fragment-types.json';

const fragmentMatcher = isEmpty(introspectionQueryResultData)
  ? undefined
  : new IntrospectionFragmentMatcher({
      introspectionQueryResultData,
    });

const link = ApolloLink.from([
  setContext((_, { headers }) => {
    // const token = TokenManager.getToken();
    // if (token) {
    //   const authHeaders = {};
    //   return { headers: { ...headers, ...authHeaders } };
    // }
    return { headers };
  }),
  onError(({ graphQLErrors, networkError, response }) => {
    const code = response?.errors[0]?.extensions?.code;
    if (code === 'UNAUTHENTICATED') {
      window.location.replace(window.location.origin);
    }
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  }),
  new HttpLink({
    uri: settings.graphqlServerUrl,
    credentials: 'include',
  }),
]);

const cacheIndexBlacklist = [];

const client = new ApolloClient({
  // request: operation => {
  //   const token = TokenManager.getToken();
  //   console.log(token);
  //   if (token) {
  //     const headers = { Authorization: `Bearer ${token}` };
  //     operation.setContext({ headers });
  //   }
  // },
  link,
  cache: new InMemoryCache({
    fragmentMatcher,
    freezeResults: true, // new
    dataIdFromObject: ({ _id, __typename }) => {
      if (cacheIndexBlacklist.includes(__typename)) return null;
      return _id ? `${__typename}___${_id}` : null;
    },
  }),
  assumeImmutableResults: true, // new
});

export default client;
