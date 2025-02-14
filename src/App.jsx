import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home";
import RecipesPage from "./pages/recipes";
import RecipeDetailsPage from "./pages/recipes/recipeDetails";
import Navbar from "./components/layout/Navbar";
import RootPage from "./pages/RootPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<RootPage />}>
          <Route index element={<HomePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
