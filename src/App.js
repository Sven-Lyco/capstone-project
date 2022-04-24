import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ChildPage from './pages/ChildPage';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage';
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';
import SeriesDetailsPage from './pages/SeriesDetailsPage';
import SeriesPage from './pages/SeriesPage';
import WatchlistPage from './pages/WatchlistPage';

import FetchError from './components/FetchError';

import useEpisodes from './hooks/useEpisodes';
import useIsAdult from './hooks/useIsAdult';
import useMovies from './hooks/useMovies';
import useSeries from './hooks/useSeries';
import useToggle from './hooks/useToggle';
import useWatchlist from './hooks/useWatchlist';

export default function App() {
  const { handleCheckIsAdult } = useIsAdult();
  const { isChecked, handleToggleSwitch } = useToggle();
  const { popularSeries, topRatedSeries, seriesOnTv } = useSeries();
  const { checkIsEpisodeWatched, handleCheckEpisode, watchedEpisodesError } =
    useEpisodes();
  const { popularMovies, moviesOnCinema, upcomingMovies } = useMovies();
  const {
    watchlist,
    watchlistError,
    checkIsOnWatchlist,
    handleDeleteItem,
    handleAddSeries,
    handleAddMovie,
  } = useWatchlist();

  if (
    !topRatedSeries ||
    !popularSeries ||
    !seriesOnTv ||
    !popularMovies ||
    !moviesOnCinema ||
    !upcomingMovies ||
    watchlistError ||
    watchedEpisodesError
  )
    return <FetchError onClick={() => window.location.reload(false)} />;

  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/"
          element={<HomePage handleCheckIsAdult={handleCheckIsAdult} />}
        />
        <Route path="/child" element={<ChildPage />} />
        <Route
          path="/serien"
          element={
            <SeriesPage
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
              isChecked={isChecked}
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
              isChecked={isChecked}
              onHandleAddMovie={handleAddMovie}
              checkIsOnWatchlist={checkIsOnWatchlist}
              onHandleDeleteItem={handleDeleteItem}
            />
          }
        />
        <Route
          path="/filme"
          element={
            <MoviesPage
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
        <Route
          path="info"
          element={
            <InfoPage
              isChecked={isChecked}
              handleToggleSwitch={handleToggleSwitch}
            />
          }
        />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
