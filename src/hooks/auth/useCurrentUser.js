/*
  A hook to fetch current user
  Add extra props to the currentUser fragment when you need it
*/
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const CURRENT_USER_FRAGMENT = gql`
  fragment currentUser on User {
    _id
  }
`;

export const CURRENT_USER_QUERY = gql`
  query me {
    me {
      ...currentUser
    }
  }
  ${CURRENT_USER_FRAGMENT}
`;

export default function useCurrentUser() {
  const { loading, error, data, refetch } = useQuery(CURRENT_USER_QUERY);
  return [data?.me, loading, error, refetch];
}
