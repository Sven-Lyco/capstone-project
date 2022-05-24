import { useEffect, useState } from 'react';
import { loadFromLocal, saveToLocal } from '../utils/localStorage';

export default function useToggle() {
  const [isChecked, setIsChecked] = useState(
    loadFromLocal('isChecked') ?? false
  );

  useEffect(() => {
    saveToLocal('isChecked', isChecked);
  }, [isChecked]);

  function handleToggleSwitch(event) {
    setIsChecked(event.target.checked);
  }

  return { isChecked, handleToggleSwitch };
}
