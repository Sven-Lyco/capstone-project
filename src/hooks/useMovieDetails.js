import { useState, useEffect } from 'react';

export default function useMovieDetails(id) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function loadData() {
      try {
        const response = await fetch('/api/getMovieDetails/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(id),
        });
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    loadData();
  }, [id]);
  return { data, isLoading };
}
