import { Link, NavLink } from "react-router";
import FilterRecipes from "../FilterRecipes";
const Navbar = () => {
  return (
    <header className="py-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"}>
          <img src="/images/logo.svg" alt="" />
        </Link>

        <FilterRecipes />
        {/* Menus */}
        <menu className="flex items-center gap-4 text-gray-600 font-semibold hover:text-green-500 text-xl">
          <li>
            <NavLink to={"/recipes"}>Recipes</NavLink>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Navbar;
