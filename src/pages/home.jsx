import { Link } from "react-router";
import RecipeLists from "../components/recipes/RecipeLists";


const HomePage = () => {
  return (
    <>
      <div>
        <Link to={"/"} className="text-green-500 font-medium text-2xl">
          All Recipes
        </Link>
      </div>
      <RecipeLists filterCategory={true} />
      <RecipeLists title={"Recommended Recipes"} skip={8} />
<<<<<<< Updated upstream
    </>
=======
 
    </main>
>>>>>>> Stashed changes
  );
};

export default HomePage;
