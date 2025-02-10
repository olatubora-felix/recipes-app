import { axiosApi } from "../services/axiosApi";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

const useFetch = ({ limit = 8, skip = 0, url, filterCategory }) => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  console.log(category, "category");
  const values = { limit, skip };
  const query = useQuery({
    queryKey: [
      "recipes",
      limit ?? "",
      skip ?? "",
      category ?? "",
      search ?? "",
    ],
    queryFn: async () => {
      if (
        category &&
        category !== null &&
        category !== undefined &&
        filterCategory
      ) {
        const res = await axiosApi.get(`${url}/tag/${category}`);
        return res.data;
      }

      if (search && search !== null && search !== undefined && filterCategory) {
        const res = await axiosApi.get(`${url}/search?q=${search}`);
        return res.data;
      }

      const params = new URLSearchParams(values).toString();
      const res = await axiosApi.get(`${url}${params ? `?${params}` : ""}`);
      return res.data;
    },
  });
  return query;
};

export default useFetch;
