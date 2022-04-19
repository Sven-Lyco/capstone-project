import fetch from 'node-fetch';

const { API_BASE_SERIES_URL, API_KEY, API_LANGUAGE } = process.env;

export default async function getSeriesDetails(req, res) {
  if (req.method === 'POST') {
    // To test POST request with _getSeriesDetails.http use: const { id } = req.body;
    const id = req.body;
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

    const similarSeriesUrl = `${API_BASE_SERIES_URL}/${id}/similar?api_key=${API_KEY}&language=${API_LANGUAGE}&page=1`;
    const fetchSimilarSeriesResponse = await fetch(similarSeriesUrl);
    const similarSeries = await fetchSimilarSeriesResponse.json();

    const seriesTrailerUrl = `${API_BASE_SERIES_URL}/${id}/videos?api_key=${API_KEY}&language=${API_LANGUAGE}&include_image_language=de`;
    const fetchSeriesTrailerUrlResponse = await fetch(seriesTrailerUrl);
    const seriesTrailer = await fetchSeriesTrailerUrlResponse.json();

    res.status(200).json({
      seriesDetails,
      seriesWatchProviders,
      seriesCredits,
      similarSeries,
      seriesTrailer,
    });
    return;
  }
}
