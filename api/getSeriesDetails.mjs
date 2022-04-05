import fetch from 'node-fetch';

const {
  REACT_APP_API_BASE_SERIES_URL,
  REACT_APP_API_KEY,
  REACT_APP_API_LANGUAGE,
} = process.env;

export default async function getSeriesDetails(req, res) {
  if (req.method === 'GET') {
    //const { id } = req.params;
    const seriesDetailsUrl = `${REACT_APP_API_BASE_SERIES_URL}/1399?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_API_LANGUAGE}`;
    const fetchResponse = await fetch(seriesDetailsUrl);
    const data = await fetchResponse.json();
    res.status(200).json(data);
    return;
  }
}
