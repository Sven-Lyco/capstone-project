import { useState, useEffect } from 'react';

export default function useMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [moviesOnCinema, setMoviesOnCinema] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const response = await fetch('/api/getMovies/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(),
        });
        const data = await response.json();
        setPopularMovies(data.popularMovies.results);
        setMoviesOnCinema(data.moviesOnCinema.results);
        setUpcomingMovies(data.upcomingMovies.results);
      } catch (error) {
        console.error(error);
      }
    }
    loadMovies();
  }, []);

  return {
    popularMovies,
    moviesOnCinema,
    upcomingMovies,
  };
}
