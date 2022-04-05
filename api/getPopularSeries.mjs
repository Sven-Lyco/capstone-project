import fetch from 'node-fetch';

const {
  REACT_APP_API_BASE_SERIES_URL,
  REACT_APP_API_KEY,
  REACT_APP_API_LANGUAGE,
} = process.env;

export default async function getPopularSeries(req, res) {
  if (req.method === 'GET') {
    const popularSeriesUrl = `${REACT_APP_API_BASE_SERIES_URL}/popular?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_API_LANGUAGE}`;
    const fetchResponse = await fetch(popularSeriesUrl);
    const data = await fetchResponse.json();
    res.json(data);
    return;
  }
}
