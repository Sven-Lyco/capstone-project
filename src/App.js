import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import ChildPage from './pages/ChildPage';
import Series from './pages/Series';
import Movies from './pages/Movies';
import SeriesDetailsPage from './pages/SeriesDetailsPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import SearchPage from './pages/SearchPage';
import NotFound from './pages/NotFound';
import WatchlistPage from './pages/WatchlistPage';
import useSeries from './hooks/useSeries';
import useMovies from './hooks/useMovies';
import useWatchlist from './hooks/useWatchlist';
import useEpisodes from './hooks/useEpisodes';
import useIsAdult from './hooks/useIsAdult';
import LoadingSpinner from './components/LoadingSpinner';
import FetchError from './components/FetchError';
import Header from './components/Header';

export default function App() {
  const { handleCheckIsAdult } = useIsAdult();
  const { pathname } = useLocation();
  const {
    watchlist,
    checkIsOnWatchlist,
    handleDeleteItem,
    handleAddSeries,
    handleAddMovie,
  } = useWatchlist();
  const { checkIsEpisodeWatched, handleCheckEpisode } = useEpisodes();
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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

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
            element={<Home handleCheckIsAdult={handleCheckIsAdult} />}
          />
          <Route path="/child" element={<ChildPage />} />
          <Route
            path="/serien"
            element={
              <Series
                popularSeries={popularSeries.results}
                topRatedSeries={topRatedSeries.results}
                seriesOnTv={seriesOnTv.results}
              />
            }
          />
          <Route
            path="serie/:id"
            element={
              <SeriesDetailsPage
                onHandleAddSeries={handleAddSeries}
                checkIsOnWatchlist={checkIsOnWatchlist}
                onHandleDeleteItem={handleDeleteItem}
                handleCheckEpisode={handleCheckEpisode}
                isEpisodeWatched={checkIsEpisodeWatched}
              />
            }
          />
          <Route
            path="film/:id"
            element={
              <MovieDetailsPage
                onHandleAddMovie={handleAddMovie}
                checkIsOnWatchlist={checkIsOnWatchlist}
                onHandleDeleteItem={handleDeleteItem}
              />
            }
          />
          <Route
            path="/filme"
            element={
              <Movies
                popularMovies={popularMovies.results}
                moviesOnCinema={moviesOnCinema.results}
                upcomingMovies={upcomingMovies.results}
              />
            }
          />
          <Route path="suche" element={<SearchPage />} />
          <Route
            path="watchlist"
            element={<WatchlistPage watchlist={watchlist} />}
          />
        </Routes>
      ) : (
        <>
          <Header />
          <LoadingSpinner />
        </>
      )}
    </>
  );
}
