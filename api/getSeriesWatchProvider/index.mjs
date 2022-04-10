import fetch from 'node-fetch';

const { API_BASE_SERIES_URL, API_KEY } = process.env;

export default async function getSeriesWatchProviders(req, res) {
  if (req.method === 'POST') {
    const { id } = req.body;
    const seriesWatchProviderUrl = `${API_BASE_SERIES_URL}/${id}/watch/providers?api_key=${API_KEY}`;
    const fetchResponse = await fetch(seriesWatchProviderUrl);
    const data = await fetchResponse.json();
    res.status(200).json(data);
    return;
  }
}
