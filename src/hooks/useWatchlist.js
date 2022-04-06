import { useState } from 'react';

export default function useWatchlist() {
  const [watchlist, setWatchlist] = useState([]);

  function handleAddMovie(id, title, posterPath) {
    const watchlistItem = { id, title, posterPath };
    if (watchlist.find(item => item.id === watchlistItem.id)) {
      setWatchlist([...watchlist]);
    } else {
      setWatchlist([...watchlist, watchlistItem]);
    }
  }

  function handleAddSeries(id, name, posterPath) {
    const watchlistItem = { id, name, posterPath };
    if (watchlist.find(item => item.id === watchlistItem.id)) {
      setWatchlist([...watchlist]);
    } else {
      setWatchlist([...watchlist, watchlistItem]);
    }
  }

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

  return {
    watchlist,
    checkIsOnWatchlist,
    handleDeleteItem,
    handleAddSeries,
    handleAddMovie,
  };
}
