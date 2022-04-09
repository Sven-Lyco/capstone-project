import { useState, useEffect } from 'react';
import { saveToLocal, loadFromLocal } from '../utils/localStorage';

export default function useWatchlist() {
  const [watchedEpisodes, setWatchedEpisodes] = useState(
    loadFromLocal('watchedEpisodes') ?? []
  );

  useEffect(() => {
    saveToLocal('watchedEpisodes', watchedEpisodes);
  }, [watchedEpisodes]);

  function handleCheckEpisode(episodeId) {
    const watchedEpisode = { episodeId };
    const isOnList = watchedEpisodes.some(
      episode => episode.episodeId === watchedEpisode.episodeId
    );

    if (isOnList) {
      const indexToRemove = watchedEpisodes.findIndex(
        episode => episode.episodeId === watchedEpisode.episodeId
      );
      setWatchedEpisodes([
        ...watchedEpisodes.slice(0, indexToRemove),
        ...watchedEpisodes.slice(indexToRemove + 1),
      ]);
    } else {
      setWatchedEpisodes([...watchedEpisodes, watchedEpisode]);
    }
  }

  function checkIsEpisodeWatched(episodeId) {
    const watchedEpisode = { episodeId };
    return watchedEpisodes.some(
      episode => episode.episodeId === watchedEpisode.episodeId
    );
  }

  return { handleCheckEpisode, checkIsEpisodeWatched };
}
