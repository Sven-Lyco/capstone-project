import { useState, useEffect } from 'react';
import { saveToLocal, loadFromLocal } from '../utils/localStorage';

export default function useMovie() {
  const [watchedMovies, setWatchedMovies] = useState(
    loadFromLocal('watchedMovies') ?? []
  );

  useEffect(() => {
    saveToLocal('watchedMovies', watchedMovies);
  }, [watchedMovies]);

  function handleCheckMovie(movieId) {
    const isOnList = watchedMovies.some(movie => movie === movieId);

    if (isOnList) {
      const indexToRemove = watchedMovies.findIndex(movie => movie === movieId);
      setWatchedMovies([
        ...watchedMovies.slice(0, indexToRemove),
        ...watchedMovies.slice(indexToRemove + 1),
      ]);
    } else {
      setWatchedMovies([...watchedMovies, movieId]);
    }
  }

  function checkIsMovieWatched(movieId) {
    return watchedMovies.some(movie => movie === movieId);
  }
  return { handleCheckMovie, checkIsMovieWatched };
}
