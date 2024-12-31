import React, { ReactNode } from 'react';

interface ToolKitProps {
  children: ReactNode;
}

function ToolKit({ children }: ToolKitProps) {
  return (
    <div
      style={{
        padding: '20px',
        border: '2px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
        marginTop: '20px',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>ToolKit</h2>
      {children}
    </div>
  );
}

export default ToolKit;
