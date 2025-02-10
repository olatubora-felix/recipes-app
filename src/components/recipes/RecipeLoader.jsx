/* eslint-disable react/prop-types */
const RecipeLoader = ({ length = 8 }) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {Array.from({ length }, (_, i) => (
        <div className="bg-white animate-pulse rounded-md" key={i}>
          {/* Image */}
          <div className="size-[289px] bg-slate-100 rounded-md"></div>
          <p className="h-3 w-16 bg-slate-100 mt-2 rounded-md"></p>
          <div className="w-full h-[44px] bg-slate-100 mt-2 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default RecipeLoader;
