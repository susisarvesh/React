import React, { useState, useEffect } from "react";

function Recipie() {
  const [arr, setArr] = useState([]); // Original recipes array
  const [state, setState] = useState(""); // Search term

  useEffect(() => {
    const food = async () => {
      const req = await fetch("https://dummyjson.com/recipes");
      const result = await req.json();
      const recipes = result.recipes;
      setArr(recipes);
    };
    food();
  }, []);

  // Filter recipes based on the search term
    const filteredArr = arr.filter((recipe) => {
     return recipe.name.trim().toLowerCase().includes(state.toLowerCase())
});

  return (
    <div className="p-4 bg-gray-50 min-h-screen ">
      <h3 className="text-[30px] font-thin text-center mb-10 mt-10">
        Recipe App: [useState, useEffect, API, Filtering]
      </h3>
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          placeholder="Search recipes..."
          className="border border-slate-600 p-2 rounded-md font-mono m-2 w-full max-w-md"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredArr.length > 0 ? (
          filteredArr.map((e) => (
            <div
              key={e.userId}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition duration-300"
            >
              <img
                src={e.image}
                alt={e.name}
                className="w-full h-[200px] rounded-lg object-cover mb-4"
              />
              <h3 className="text-[22px] font-semibold mb-2">{e.name}</h3>
              <div className="text-sm mb-4 flex">
                <span className="font-bold mr-1">Ingredients:</span>
                <div className="list-disc flex items-center">
                  {e.ingredients.slice(0, 2).map((ingredient, index) => (
                    <h2 key={index} className="mr-2">
                      {ingredient}
                    </h2>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3 className="text-center text-gray-500 col-span-full">
            No recipes match your search.
          </h3>
        )}
      </div>
    </div>
  );
}

export default Recipie;
