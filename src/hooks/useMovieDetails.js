import { useState, useEffect } from 'react';

export default function useMovieDetails(obj) {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
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
        setMovieDetails(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    loadMovieDetails();

    async function loadMovieCredits() {
      try {
        const response = await fetch('/api/getMovieCredits/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj),
        });
        const data = await response.json();
        setMovieCast(data.cast);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    loadMovieCredits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { movieCast, movieDetails, isLoading };
}
