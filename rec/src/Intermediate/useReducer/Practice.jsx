import React, { useReducer, useState } from 'react'
const reducer = (set, action) => {
    switch (action.type) {
        case "ADD":
            return {
                Name:action.payload.name,
                Solved:action.payload.solved ,
                Streak:action.payload.streak+1
                
            }
            
    
        default:
            break;
    }

}

function Practice() {
    const [state, dispatch] = useReducer(reducer, {
        Solved: '',
        Name: '',
        Streak: '',
        
    })
    const [name,setName] = useState('')
    const [solved,setSolved] = useState('')
    const [streak, setStreak] = useState('')
    const [show ,setShow] = useState(false)
     

    const handleAdd = () => { 
        dispatch({ type: "ADD", payload: { name, solved: parseInt(solved), streak: parseInt(streak) } })
        setName('')
        setSolved('')
        setStreak('')
        if (name && solved && streak){
        setShow(prev => !prev)}
    }
  return (
      <div className=''>
          
            <h3 className="text-[30px] font-thin">useReducer Practice Leetcode Tracker: [useState, useReducer , reducer , dispatch]</h3>
          <h3 className="text-[40px] font-thin text-indigo-500">Enter Leetcode Previous Days details</h3>
          <div className='flex flex-col w-[300px] '>
                        
  
          <input type="text" className='border border-slate-600 rounded-md p-2 m-1' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="number" className='border border-slate-600 rounded-md p-2 m-1' placeholder='Enter Solved Count' value={solved} onChange={(e)=>setSolved(e.target.value)}/>
          <input type="number" className='border border-slate-600 rounded-md p-2 m-1' placeholder='Enter Streak Count' value={streak} onChange={(e)=>setStreak(e.target.value)}/>
          </div>
              <button onClick={handleAdd} className='p-2 text-white bg-green-500 rounded-md m-2'>Add</button>
          { show &&(
          <div className='flex flex-col w-[300px] p-2 rounded-md'>
          <h3 className='text-[20px] font-thin'>Your Today's Streak </h3>
              
          <h3 className='text-[20px] font-thin'>Name : {state.Name}</h3>
          <h3 className='text-[20px] font-thin'>SolvedCount : {state.Solved}</h3>
          <h3 className='text-[20px] font-thin'>Streak : {state.Streak}</h3>
              </div>
)
}
    </div>
  )
}

export default Practice