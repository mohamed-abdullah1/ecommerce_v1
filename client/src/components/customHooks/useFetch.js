import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, headers = null) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(url, headers)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, error, loading };
};

export default useFetch;
