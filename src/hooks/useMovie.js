import { useState, useEffect } from 'react';
import { saveToLocal, loadFromLocal } from '../utils/localStorage';

export default function useMovie() {
  const [watchedMovies, setWatchedMovies] = useState(
    loadFromLocal('watchedMovies') ?? []
  );

  useEffect(() => {
    saveToLocal('watchedMovies', watchedMovies);
  }, [watchedMovies]);

  function handleCheckMovie(movieId, title) {
    const watchedMovie = { movieId, title };
    const isOnList = watchedMovies.some(
      movie => movie.movieId === watchedMovie.movieId
    );

    if (isOnList) {
      const indexToRemove = watchedMovies.findIndex(
        movie => movie.movieId === watchedMovie.movieId
      );
      setWatchedMovies([
        ...watchedMovies.slice(0, indexToRemove),
        ...watchedMovies.slice(indexToRemove + 1),
      ]);
    } else {
      setWatchedMovies([...watchedMovies, watchedMovie]);
    }
  }

  function checkIsMovieWatched(movieId) {
    const watchedMovie = { movieId };
    return watchedMovies.some(movie => movie.movieId === watchedMovie.movieId);
  }
  return { handleCheckMovie, checkIsMovieWatched };
}
