import fetch from 'node-fetch';

const { API_BASE_URL_SEARCH, API_KEY, API_LANGUAGE } = process.env;

export default async function getSearchResults(req, res) {
  if (req.method === 'POST') {
    // To test POST request with _getSearchResults.http use: const { query } = req.body;
    const query = req.body;
    const searchResultsUrl = `${API_BASE_URL_SEARCH}?api_key=${API_KEY}&language=${API_LANGUAGE}&query=${query}&page=1&include_adult=false&region=DE`;
    const fetchResponse = await fetch(searchResultsUrl);
    const data = await fetchResponse.json();
    res.status(200).json(data);
    return;
  }
}
