import { useState } from 'react';

function Calculator() {
  const buttons = [
    ["1", "2", "3", "4"],
    ["5", "6", "7", "8"],
      ["9", "&", "+", "-"],
      ["*", "/", "%", "="],
    ];
    const [input,setInput] = useState('')
    const handleClick = (btn) => {
        console.log("Button clicked");
             setInput(prev => prev+btn)
    }
    const result = () => {
        try { 
            setInput(eval(input).toString())
        }
        catch {
            setInput("Invalid Syntax")
         }
    }
    const handleReset = () => { 
        setInput('')
    }

  return (
    <div>
      <h3 className="text-[30px] font-thin mb-10 mt-10">Calculator:[useState , Eval , List Rendering]</h3>
          <h2 className="text-[30px] m-1">{input||"0"}</h2>
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className="flex m-1">
          {row.map((btn, index) => (
            <button
              key={index}
              className="text-[20px] bg-slate-400 p-2 w-[80px] rounded-md text-white hover:bg-black m-1"
                  
                  onClick={() => (btn === "=" ?result():handleClick(btn))}
              >
              {btn}
            </button>
          ))}
              
        </div>
      ))}
          <button onClick={handleReset} className='text-[20px] m-1 bg-slate-600 text-white p-1 rounded-md'>Reset</button>
    </div>
  );
}

export default Calculator;
