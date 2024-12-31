import React, { useState } from 'react';

function Modal() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <button
        className="border border-slate-500 p-2 rounded-md hover:bg-purple-600 hover:text-white"
        onClick={() => setShow((prev) => !prev)}
      >
        Show Modal
      </button>

      {show && (
        <>
         
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setShow(false)}></div>

     
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
              <h2 className="text-xl mb-4">This is the Content to be shown</h2>
              <button
                className="border border-slate-500 p-2 rounded-md bg-red-500 text-white hover:bg-red-600"
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
