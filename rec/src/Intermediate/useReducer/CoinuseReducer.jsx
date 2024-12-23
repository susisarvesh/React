import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
};

function CoinuseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleBtn = () => {
    dispatch({ type: "ADD" });
  };

    return (
      <>
      <h3 className="text-[30px] font-thin mb-10 mt-10" >Money Stacker: [useState, useReducer , reducer , dispatch]</h3>
    
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        onClick={handleBtn}
        className="px-6 py-3 mb-6 text-white bg-green-500 rounded-md hover:scale-105 transition-transform"
      >
        Add
      </button>
      <div className="relative w-24 h-96 border-2 border-dashed border-gray-400 flex flex-col items-center">
        {Array.from({ length: state.count }, (_, index) => (
          <div
            key={index}
            className="absolute w-12 h-8 bg-yellow-300 text-black text-center rounded shadow-md flex items-center justify-center text-lg font-bold animate-slide-in"
            style={{ bottom: `${index * 10}px` }}
          >
            💵
          </div>
        ))}
      </div>
            </div>
              </>
  );
}

export default CoinuseReducer;
