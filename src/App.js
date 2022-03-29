import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

const {
  REACT_APP_API_BASE_SERIES_URL,
  REACT_APP_API_BASE_MOVIES_URL,
  REACT_APP_API_KEY,
  REACT_APP_API_LANGUAGE,
} = process.env;

const popularSeriesUrl = `${REACT_APP_API_BASE_SERIES_URL}/popular?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_API_LANGUAGE}`;
const popularMoviesUrl = `${REACT_APP_API_BASE_MOVIES_URL}/popular?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_API_LANGUAGE}&region=DE`;

export default function App() {
  const [popularSeries, setPopularSeries] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function loadPopularSeries() {
      try {
        const response = await fetch(popularSeriesUrl);
        const data = await response.json();
        setPopularSeries(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    loadPopularSeries();
  }, []);

  useEffect(() => {
    async function loadPopularMovies() {
      try {
        const response = await fetch(popularMoviesUrl);
        const data = await response.json();
        setPopularMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    loadPopularMovies();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home popularSeries={popularSeries} popularMovies={popularMovies} />
          }
        />
      </Routes>
    </>
  );
}
