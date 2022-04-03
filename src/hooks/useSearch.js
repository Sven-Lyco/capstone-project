import { useEffect, useState } from 'react';

const {
  REACT_APP_API_BASE_URL_SEARCH,
  REACT_APP_API_KEY,
  REACT_APP_API_LANGUAGE,
} = process.env;

export default function useSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    query &&
      fetch(
        `${REACT_APP_API_BASE_URL_SEARCH}?api_key=${REACT_APP_API_KEY}&query=${query}&language=${REACT_APP_API_LANGUAGE})`
      )
        .then(res => res.json())
        .then(data => setResults(data.results))
        .catch(error => {
          console.error('Error:', error);
        });
  }, [query]);

  function handleSearch(event) {
    const currentQuery = event.target.value.trim();
    if (currentQuery === '') {
      setResults([]);
    }
    setQuery(currentQuery);
  }

  return { results, handleSearch };
}
