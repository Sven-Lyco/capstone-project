import fetch from 'node-fetch';

const {
  REACT_APP_API_BASE_SERIES_URL,
  REACT_APP_API_KEY,
  REACT_APP_API_LANGUAGE,
} = process.env;

export default async function getTopRatedSeries(req, res) {
  if (req.method === 'GET') {
    const topRatedSeriesUrl = `${REACT_APP_API_BASE_SERIES_URL}/top_rated?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_API_LANGUAGE}`;
    const fetchResponse = await fetch(topRatedSeriesUrl);
    const data = await fetchResponse.json();
    res.status(200).json(data);
    return;
  }
}
