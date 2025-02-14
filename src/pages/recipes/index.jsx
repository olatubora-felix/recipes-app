import { Link, useLocation, useSearchParams } from "react-router";
import RecipeLists from "../../components/recipes/RecipeLists";
import { mealTypes } from "../../constants/meal-type";
import clsx from "clsx";

const RecipesPage = () => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const mealType = searchParams.get("mealType");
  console.log(mealTypes);
  return (
    <section className="flex gap-20">
      <div className="w-[150px] space-y-3 ">
        <h4 className="font-semibold text-orange-700 text-2xl  text-center">
          Meal Types
        </h4>
        {mealTypes?.map((meal, i) => (
          <Link
            key={`${meal}-${i}`}
            to={`${pathname}?mealType=${meal.toLowerCase()}`}
            className={clsx(
              `block font-medium text-base py-2 px-4 text-center`,
              mealType === meal.toLowerCase() &&
                "bg-orange-500 text-white rounded-xl "
            )}
          >
            {meal}
          </Link>
        ))}
      </div>
      <div className="flex-1 space-y-10">
        <div>
          <Link to={pathname} className="text-green-500 font-medium text-2xl">
            All Recipes
          </Link>
        </div>
        <RecipeLists filterCategory={true} addClass="grid-cols-3 grid gap-5" />
        <RecipeLists title={"Recommended Recipes"} skip={8} />
      </div>
    </section>
  );
};

export default RecipesPage;
