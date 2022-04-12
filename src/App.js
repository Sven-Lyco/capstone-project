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
    watchlistError,
    checkIsOnWatchlist,
    handleDeleteItem,
    handleAddSeries,
    handleAddMovie,
  } = useWatchlist();
  const { checkIsEpisodeWatched, handleCheckEpisode, watchedEpisodesError } =
    useEpisodes();
  const { popularSeries, topRatedSeries, seriesOnTv } = useSeries();
  const { popularMovies, moviesOnCinema, upcomingMovies } = useMovies();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  if (
    !popularMovies ||
    !moviesOnCinema ||
    !upcomingMovies ||
    !popularSeries ||
    !topRatedSeries ||
    !seriesOnTv ||
    watchlistError ||
    watchedEpisodesError
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
                popularSeries={popularSeries}
                topRatedSeries={topRatedSeries}
                seriesOnTv={seriesOnTv}
              />
            }
          />
          <Route
            path="serie/:id"
            element={
              <SeriesDetailsPage
                watchlist={watchlist}
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
                popularMovies={popularMovies}
                moviesOnCinema={moviesOnCinema}
                upcomingMovies={upcomingMovies}
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
