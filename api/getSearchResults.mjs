import fetch from 'node-fetch';

const { API_BASE_URL_SEARCH, API_KEY, API_LANGUAGE } = process.env;

export default async function getSearchResults(req, res) {
  if (req.method === 'POST') {
    const seriesDetailsUrl = `${API_BASE_URL_SEARCH}?api_key=${API_KEY}&language=${API_LANGUAGE}&query=${req.body}&page=1&include_adult=false&region=DE`;
    const fetchResponse = await fetch(seriesDetailsUrl);
    const data = await fetchResponse.json();
    res.status(200).json(data);
    return;
  }
}
