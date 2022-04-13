import fetch from 'node-fetch';

const { API_BASE_MOVIES_URL, API_KEY, API_LANGUAGE } = process.env;

export default async function getMovieDetails(req, res) {
  if (req.method === 'POST') {
    const id = req.body;
    const movieDetailsUrl = `${API_BASE_MOVIES_URL}/${id}?api_key=${API_KEY}&language=${API_LANGUAGE}`;
    const fetchMovieDetailsResponse = await fetch(movieDetailsUrl);
    const movieDetails = await fetchMovieDetailsResponse.json();

    const movieCreditsUrl = `${API_BASE_MOVIES_URL}/${id}/credits?api_key=${API_KEY}&language=${API_LANGUAGE}`;
    const fetchMovieCreditsResponse = await fetch(movieCreditsUrl);
    const movieCredits = await fetchMovieCreditsResponse.json();

    const movieWatchProviderUrl = `${API_BASE_MOVIES_URL}/${id}/watch/providers?api_key=${API_KEY}`;
    const fetchWatchProvidersResponse = await fetch(movieWatchProviderUrl);
    const movieWatchProviders = await fetchWatchProvidersResponse.json();

    const similarMoviesUrl = `${API_BASE_MOVIES_URL}/${id}/similar?api_key=${API_KEY}&language=${API_LANGUAGE}&page=1`;
    const fetchSimilarMoviesResponse = await fetch(similarMoviesUrl);
    const similarMovies = await fetchSimilarMoviesResponse.json();

    res
      .status(200)
      .json({ movieDetails, movieCredits, movieWatchProviders, similarMovies });
    return;
  }
}
