import React, { useRef, useState } from 'react'

function ReactForms() {
    const name = useRef('');
    const email = useRef('');
    const password = useRef('');

    const [show,setShow] = useState(false)
  
    const handelClick = () => { 
        const n= name.current.value
        const e =email.current.value 
        const p = password.current.value 
        if(n && e && p){
            setShow(prev => !prev)
            console.log(n,e,p);
            
}    }
  return (
      <div>
        <h3 className="text-[30px] font-thin mb-10 mt-10">Form Handling: [useRef, Forms ]</h3>

          
          
          <div className='flex flex-col w-[300px] '>
              
              <input type="text" placeholder='Enter Your Name' required className='m-2 rounded-md border border-slate-800 p-2' ref={name}/>
              <input type="text" placeholder='Enter Your Email'required className='m-2 rounded-md border border-slate-800 p-2'  ref={email}/>
              <input type="password" placeholder='Enter Your password' required className='m-2 rounded-md border border-slate-800 p-2' ref={password}/>
          </div>

          <button className='m-2 bg-green-500 text-white p-2 rounded-md ' onClick={handelClick}>Submit</button>
          
          {show && (<h3>check Console</h3> )}
          
 

    </div>
  )
}

export default ReactForms