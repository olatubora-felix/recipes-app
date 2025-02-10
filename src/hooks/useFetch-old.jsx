import { useEffect, useState } from "react";
import { axiosApi } from "../services/axiosApi";
import { useSearchParams } from "react-router";

const useFetch = ({ limit = 8, skip = 0, url, search, filter }) => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      const values = {
        limit,
        skip,
      };
      setLoading(true);
      try {
        const query = new URLSearchParams(values).toString();

        if (category && category !== null && category !== undefined) {
          const res = await axiosApi.get(`${url}/tag/${category}`);
          setData(res.data);
          return setError("");
        }
        const res = await axiosApi(`${url}${query ? `/${query}` : ""}`);
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
  }, [url, limit, skip, category]);
  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
