import { Link, NavLink } from "react-router";
import { IoIosSearch } from "react-icons/io";
import { categories } from "../../constants/categories";
const Navbar = () => {
  return (
    <header className="py-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"}>
          <img src="/images/logo.svg" alt="" />
        </Link>
        {/* Select and Search Recipes */}
        <div className="flex items-center bg-[#F3F3F3] h-[42px] rounded-md">
          <div className="flex items-center px-2">
            <select
              name=""
              id=""
              className="bg-transparent border-none outline-none px-2"
            >
              <option>All Categories</option>
              {categories?.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search Recipes..."
              className="bg-transparent border-l border-[#ADADAD] px-2 outline-none"
            />
          </div>
          <button className="bg-green-500 h-full w-[55px] text-white flex justify-center items-center rounded-tr-md rounded-br-md">
            <IoIosSearch className="size-6" />
          </button>
        </div>

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
