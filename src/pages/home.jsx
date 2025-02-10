import { Link } from "react-router";
import { Banner } from "../components/features/Home/Banner";
import { Categories } from "../components/features/Home/Categories";
import RecipeLists from "../components/recipes/RecipeLists";

const HomePage = () => {
  return (
    <main className="container max-w-screen-xl mx-auto py-10 space-y-10">
      <Banner />
      <Categories />
      <div>
        <Link to={"/"} className="text-green-500 font-medium text-2xl">
          All Recipes
        </Link>
      </div>
      <RecipeLists filterCategory={true} />
      <RecipeLists title={"Recommended Recipes"} skip={8} />
    </main>
  );
};

export default HomePage;
