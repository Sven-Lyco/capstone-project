import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function useWatchlist() {
  const { data: watchlist, error: watchlistError } = useSWR(
    '../../api/watchlist',
    fetcher
  );

  // function handleAddMovie(id, title, posterPath) {
  //   const watchlistItem = { id, title, posterPath };
  //   if (watchlist.find(item => item.id === watchlistItem.id)) {
  //     setWatchlist([...watchlist]);
  //   } else {
  //     setWatchlist([watchlistItem, ...watchlist]);
  //   }
  // }

  // function handleAddSeries(id, name, posterPath) {
  //   const watchlistItem = { id, name, posterPath };
  //   if (watchlist.find(item => item.id === watchlistItem.id)) {
  //     setWatchlist([...watchlist]);
  //   } else {
  //     setWatchlist([watchlistItem, ...watchlist]);
  //   }
  // }

  // function handleDeleteItem(id) {
  //   setWatchlist(watchlist.filter(item => item.id !== id));
  // }

  function checkIsOnWatchlist(id) {
    if (watchlist.find(item => item.id === id)) {
      return true;
    } else {
      return false;
    }
  }

  return {
    watchlist,
    watchlistError,
    checkIsOnWatchlist,
    // handleDeleteItem,
    // handleAddSeries,
    // handleAddMovie,
  };
}
