import React, { ReactNode } from 'react'
interface ToolKit { 
    children:ReactNode
}
function ToolKit({children}:ToolKit) {
  return (
      <div>
          {children}
    </div>
  )
}

export default ToolKit