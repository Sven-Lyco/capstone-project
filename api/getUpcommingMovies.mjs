import fetch from 'node-fetch';

const { API_BASE_MOVIES_URL, API_KEY, API_LANGUAGE } = process.env;

export default async function getPopularMovies(req, res) {
  if (req.method === 'GET') {
    const upcomingMoviesUrl = `${API_BASE_MOVIES_URL}/upcoming?api_key=${API_KEY}&language=${API_LANGUAGE}&region=DE`;
    const fetchResponse = await fetch(upcomingMoviesUrl);
    const data = await fetchResponse.json();
    res.status(200).json(data);
    return;
  }
}
