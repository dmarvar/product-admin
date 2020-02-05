import { useState, useEffect } from "react";
import http from "../services/http";

export const useHttp = url => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function queries() {
      let resData = await http.post(url);
      setData(resData);
    }
    // Execute the created function directly
    queries();
  }, [url]);
  return [data];
};
