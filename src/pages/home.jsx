import RecipeLists from "../components/recipes/RecipeLists";

const Home = () => {
  return (
    <main>
      <div>
        <RecipeLists filterCategory={true} />
        <RecipeLists title={"Recommended Recipes"} skip={8} />
      </div>
    </main>
  );
};

export default Home;
