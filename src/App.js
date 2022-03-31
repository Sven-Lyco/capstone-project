import { Routes, Route } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';
import SeriesDetailsPage from './pages/SeriesDetailsPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

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
  const { data: popularSeries } = useFetch(popularSeriesUrl);
  const { data: topRatedSeries } = useFetch(topRatedSeriesUrl);
  const { data: seriesOnTv } = useFetch(seriesOnTvUrl);
  const { data: popularMovies } = useFetch(popularMoviesUrl);
  const { data: moviesOnCinema } = useFetch(moviesOnCinemaUrl);
  const { data: upcomingMovies } = useFetch(upcomingMoviesUrl);

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
        <Route path="serie/:id" element={<SeriesDetailsPage />} />
        <Route path="film/:id" element={<MovieDetailsPage />} />
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
    </>
  );
}
