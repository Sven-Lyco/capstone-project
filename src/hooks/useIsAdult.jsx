import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadFromLocal, saveToLocal } from '../utils/localStorage';

export default function useIsAdult() {
  const navigate = useNavigate();
  const [isAdult, setIsAdult] = useState(loadFromLocal('isAdult') ?? false);

  useEffect(() => {
    saveToLocal('isAdult', isAdult);
  }, [isAdult]);

  function handleCheckIsAdult(age) {
    if (age > 17) {
      setIsAdult(true);
      navigate('./info');
    } else {
      setIsAdult(false);
      navigate('./child');
    }
  }

  return { handleCheckIsAdult };
}
