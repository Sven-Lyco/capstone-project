import { useState, useEffect } from 'react';
import { saveToLocal, loadFromLocal } from '../utils/localStorage';

export default function useWatchlist() {
  const [watchedEpisode, setWatchedEpisode] = useState(
    loadFromLocal('watchedEpisodes') ?? []
  );

  useEffect(() => {
    saveToLocal('watchedEpisodes', watchedEpisode);
  }, [watchedEpisode]);

  function handleCheckEpisode(episodeId) {
    const isOnList = watchedEpisode.some(episode => episode === episodeId);

    if (isOnList) {
      const indexToRemove = watchedEpisode.findIndex(
        episode => episode === episodeId
      );
      setWatchedEpisode([
        ...watchedEpisode.slice(0, indexToRemove),
        ...watchedEpisode.slice(indexToRemove + 1),
      ]);
    } else {
      setWatchedEpisode([...watchedEpisode, episodeId]);
    }
  }

  function checkIsEpisodeWatched(episodeId) {
    return watchedEpisode.some(episode => episode === episodeId);
  }

  return { handleCheckEpisode, checkIsEpisodeWatched };
}
