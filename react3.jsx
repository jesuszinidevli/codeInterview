import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(async () => {
    const response = await fetch('https://api.example.com/data');
    const result = await response.json();
    setData(result);
  }, []);

  return (
    <div>
      <h1>Data Fetcher</h1>
      {data ? <pre>{JSON.stringify(data)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default DataFetcher;
