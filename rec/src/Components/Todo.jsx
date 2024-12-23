import { useState } from "react"

function Todo() {
    //input state
    const [value, setValue] = useState('')
    //Add state
    const [add, setAdd] = useState([])
    const handleClick = () => { 
        setAdd(prev => [...prev, value])
        setValue('')
    }
    const handleRemove = (index) => { 
        setAdd(prev => prev.filter((_,i) => i !== index))
    }
  return (
      <div>
          <h3 className="text-[30px] font-thin mb-10 mt-10">To Do List:[useState , List Rendering , Filtering]</h3>
          <div className="flex items-center mt-5">
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="border-blue-400 bg-slate-200 rounded-lg w-[250px] h-[40px] p-3 font-mono" />
          <button className="text-[18px] ml-[10px] bg-slate-500 hover:bg-slate-800 p-2 font-mono text-white rounded-md" onClick={handleClick}>Add</button>
        <button className="text-[18px] ml-[10px] p-2 rounded-lg border-slate-800">
  ⭐
</button>

          
          </div>
          <div className="p-3">
              { 
                  add.map((ele,index) => (
                      <>
                          <div className="m-5">
                              <span className="bg-slate-700 p-2 rounded-md font-mono text-white">{ele}</span>
                               <button className="text-[16px] ml-[10px] font-mono bg-red-500 hover:bg-red-600 p-2 text-white rounded-md" onClick={()=>handleRemove(index)}>Remove</button>
                               <button className="text-[16px] ml-[10px] font-mono bg-yellow-400 hover:bg-yellow-500 p-2 text-white rounded-md" onClick={()=>handleRemove(index)}>Edit</button>
                          </div>
                      </>
                  ))

              }
          </div>
          </div>
  )
}

export default Todo