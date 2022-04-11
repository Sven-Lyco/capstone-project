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
  const { data: seriesOnTv, error: seriesOnTvError } = useSWR(
    '/api/getSeriesOnTv',
    fetcher
  );
  return {
    popularSeries,
    topRatedSeries,
    seriesOnTv,
    popularSeriesError,
    topRatedSeriesError,
    seriesOnTvError,
  };
}
