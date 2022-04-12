import fetch from 'node-fetch';

const { API_BASE_SERIES_URL, API_KEY, API_LANGUAGE } = process.env;

export default async function getSeries(req, res) {
  if (req.method === 'POST') {
    const popularSeriesUrl = `${API_BASE_SERIES_URL}/popular?api_key=${API_KEY}&language=${API_LANGUAGE}`;
    const fetchPopularSeriesResponse = await fetch(popularSeriesUrl);
    const popularSeries = await fetchPopularSeriesResponse.json();

    const seriesOnTvUrl = `${API_BASE_SERIES_URL}/on_the_air?api_key=${API_KEY}&language=${API_LANGUAGE}`;
    const fetchSeriesOnTvResponse = await fetch(seriesOnTvUrl);
    const seriesOnTv = await fetchSeriesOnTvResponse.json();

    const topRatedSeriesUrl = `${API_BASE_SERIES_URL}/top_rated?api_key=${API_KEY}&language=${API_LANGUAGE}`;
    const fetchTopRatedSeriesResponse = await fetch(topRatedSeriesUrl);
    const topRatedSeries = await fetchTopRatedSeriesResponse.json();

    res.status(200).json({ popularSeries, seriesOnTv, topRatedSeries });
    return;
  }
}
