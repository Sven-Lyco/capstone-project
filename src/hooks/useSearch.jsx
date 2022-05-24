import { useEffect, useState } from 'react';

export default function useSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    query &&
      fetch('/api/getSearchResults/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      })
        .then(res => res.json())
        .then(data => setResults(data.results))
        .catch(error => {
          console.error(error);
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
