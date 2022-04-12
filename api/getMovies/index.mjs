import fetch from 'node-fetch';

const { API_BASE_MOVIES_URL, API_KEY, API_LANGUAGE } = process.env;

export default async function getMovies(req, res) {
  if (req.method === 'POST') {
    const moviesOnCinemaUrl = `${API_BASE_MOVIES_URL}/now_playing?api_key=${API_KEY}&language=${API_LANGUAGE}&region=DE`;
    const fetchMoviesOnCinemaRes = await fetch(moviesOnCinemaUrl);
    const moviesOnCinema = await fetchMoviesOnCinemaRes.json();

    const popularMoviesUrl = `${API_BASE_MOVIES_URL}/popular?api_key=${API_KEY}&language=${API_LANGUAGE}&region=DE`;
    const fetchPopularMoviesResponse = await fetch(popularMoviesUrl);
    const popularMovies = await fetchPopularMoviesResponse.json();

    const upcomingMoviesUrl = `${API_BASE_MOVIES_URL}/upcoming?api_key=${API_KEY}&language=${API_LANGUAGE}&region=DE`;
    const fetchUpcommingMoviesResponse = await fetch(upcomingMoviesUrl);
    const upcomingMovies = await fetchUpcommingMoviesResponse.json();

    res.status(200).json({ moviesOnCinema, popularMovies, upcomingMovies });
    return;
  }
}
