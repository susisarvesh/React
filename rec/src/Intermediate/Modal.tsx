import React, { useState } from 'react';

function Modal() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
     <h3 className="text-[30px] font-thin mb-10 mt-10">Modal & ToolKit : [useState, Children]</h3>

      <button
        className="p-2 border rounded-md border-slate-500 hover:bg-purple-600 hover:text-white"
        onClick={() => setShow((prev) => !prev)}
      >
        Show Modal
      </button>

      {show && (
        <>
         
          <div className="fixed inset-0 z-40 bg-black opacity-50" onClick={() => setShow(false)}></div>

     
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="w-1/3 p-6 bg-white rounded-md shadow-lg">
              <h2 className="mb-4 text-xl">This is the Content to be shown</h2>
              <button
                className="p-2 text-white bg-red-500 border rounded-md border-slate-500 hover:bg-red-600"
                onClick={() => setShow(false)}
              >
                Close Modal
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Modal;
