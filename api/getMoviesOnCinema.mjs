import fetch from 'node-fetch';

const { API_BASE_MOVIES_URL, API_KEY, API_LANGUAGE } = process.env;

export default async function getMoviesOnCinema(req, res) {
  if (req.method === 'GET') {
    const moviesOnCinemaUrl = `${API_BASE_MOVIES_URL}/now_playing?api_key=${API_KEY}&language=${API_LANGUAGE}&region=DE`;
    const fetchResponse = await fetch(moviesOnCinemaUrl);
    const data = await fetchResponse.json();
    res.status(200).json(data);
    return;
  }
}
