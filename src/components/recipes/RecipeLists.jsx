import useFetch from "../../hooks/useFetch";
import { RecipeCard } from "./RecipeCard";

/* eslint-disable react/prop-types */
const RecipeLists = ({ title, limit = 8, skip = 0 }) => {
  const { data, error, isLoading } = useFetch(
    `recipes?limit=${limit}&skip=${skip}`
  );
  console.log(data, error, isLoading);
  const recipes = data?.recipes;

  return (
    <section className="space-y-4">
      {title && <h2 className="font-bold text-2xl text-gray-800">{title}</h2>}
      {isLoading ? (
        <h1 className="text-4xl font-bold text-black">Loading...</h1>
      ) : null}
      <div className="grid grid-cols-4 gap-5">
        {recipes?.map((recipe) => (
          <RecipeCard key={recipe?.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default RecipeLists;
