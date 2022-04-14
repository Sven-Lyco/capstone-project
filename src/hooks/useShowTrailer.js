import { useEffect, useState } from 'react';

export default function useShowTrailer({
  seriesTrailerUrl,
  movieTrailerUrl,
  isChecked,
}) {
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    if (movieTrailerUrl?.length !== 0) {
      setShowTrailer(true);
    }
    if (movieTrailerUrl?.length === 0) {
      setShowTrailer(false);
    }
    if (seriesTrailerUrl?.length !== 0) {
      setShowTrailer(true);
    }
    if (seriesTrailerUrl?.length === 0) {
      setShowTrailer(false);
    }
    if (isChecked === true && movieTrailerUrl?.length === 0) {
      setShowTrailer(false);
    }
    if (isChecked === true && seriesTrailerUrl?.length === 0) {
      setShowTrailer(false);
    }
    if (isChecked === false) {
      setShowTrailer(false);
    }
  }, [isChecked, movieTrailerUrl?.length, seriesTrailerUrl?.length]);

  return { showTrailer };
}
