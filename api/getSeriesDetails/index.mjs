import fetch from 'node-fetch';

const { API_BASE_SERIES_URL, API_KEY, API_LANGUAGE } = process.env;

export default async function getSeriesDetails(req, res) {
  if (req.method === 'POST') {
    const { id } = req.body;
    const seriesDetailsUrl = `${API_BASE_SERIES_URL}/${id}?api_key=${API_KEY}&language=${API_LANGUAGE}`;
    const fetchSeriesDetailsResponse = await fetch(seriesDetailsUrl);
    const seriesDetails = await fetchSeriesDetailsResponse.json();

    const seriesWatchProviderUrl = `${API_BASE_SERIES_URL}/${id}/watch/providers?api_key=${API_KEY}`;
    const fetchSeriesWatchProvidersResponse = await fetch(
      seriesWatchProviderUrl
    );
    const seriesWatchProviders = await fetchSeriesWatchProvidersResponse.json();

    const seriesCreditsUrl = `${API_BASE_SERIES_URL}/${id}/credits?api_key=${API_KEY}&language=${API_LANGUAGE}`;
    const fetchSeriesCreditsResponse = await fetch(seriesCreditsUrl);
    const seriesCredits = await fetchSeriesCreditsResponse.json();

    res
      .status(200)
      .json({ seriesWatchProviders, seriesDetails, seriesCredits });
    return;
  }
}
