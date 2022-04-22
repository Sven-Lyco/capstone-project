import { useState, useEffect } from 'react';

export default function useSeries() {
  const [popularSeries, setPopularSeries] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [seriesOnTv, setSeriesOnTv] = useState([]);

  useEffect(() => {
    async function loadSeries() {
      try {
        const response = await fetch('/api/getSeries/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(),
        });
        const data = await response.json();
        setPopularSeries(data.popularSeries.results);
        setTopRatedSeries(data.topRatedSeries.results);
        setSeriesOnTv(data.seriesOnTv.results);
      } catch (error) {
        console.error(error);
      }
    }
    loadSeries();
  }, []);

  return {
    popularSeries,
    topRatedSeries,
    seriesOnTv,
  };
}
