import { useState, useEffect } from 'react';

export default function useCheckFetch(data1, data2, data3) {
  const [data, setData] = useState(true);

  useEffect(() => {
    function checkData() {
      data1 && data2 && data3 ? setData(true) : setData(false);
    }
    checkData();
  }, [data1, data2, data3]);
  return { data };
}
