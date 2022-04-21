import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function useWatchlist() {
  const {
    data: watchlist,
    error: watchlistError,
    mutate: mutateWatchlist,
  } = useSWR('/api/watchlist', fetcher);

  async function handleAddMovie(id, title, posterPath) {
    const watchlistItem = { id, title, posterPath };
    if (watchlist.find(item => item.id === watchlistItem.id)) {
      return;
    } else {
      mutateWatchlist([...watchlist, watchlistItem], false);
      await fetch('/api/watchlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(watchlistItem),
      });
      mutateWatchlist();
    }
  }

  async function handleAddSeries(id, name, posterPath) {
    const watchlistItem = { id, name, posterPath };
    if (watchlist.find(item => item.id === watchlistItem.id)) {
      mutateWatchlist([...watchlist]);
    } else {
      mutateWatchlist([...watchlist, watchlistItem], false);
      await fetch('/api/watchlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(watchlistItem),
      });
      mutateWatchlist();
    }
  }

  async function handleDeleteItem(id) {
    const filteredItems = watchlist.filter(result => result.id !== id);

    mutateWatchlist(filteredItems, false);

    const filteredItem = watchlist.filter(result => result.id === id);
    const deleteId = filteredItem[0]._id;

    await fetch('/api/watchlist', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ deleteId }),
    });
    mutateWatchlist();
  }

  function checkIsOnWatchlist(id) {
    if (watchlist?.find(item => item.id === id)) {
      return true;
    } else {
      return false;
    }
  }

  return {
    watchlist,
    watchlistError,
    checkIsOnWatchlist,
    handleDeleteItem,
    handleAddSeries,
    handleAddMovie,
  };
}
