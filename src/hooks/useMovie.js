import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function useMovie() {
  const {
    data: watchedMovies,
    error: watchedMoviesError,
    mutate: mutateWatchedMovies,
  } = useSWR('/api/watchedMovies', fetcher);

  async function handleCheckMovie(movieId, title) {
    const watchedMovie = { movieId, title };
    const isOnList = watchedMovies.some(
      movie => movie.movieId === watchedMovie.movieId
    );

    if (isOnList) {
      const filteredItems = watchedMovies.filter(
        result => result.movieId !== movieId
      );
      mutateWatchedMovies(filteredItems, false);
      const filteredItem = watchedMovies.find(
        result => result.movieId === movieId
      );
      const deleteId = filteredItem._id;
      await fetch('/api/watchedMovies', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ deleteId }),
      });
      mutateWatchedMovies();
    }
    if (!isOnList) {
      mutateWatchedMovies([...watchedMovies, watchedMovie], false);
      await fetch('/api/watchedMovies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(watchedMovie),
      });
      mutateWatchedMovies();
    }
  }
  function checkIsMovieWatched(movieId) {
    const watchedMovie = { movieId };
    return watchedMovies?.some(movie => movie.movieId === watchedMovie.movieId);
  }
  return {
    watchedMoviesError,
    handleCheckMovie,
    checkIsMovieWatched,
  };
}
