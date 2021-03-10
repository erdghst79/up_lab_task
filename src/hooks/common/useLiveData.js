import React from 'react';

export default function useLiveData({ listen, getData }) {
  const [data, setData] = React.useState(() => getData());
  React.useEffect(() => {
    setData(getData);
  }, [getData]);
  React.useEffect(() => {
    const clearListener = listen(() => setData(getData()));
    return clearListener;
  }, [getData, listen]);

  return data;
}
