import { useEffect, useState } from 'react';

export default function useShowTrailer({ trailerUrl, isChecked }) {
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    if (trailerUrl.length !== 0) {
      setShowTrailer(true);
    }
    if (trailerUrl.length === 0) {
      setShowTrailer(false);
    }
    if (isChecked === true && trailerUrl.length === 0) {
      setShowTrailer(false);
    }
    if (isChecked === false) {
      setShowTrailer(false);
    }
  }, [isChecked, trailerUrl]);

  return { showTrailer };
}
