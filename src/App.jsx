import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home";
import RecipesPage from "./pages/recipes";
import RecipeDetailsPage from "./pages/recipes/recipeDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
