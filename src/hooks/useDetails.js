import { useState, useEffect } from 'react';

export default function useDetails(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function loadData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    loadData();
  }, [url]);
  return { data, isLoading };
}
