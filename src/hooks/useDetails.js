import { useState, useEffect } from 'react';

export default function useDetails(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, [url]);
  return { data };
}
