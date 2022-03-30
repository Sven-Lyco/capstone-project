import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, [url]);
  return { data };
}
