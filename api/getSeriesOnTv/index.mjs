import fetch from 'node-fetch';

const { API_BASE_SERIES_URL, API_KEY, API_LANGUAGE } = process.env;

export default async function getSeriesOnTv(req, res) {
  if (req.method === 'GET') {
    const seriesOnTvUrl = `${API_BASE_SERIES_URL}/on_the_air?api_key=${API_KEY}&language=${API_LANGUAGE}`;
    const fetchResponse = await fetch(seriesOnTvUrl);
    const data = await fetchResponse.json();
    res.status(200).json(data);
    return;
  }
}
