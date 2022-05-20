import fetch from 'node-fetch';

const { API_BASE_PERSON_URL, API_KEY, API_LANGUAGE } = process.env;

export default async function getPerson(req, res) {
  if (req.method === 'POST') {
    // To test POST request with _getPerson.http use: const { personId } = req.body;
    const personId = req.body;
    const personDetailsUrl = `${API_BASE_PERSON_URL}/${personId}?api_key=${API_KEY}&language=${API_LANGUAGE}`;
    const fetchResponse = await fetch(personDetailsUrl);
    const data = await fetchResponse.json();
    res.status(200).json(data);
    return;
  }
}
