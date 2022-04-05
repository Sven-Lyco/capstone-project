import fetch from 'node-fetch';

const {
  REACT_APP_API_BASE_SERIES_URL,
  REACT_APP_API_KEY,
  REACT_APP_API_LANGUAGE,
} = process.env;

export default async function getSeriesOnTv(req, res) {
  if (req.method === 'GET') {
    const seriesOnTvUrl = `${REACT_APP_API_BASE_SERIES_URL}/on_the_air?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_API_LANGUAGE}`;
    const fetchResponse = await fetch(seriesOnTvUrl);
    const data = await fetchResponse.json();
    res.status(200).json(data);
    return;
  }
}
