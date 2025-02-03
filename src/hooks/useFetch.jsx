import { useEffect, useState } from "react";
import { axiosApi } from "../services/axiosApi";

const useFetch = (params) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const res = await axiosApi(params);
        setData(res.data);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [params]);
  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
