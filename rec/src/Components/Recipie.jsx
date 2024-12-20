import React, { useState } from 'react'
import { useEffect } from 'react'
function Recipie() {
    const [arr,setArr] = useState([])
    useEffect(() => {
        const food = async() => { 
            const req = await fetch('https://dummyjson.com/recipes');
            const result = await req.json()
            const recipes = result.recipes;
            console.log(result)
            setArr(recipes);       
            console.log(result.recipes)

        } 
        food();

     },[])
  return (
      <div>
  <h3 className="text-[30px] font-thin">Recipie App: [useState, useEffect , Api , Filtering]</h3>
          {
              arr.map((e,index) => (
                  <>
                      <div key={e.userId}>
                          <img src={e.image} alt="" />
                          
                          <h3 className='text-[20px] font-mono'>{e.name}</h3>
                          {e.ingredients.map((ingredients,index) => (
                              
                              <>    
                                  <h2>{ingredients}</h2>
                              </>
                          ))}
                          
                      
                      
                      </div>  
                    
                  </>
              ))
}
          


    </div>
  )
}

export default Recipie