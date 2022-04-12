import { useState, useEffect } from 'react';

export default function useSeriesDetails(id) {
  const [seriesDetails, setSeriesDetails] = useState([]);
  const [seriesCast, setSeriesCast] = useState([]);
  const [seriesWatchProviders, setSeriesWatchProviders] = useState([]);
  const [similarSeries, setSimilarSeries] = useState([]);
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
          body: JSON.stringify(id),
        });
        const data = await response.json();
        setSeriesDetails(data.seriesDetails);
        setSeriesCast(data.seriesCredits.cast);
        setSeriesWatchProviders(data.seriesWatchProviders.results.DE);
        setSimilarSeries(data.similarSeries.results);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    loadSeriesDetails();
  }, [id]);
  return {
    similarSeries,
    seriesWatchProviders,
    seriesCast,
    seriesDetails,
    isLoading,
  };
}
