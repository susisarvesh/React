import React, { ReactNode } from 'react';

interface ToolKit {
  children: ReactNode;
  visibility: boolean;
}

function ToolKit({ children, visibility }: ToolKit) {
  return (
    <div className="p-4 mt-10 transition-all duration-300 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
     
      <div
        className={`mb-4 p-3 rounded-lg text-sm font-medium transition-opacity duration-300 ${
          visibility
            ? 'opacity-100 bg-blue-50 text-blue-700 border border-blue-300'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        Visibility Toolkit
      </div>

      <div className="p-3 bg-white rounded-lg shadow-sm">{children}</div>
    </div>
  );
}

export default ToolKit;
