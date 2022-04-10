import fetch from 'node-fetch';

const { API_BASE_MOVIES_URL, API_KEY } = process.env;

export default async function getMovieWatchProviders(req, res) {
  if (req.method === 'POST') {
    const { id } = req.body;
    const movieWatchProviderUrl = `${API_BASE_MOVIES_URL}/${id}/watch/providers?api_key=${API_KEY}`;
    const fetchResponse = await fetch(movieWatchProviderUrl);
    const data = await fetchResponse.json();
    res.status(200).json(data);
    return;
  }
}
