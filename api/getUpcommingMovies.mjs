import fetch from 'node-fetch';

const {
  REACT_APP_API_BASE_MOVIES_URL,
  REACT_APP_API_KEY,
  REACT_APP_API_LANGUAGE,
} = process.env;

export default async function getPopularMovies(req, res) {
  if (req.method === 'GET') {
    const upcomingMoviesUrl = `${REACT_APP_API_BASE_MOVIES_URL}/upcoming?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_API_LANGUAGE}&region=DE`;
    const fetchResponse = await fetch(upcomingMoviesUrl);
    const data = await fetchResponse.json();
    res.status(200).json(data);
    return;
  }
}
