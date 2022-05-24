import useSWR from 'swr';
import { useState, useEffect } from 'react';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function useSeries() {
  const [popularSeries, setPopularSeries] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [seriesOnTv, setSeriesOnTv] = useState([]);
  const {
    data: watchedSeries,
    error: watchedSeriesError,
    mutate: mutateWatchedSeries,
  } = useSWR('/api/watchedSeries', fetcher);

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

  async function handleCheckSeries(seriesId, name) {
    const watchedSerie = { seriesId, name };
    const isOnList = watchedSeries.some(
      series => series.seriesId === watchedSerie.seriesId
    );

    if (isOnList) {
      const filteredItems = watchedSeries.filter(
        result => result.seriesId !== seriesId
      );
      mutateWatchedSeries(filteredItems, false);
      const filteredItem = watchedSeries.find(
        result => result.seriesId === seriesId
      );
      const deleteId = filteredItem._id;
      await fetch('/api/watchedSeries', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ deleteId }),
      });
      mutateWatchedSeries();
    }

    if (!isOnList) {
      mutateWatchedSeries([...watchedSeries, watchedSeries], false);
      await fetch('/api/watchedSeries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(watchedSerie),
      });
      mutateWatchedSeries();
    }
  }

  function checkIsSeriesWatched(seriesId) {
    const watchedSerie = { seriesId };
    return watchedSeries?.some(
      series => series.seriesId === watchedSerie.seriesId
    );
  }

  return {
    popularSeries,
    topRatedSeries,
    seriesOnTv,
    watchedSeriesError,
    handleCheckSeries,
    checkIsSeriesWatched,
  };
}
