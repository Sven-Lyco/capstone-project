import { useState, useEffect } from 'react';

export default function useMovieDetails(id) {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const [movieWatchProviders, setMovieWatchProviders] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState([]);
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
          body: JSON.stringify(id),
        });
        const data = await response.json();
        setMovieDetails(data.movieDetails);
        setMovieCast(data.movieCredits.cast);
        setMovieWatchProviders(data.movieWatchProviders.results.DE);
        setSimilarMovies(data.similarMovies.results);
        setMovieTrailer(data.movieTrailer.results);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    loadMovieDetails();
  }, [id]);
  return {
    movieTrailer,
    similarMovies,
    movieWatchProviders,
    movieCast,
    movieDetails,
    isLoading,
  };
}
