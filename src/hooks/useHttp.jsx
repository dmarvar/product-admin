import { useState, useEffect } from "react";
import http from "../services/http";

export const useGetHttp = url => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    async function queries() {
      setloading(true);
      http.post(url).then(res => {
        setData(res);
        setloading(false);
      });
    }
    // Execute the created function directly
    queries();
  }, [url]);
  return [data, loading];
};

export const usePostHttp = url => {
  const postData = async data => {
    const response = await http.post(url, data);
    return response;
  };
  return [postData];
};
