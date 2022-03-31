import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function loadData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    loadData();
  }, [url]);
  return { data, loading };
}
