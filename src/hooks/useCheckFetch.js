import { useState, useEffect } from 'react';

export default function useCheckFetch(data1, data2, data3) {
  const [data, setData] = useState(false);

  useEffect(() => {
    function checkData() {
      data1 || data2 || data3 ? setData(true) : setData(false);
    }
    checkData();
  });
  return { data };
}
