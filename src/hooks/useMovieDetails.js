import { useState, useEffect } from 'react';

export default function useMovieDetails(obj) {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const [movieWatchProviders, setMovieWatchProviders] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function loadMovieDetails() {
      try {
        const response = await fetch('/api/getMovieDetails/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj),
        });
        const data = await response.json();
        setMovieDetails(data.movieDetails);
        setMovieCast(data.movieCredits.cast);
        setMovieWatchProviders(data.movieWatchProviders.results.DE);
        setSimilarMovies(data.similarMovies.results);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    loadMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    similarMovies,
    movieWatchProviders,
    movieCast,
    movieDetails,
    isLoading,
  };
}
