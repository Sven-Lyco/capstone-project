import fetch from 'node-fetch';

const { API_BASE_SERIES_URL, API_KEY, API_LANGUAGE } = process.env;

export default async function getTopRatedSeries(req, res) {
  if (req.method === 'GET') {
    const topRatedSeriesUrl = `${API_BASE_SERIES_URL}/top_rated?api_key=${API_KEY}&language=${API_LANGUAGE}`;
    const fetchResponse = await fetch(topRatedSeriesUrl);
    const data = await fetchResponse.json();
    res.status(200).json(data);
    return;
  }
}
