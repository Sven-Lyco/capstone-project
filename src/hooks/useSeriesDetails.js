import { useState, useEffect } from 'react';

export default function useSeriesDetails(obj) {
  const [seriesDetails, setSeriesDetails] = useState([]);
  const [seriesCast, setSeriesCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function loadSeriesDetails() {
      try {
        const response = await fetch('/api/getSeriesDetails/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj),
        });
        const data = await response.json();
        setSeriesDetails(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    loadSeriesDetails();

    async function loadSeriesCredits() {
      try {
        const response = await fetch('/api/getSeriesCredits/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj),
        });
        const data = await response.json();
        setSeriesCast(data.cast);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    loadSeriesCredits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { seriesCast, seriesDetails, isLoading };
}
