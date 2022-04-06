import fetch from 'node-fetch';

const { API_BASE_SERIES_URL, API_KEY, API_LANGUAGE } = process.env;

export default async function getPopularSeries(req, res) {
  if (req.method === 'GET') {
    const popularSeriesUrl = `${API_BASE_SERIES_URL}/popular?api_key=${API_KEY}&language=${API_LANGUAGE}`;
    const fetchResponse = await fetch(popularSeriesUrl);
    const data = await fetchResponse.json();
    res.json(data);
    return;
  }
}
