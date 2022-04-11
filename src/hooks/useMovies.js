import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function useSeries() {
  const { data: popularMovies, error: popularMoviesError } = useSWR(
    '/api/getPopularMovies',
    fetcher
  );
  const { data: moviesOnCinema, error: moviesOnCinemaError } = useSWR(
    '/api/getMoviesOnCinema',
    fetcher
  );

  return {
    popularMovies,
    moviesOnCinema,
    popularMoviesError,
    moviesOnCinemaError,
  };
}
