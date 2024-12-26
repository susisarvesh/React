import { div } from 'framer-motion/client'
import React, { useState } from 'react'

function DarkTheme() {
    const [dark,setDark] = useState<boolean>(true)
    return (
        <div className=''>
                    <h3 className="text-[30px] font-thin mb-10 mt-10">Dark & LightMode: [useState, TypeScript , Tailwind ]</h3>

            <div className='border border-gray-500 p-2 rounded-md m-4 w-[100px] ' onClick={()=>setDark(prev =>!prev)}><button>{dark?"LightMode":"Dark Mode"}</button> </div>
      <div className={dark?"bg-black text-white rounded-md":"bg-white text-black rounded-md"}>
          
                <div className='h-[200px] flex flex-col justify-center items-center font-thin text-[30px] p-2 '>
                    This is a content 
                    <p className='text-[13px] p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque quas libero quisquam natus cumque illo rem dolores debitis similique ipsum dolorum aperiam, blanditiis iste et commodi, veritatis praesentium voluptas.</p>
                </div>
                

            </div>
            </div>
  )
}

export default DarkTheme