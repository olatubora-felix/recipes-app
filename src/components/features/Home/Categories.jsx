import { Link } from "react-router";
import { categories } from "../../../constants/categories";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { clsx } from "clsx";
export const Categories = () => {
  return (
    <section className="flex justify-between items-center">
      {categories.slice(0, 5).map((category) => (
        <Link
          key={category}
          to={`/?category=${category?.toLowerCase()}`}
          className={clsx(
            `py-3 px-6 w-[236px]  flex justify-center items-center rounded-md text-white font-medium text-base [&:nth-child(odd)]:bg-[#F6784C] [&:nth-child(even)]:bg-[#84BD00]`,
            " "
          )}
        >
          {category}
          <MdOutlineKeyboardArrowRight className="size-7" />
        </Link>
      ))}
    </section>
  );
};
