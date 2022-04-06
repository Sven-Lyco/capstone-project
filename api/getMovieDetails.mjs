import fetch from 'node-fetch';

const { API_BASE_MOVIES_URL, API_KEY, API_LANGUAGE } = process.env;

export default async function getSeriesDetails(req, res) {
  if (req.method === 'POST') {
    const seriesDetailsUrl = `${API_BASE_MOVIES_URL}/${req.body}?api_key=${API_KEY}&language=${API_LANGUAGE}`;
    const fetchResponse = await fetch(seriesDetailsUrl);
    const data = await fetchResponse.json();
    res.status(200).json(data);
    return;
  }
}
