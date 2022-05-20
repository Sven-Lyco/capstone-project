import { useState, useEffect } from 'react';

export default function usePerson(personId) {
  const [personDetails, setPersonDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function loadPerson() {
      try {
        const response = await fetch('/api/getPerson/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(personId),
        });
        const data = await response.json();
        setPersonDetails(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    loadPerson();
  }, [personId]);

  return { personDetails, isLoading };
}
