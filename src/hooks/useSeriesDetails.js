import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function useSeriesDetails(id) {
  const { data: series, error: seriesError } = useSWR(
    `/api/getSeriesDetails/:id`,
    fetcher
  );
  console.log(id);
  return { series, seriesError };
}
