import { useState, useEffect } from 'react';

export default function useSeason(obj) {
  const [season, setSeason] = useState([]);
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
          body: JSON.stringify(obj),
        });
        const data = await response.json();
        setSeason(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }

    loadSeason();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { season, isLoading };
}
