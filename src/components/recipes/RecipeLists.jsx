import { Link } from "react-router";
import useFetch from "../../hooks/useFetch";
import { RecipeCard } from "./RecipeCard";
import RecipeLoader from "./RecipeLoader";

/* eslint-disable react/prop-types */
const RecipeLists = ({
  title,
  limit = 8,
  skip = 0,
  filterCategory = false,
}) => {
  const { data, status, error } = useFetch({
    url: `recipes`,
    limit,
    skip,
    filterCategory,
  });
  console.log(error);
  const recipes = data?.recipes;

  return (
    <section className="space-y-4">
      {title && <h2 className="font-bold text-2xl text-gray-800">{title}</h2>}
      {status === "pending" && <RecipeLoader />}
      {status === "success" && recipes.length === 0 && (
        <div className="h-[400px] w-full flex justify-center items-center flex-col gap-3">
          <h1 className="text-2xl font-medium text-gray-900">
            No Recipe Found
          </h1>
          <Link
            to={"/"}
            className="bg-gray-600 text-white py-2 px-4 rounded-md"
          >
            Get All Recipes
          </Link>
        </div>
      )}
      <div className="grid grid-cols-4 gap-5">
        {recipes &&
          recipes.length > 0 &&
          status === "success" &&
          recipes?.map((recipe) => (
            <RecipeCard key={recipe?.id} recipe={recipe} />
          ))}
      </div>
    </section>
  );
};

export default RecipeLists;
