import axios from "axios";
import { useState, useEffect } from "react";

const usePost = (url, headers = null, data) => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .post(url, data, headers)
      .then((res) => setResponse(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return { response, loading, error };
};

export default usePost;
