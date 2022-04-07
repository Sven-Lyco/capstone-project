import { useState, useEffect } from 'react';

export default function useSeriesDetails(obj) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function loadData() {
      try {
        const response = await fetch('/api/getSeriesDetails/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj),
        });
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { data, isLoading };
}
