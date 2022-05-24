import { useState, useEffect } from 'react';

export default function useSeasonDetails(url) {
  const [seasonDetails, setSeasonDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function loadSeason() {
      try {
        const response = await fetch('/api/getSeason/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(url),
        });
        const data = await response.json();
        setSeasonDetails(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    loadSeason();
  }, [url]);

  return { seasonDetails, isLoading };
}
