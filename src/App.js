import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';

const {
  REACT_APP_API_BASE_SERIES_URL,
  REACT_APP_API_BASE_MOVIES_URL,
  REACT_APP_API_KEY,
  REACT_APP_API_LANGUAGE,
} = process.env;

const popularSeriesUrl = `${REACT_APP_API_BASE_SERIES_URL}/popular?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_API_LANGUAGE}`;
const topRatedSeriesUrl = `${REACT_APP_API_BASE_SERIES_URL}/top_rated?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_API_LANGUAGE}`;
const seriesOnTvUrl = `${REACT_APP_API_BASE_SERIES_URL}/on_the_air?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_API_LANGUAGE}`;
const popularMoviesUrl = `${REACT_APP_API_BASE_MOVIES_URL}/popular?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_API_LANGUAGE}&region=DE`;
const moviesOnCinemaUrl = `${REACT_APP_API_BASE_MOVIES_URL}/now_playing?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_API_LANGUAGE}&region=DE`;
const upcomingMoviesUrl = `${REACT_APP_API_BASE_MOVIES_URL}/upcoming?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_API_LANGUAGE}&region=DE`;

export default function App() {
  const [popularSeries, setPopularSeries] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [seriesOnTv, setSeriesOnTv] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [moviesOnCinema, setMoviesOnCinema] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

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
    async function loadTopRatedSeries() {
      try {
        const response = await fetch(topRatedSeriesUrl);
        const data = await response.json();
        setTopRatedSeries(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    loadTopRatedSeries();
  }, []);

  useEffect(() => {
    async function loadSeriesOnTv() {
      try {
        const response = await fetch(seriesOnTvUrl);
        const data = await response.json();
        setSeriesOnTv(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    loadSeriesOnTv();
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

  useEffect(() => {
    async function loadMoviesOnCinema() {
      try {
        const response = await fetch(moviesOnCinemaUrl);
        const data = await response.json();
        setMoviesOnCinema(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    loadMoviesOnCinema();
  }, []);

  useEffect(() => {
    async function loadUpComingMovies() {
      try {
        const response = await fetch(upcomingMoviesUrl);
        const data = await response.json();
        setUpcomingMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    loadUpComingMovies();
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
        <Route
          path="/serien"
          element={
            <Series
              popularSeries={popularSeries}
              topRatedSeries={topRatedSeries}
              seriesOnTv={seriesOnTv}
            />
          }
        />
        <Route
          path="/filme"
          element={
            <Movies
              popularMovies={popularMovies}
              moviesOnCinema={moviesOnCinema}
              upcomingMovies={upcomingMovies}
            />
          }
        />
      </Routes>
      <Navigation />
    </>
  );
}
