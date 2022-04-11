import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function useSeries() {
  const { data: popularSeries, error: popularSeriesError } = useSWR(
    '/api/getPopularSeries',
    fetcher
  );
  const { data: topRatedSeries, error: topRatedSeriesError } = useSWR(
    '/api/getTopRatedSeries',
    fetcher
  );
  return {
    popularSeries,
    topRatedSeries,
    popularSeriesError,
    topRatedSeriesError,
  };
}
