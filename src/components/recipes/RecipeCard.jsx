/* eslint-disable react/prop-types */

import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router";

export const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipes/${recipe?.id}`} className="shadow-md p-2 rounded-md">
      <img
        src={recipe.image}
        alt={recipe?.name}
        height={200}
        className="w-full object-cover rounded-md"
      />
      <div className="p-2">
        <h6 className="text-sm text-gray-500">{recipe?.difficulty}</h6>
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-sm break-words">
              {recipe?.name}
            </h4>
            <p className="text-orange-500 font-poppins font-medium">
              {recipe?.prepTimeMinutes} Min
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2">
              <img src="/images/star.svg" alt={recipe?.rating} />
              {recipe?.rating}
            </p>
            <div className="flex items-center gap-2">
              <FaRegHeart />
              <FaRegComment />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
