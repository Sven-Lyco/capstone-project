import { useState, useEffect } from 'react';

export default function useSeriesDetails(id) {
  const [seriesDetails, setSeriesDetails] = useState([]);
  const [seriesCast, setSeriesCast] = useState([]);
  const [seriesWatchProviders, setSeriesWatchProviders] = useState([]);
  const [similarSeries, setSimilarSeries] = useState([]);
  const [seriesTrailer, setSeriesTrailer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const seriesTrailerUrl = seriesTrailer
    .filter(
      video =>
        video.site === 'YouTube' &&
        (video.type === 'Trailer' || video.type === 'Teaser') &&
        video.size >= 720
    )
    ?.map(video => `https://www.youtube.com/watch?v=${video.key}wowK7ADGRsQ`);

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
        setSeriesTrailer(data.seriesTrailer.results);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    loadSeriesDetails();
  }, [id]);
  return {
    seriesTrailerUrl,
    similarSeries,
    seriesWatchProviders,
    seriesCast,
    seriesDetails,
    isLoading,
  };
}
