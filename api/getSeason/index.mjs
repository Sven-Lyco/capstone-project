import fetch from 'node-fetch';

const { API_BASE_SERIES_URL, API_KEY, API_LANGUAGE } = process.env;

export default async function getSeason(req, res) {
  if (req.method === 'POST') {
    // To test POST request with _getSeason.http use: const { fetchUrl } = req.body;
    const fetchUrl = req.body;

    const seasonDetailsUrl = `${API_BASE_SERIES_URL}/${fetchUrl}?api_key=${API_KEY}&language=${API_LANGUAGE}`;
    const fetchResponse = await fetch(seasonDetailsUrl);
    const data = await fetchResponse.json();
    res.status(200).json(data);
    return;
  }
}
