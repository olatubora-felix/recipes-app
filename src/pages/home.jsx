import { Banner } from "../components/features/Home/Banner";
import { Categories } from "../components/features/Home/Categories";
import RecipeLists from "../components/recipes/RecipeLists";

const HomePage = () => {
  return (
    <main className="container max-w-screen-xl mx-auto py-10 space-y-10">
      <Banner />
      <Categories />
      <RecipeLists />
      <RecipeLists title={"Recommended Recipes"} skip={8} />
    </main>
  );
};

export default HomePage;
