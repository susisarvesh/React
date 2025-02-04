import React, { useState } from 'react';
import { Reorder } from 'framer-motion';

function Dragdrop() {
  const [state, setState] = useState([1, 2, 3, 4, 5]);

    return (
      <>
      <h3 className="text-[30px] font-thin mb-10 mt-10">Drag & Drop Interface: [useState, Drag&Drop , Framer Motion]</h3>
 
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Reorder.Group
        axis="y" 
        values={state}
        onReorder={setState}
        className="w-auto p-4 bg-white border border-gray-700 rounded-lg shadow-md"
      >
        {state.map((item) => (
          <Reorder.Item
            value={item}
            key={item} // Unique key ensures proper functioning
            className="p-4 my-2 rounded-lg shadow-md bg-slate-100 cursor-grab hover:bg-slate-300 "
          >
            <div className="text-lg font-semibold text-center">
              Item {item}
                </div>
                <p className='w-[500px] leading-5'>Content for {item} Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique minus sit suscipit excepturi harum natus nobis. Odit saepe illo laudantium voluptatum expedita dolor ea, eum quam voluptas fugit nostrum!</p>
          </Reorder.Item>
        ))}
      </Reorder.Group>
            </div>
                 </>
  );
}

export default Dragdrop;
