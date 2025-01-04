import React from 'react';
import useCounter from './store/counter';

function ZustandCounter() {
  const { count, increment, decrement } = useCounter();

    return (
        <>
<h3 className="text-[30px] font-thin mb-10 mt-10">ZustandCounter : [Zustand, CustomHook , create , Ts]</h3>

    <div className="flex flex-col items-center justify-center">
      <div className="p-6 text-center bg-white rounded-lg shadow-lg">
        <p className="mb-4 text-2xl font-semibold">Count: {count}</p>
        <div className="flex space-x-4">
          <button
            onClick={increment}
            className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none"
          >
            +
          </button>
          <button
            onClick={decrement}
            className="px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none"
          >
            -
          </button>
        </div>
      </div>
            </div>
            </>
  );
}

export default ZustandCounter;
