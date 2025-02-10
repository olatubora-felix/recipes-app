import { categories } from "../constants/categories";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useLocation, useNavigate } from "react-router";

const FilterRecipes = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    category: "",
    search: "",
  });

  console.log(values);
  const handleChange = (event) => {
    if (event.target.name === "category") {
      setValues((currentState) => {
        const newValues = {
          ...currentState,
          category: event.target.value,
          search: "",
        };
        return newValues;
      });
    }

    if (event.target.name === "search") {
      setValues((currentState) => {
        const newValues = {
          ...currentState,
          search: event.target.value,
          category: "",
        };
        return newValues;
      });
    }
  };

  const submit = (event) => {
    event.preventDefault();
    const query = new URLSearchParams(values).toString();
    console.log(query);
    navigate(`${pathname}?${query}`);
  };

  return (
    <form
      onSubmit={submit}
      className="flex items-center bg-[#F3F3F3] h-[42px] rounded-md"
    >
      <div className="flex items-center px-2">
        <select
          name="category"
          id=""
          className="bg-transparent border-none outline-none px-2"
          value={values.category}
          onChange={handleChange}
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
          name="search"
          value={values.search}
          placeholder="Search Recipes..."
          className="bg-transparent border-l border-[#ADADAD] px-2 outline-none"
          onChange={handleChange}
        />
      </div>
      <button className="bg-green-500 h-full w-[55px] text-white flex justify-center items-center rounded-tr-md rounded-br-md">
        <IoIosSearch className="size-6" />
      </button>
    </form>
  );
};

export default FilterRecipes;
