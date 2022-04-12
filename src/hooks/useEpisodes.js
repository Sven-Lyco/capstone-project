import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function useEpisodes() {
  const {
    data: watchedEpisodes,
    error: watchedEpisodesError,
    mutate: mutateWatchedEpisodes,
  } = useSWR('/api/watchedEpisodes', fetcher);

  async function handleCheckEpisode(episodeId) {
    const watchedEpisode = { episodeId };
    const isOnList = watchedEpisodes?.some(
      episode => episode.episodeId === watchedEpisode.episodeId
    );

    if (isOnList) {
      const filteredItems = watchedEpisodes?.filter(
        result => result.episodeId !== episodeId
      );
      mutateWatchedEpisodes(filteredItems, false);
      const filteredItem = watchedEpisodes?.find(
        result => result.episodeId === episodeId
      );
      const deleteId = filteredItem._id;
      await fetch('/api/watchedEpisodes', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ deleteId }),
      });
      mutateWatchedEpisodes();
    }

    if (!isOnList) {
      mutateWatchedEpisodes([...watchedEpisodes, watchedEpisode], false);
      await fetch('/api/watchedEpisodes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(watchedEpisode),
      });
      mutateWatchedEpisodes();
    }
  }

  function checkIsEpisodeWatched(episodeId) {
    const watchedEpisode = { episodeId };
    return watchedEpisodes?.some(
      episode => episode.episodeId === watchedEpisode.episodeId
    );
  }

  return { watchedEpisodesError, handleCheckEpisode, checkIsEpisodeWatched };
}
