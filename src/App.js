import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import ChildPage from './pages/ChildPage';
import Series from './pages/Series';
import Movies from './pages/Movies';
import SeriesDetailsPage from './pages/SeriesDetailsPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import SearchPage from './pages/SearchPage';
import NotFound from './pages/NotFound';
import useSeries from './hooks/useSeries';
import useMovies from './hooks/useMovies';
import LoadingSpinner from './components/LoadingSpinner';
import FetchError from './components/FetchError';

export default function App() {
  const [isAdult, setIsAdult] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const {
    popularSeries,
    topRatedSeries,
    seriesOnTv,
    popularSeriesError,
    topRatedSeriesError,
    seriesOnTvError,
  } = useSeries();

  const {
    popularMovies,
    moviesOnCinema,
    upcomingMovies,
    popularMoviesError,
    moviesOnCinemaError,
    upcomingMoviesError,
  } = useMovies();

  if (
    topRatedSeriesError &&
    popularSeriesError &&
    seriesOnTvError &&
    popularMoviesError &&
    moviesOnCinemaError &&
    upcomingMoviesError
  )
    return <FetchError />;

  return (
    <>
      {topRatedSeries &&
      popularSeries &&
      seriesOnTv &&
      popularMovies &&
      moviesOnCinema &&
      upcomingMovies ? (
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={
              <Home isAdult={isAdult} handleCheckIsAdult={handleCheckIsAdult} />
            }
          />
          <Route path="/child" element={<ChildPage />} />
          <Route
            path="/serien"
            element={
              <Series
                isAdult={isAdult}
                popularSeries={popularSeries.results}
                topRatedSeries={topRatedSeries.results}
                seriesOnTv={seriesOnTv.results}
              />
            }
          />
          <Route path="serie/:id" element={<SeriesDetailsPage />} />
          <Route path="film/:id" element={<MovieDetailsPage />} />
          <Route path="suche" element={<SearchPage isAdult={isAdult} />} />
          <Route
            path="/filme"
            element={
              <Movies
                isAdult={isAdult}
                popularMovies={popularMovies.results}
                moviesOnCinema={moviesOnCinema.results}
                upcomingMovies={upcomingMovies.results}
              />
            }
          />
        </Routes>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );

  function handleCheckIsAdult(age) {
    if (age > 17) {
      setIsAdult(true);
      navigate('./serien');
    } else {
      setIsAdult(false);
      navigate('./child');
    }
  }
}
