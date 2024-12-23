import React, { useEffect, useState } from 'react'

function Clock() {
    const [mins, setMins] = useState(0)
    const [hrs, setHrs] = useState(0)
    const [secs, setSecs] = useState(0)
    const [ampm, setAmpm] = useState("")
    useEffect(() => { 
        const Clock = setInterval(() => { 
            // const Date = new Date();
            // const hrs = Date.getHours();
            // const mins = Date.getMinutes();
            // const secs = Date.getSeconds();
           const date = new Date();
            let hrs = date.getHours();
            const mins = date.getMinutes();
            const secs = date.getSeconds();

            const ampm = hrs >= 12 ? "PM" : "AM";
            hrs = hrs % 12;
            setHrs(hrs);
            setMins(mins);
            setSecs(secs);
            setAmpm(ampm)
        }, [1000])
        return () => clearInterval(Clock);

    },[])
  return (
      <div>
           <div>
            <h3 className="text-[30px] font-thin mb-10 mt-10">Clock: [useState, useEffect , SetInterval]</h3>
            <div>
                <span className='text-[40px] font-mono text-purple-600'>{hrs}:{mins < 10 ? '0' + mins : mins}:{secs < 10 ? '0' + secs : secs} {ampm}</span>
            </div>
        </div>

    </div>
  )
}

export default Clock