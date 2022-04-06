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
import WatchlistPage from './pages/WatchlistPage';
import useSeries from './hooks/useSeries';
import useMovies from './hooks/useMovies';
import LoadingSpinner from './components/LoadingSpinner';
import FetchError from './components/FetchError';
import Header from './components/Header';

export default function App() {
  const [watchlist, setWatchlist] = useState([]);
  const [isAdult, setIsAdult] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleDeleteItem(id) {
    setWatchlist(watchlist.filter(item => item.id !== id));
  }

  function checkIsOnWatchlist(id) {
    if (watchlist.find(item => item.id === id)) {
      return true;
    } else {
      return false;
    }
  }

  function handleAddSeries(id, name, posterPath) {
    const watchlistItem = { id, name, posterPath };
    if (watchlist.find(item => item.id === watchlistItem.id)) {
      alert('Diese Serie ist schon auf deiner Watchlist');
    } else {
      setWatchlist([...watchlist, watchlistItem]);
    }
  }

  function handleAddMovie(id, title, posterPath) {
    const watchlistItem = { id, title, posterPath };
    if (watchlist.find(item => item.id === watchlistItem.id)) {
      alert('Diese Serie ist schon auf deiner Watchlist');
    } else {
      setWatchlist([...watchlist, watchlistItem]);
    }
  }

  console.log(watchlist);

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
