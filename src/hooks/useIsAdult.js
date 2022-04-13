import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { saveToLocal, loadFromLocal } from '../utils/localStorage';

export default function useIsAdult() {
  const navigate = useNavigate();
  const [isAdult, setIsAdult] = useState(loadFromLocal('isAdult') ?? false);
  useEffect(() => {
    saveToLocal('isAdult', isAdult);
  }, [isAdult]);

  function handleCheckIsAdult(age) {
    if (age > 17) {
      setIsAdult(true);
      navigate('./serien');
    } else {
      setIsAdult(false);
      navigate('./child');
    }
  }
  return { handleCheckIsAdult };
}
