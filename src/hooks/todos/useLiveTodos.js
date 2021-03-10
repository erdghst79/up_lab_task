import React from 'react';
import TodoDataService from 'services/TodoDataService';
import _ from 'lodash';

const fetchDataByStatus = ({ status, categoryId }) => {
  let todos = [];
  switch (status) {
    case 'close':
      todos = TodoDataService.getClose({ categoryId });
      break;
    case 'open':
      todos = TodoDataService.getOpen({ categoryId });
      break;
    case 'all':
      todos = TodoDataService.getAll({ categoryId });
      break;
    default:
      todos = TodoDataService.getOpen({ categoryId });
  }

  return _.orderBy(todos, '_createdAt', 'desc');
};
export default function useLiveTodos({ status, categoryId }) {
  const [data, setData] = React.useState(() => fetchDataByStatus({ status, categoryId }));
  const paramsRef = React.useRef({ status, categoryId });

  React.useEffect(() => {
    paramsRef.current = { status, categoryId };
    setData(fetchDataByStatus({ status, categoryId }));
  }, [status, categoryId]);

  React.useEffect(() => {
    const clearListener = TodoDataService.listenChanges(() => setData(fetchDataByStatus(paramsRef.current)));
    return clearListener;
  }, []);

  return data;
}
