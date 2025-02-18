import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { axiosApi } from "../../services/axiosApi";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetchRecipeData = async () => {
      setLoading(true);
      try {
        const res = await axiosApi.get(`/recipes/${id}`);
        setRecipeData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipeData();
  }, [id]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (!recipeData) return <p className="text-center text-lg">Recipe not found.</p>;

  return (
    <div className="py-6">
      <div className="flex flex-col justify-center md:flex-row gap-10 rounded-lg overflow-hidden">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/3">
          <img src={recipeData?.image} alt={recipeData?.name} className="w-full h-full object-cover" />
        </div>

        {/* Right Side: Recipe Details */}
        <div className="w-full md:w-2/3 p-6">
          <h1 className="text-2xl font-bold">{recipeData?.name}</h1>
          <p className="text-gray-600 mt-2"><strong>Meal Type:</strong> {recipeData?.mealType?.join(", ")}</p>
          <p className="text-gray-600 mt-2"><strong>Rating:</strong> {recipeData?.rating} ⭐ ({recipeData?.reviewCount} Reviews)</p>

          <h2 className="text-lg font-semibold mt-4">Ingredients:</h2>
          <ul className="list-disc list-inside text-gray-700">
            {recipeData?.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))
            }
          </ul>

          
          <div className="py-6">
          <button className="bg-green-500 text-white text-center py-2 px-3 rounded-md">ADD TO CART</button>
          </div>
        

        </div>
      </div>
      <div className="mt-5">
        <div>
        <p className="text-lg font-semibold mt-4 border p-2 inline-block">Instructions:</p>
        </div>
      <h2 ></h2>
          <ol className="list-decimal list-inside text-gray-700 border inline-block">
            {recipeData?.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
      </div>
      
    </div>
  );
};

export default RecipeDetails;
