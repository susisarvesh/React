import React, { useEffect } from 'react'

function Like() {
  useEffect(() => { 
    const fetching = async() => { 
      try {
        const req = await fetch("https://animechan.io/api/v1/quotes/random");

        if (!req.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await req.json();
        console.log(data);
      } catch (error) {
        console.error("There was an error fetching data:", error);
      }
    }

    fetching();
  }, [])

  return (
    <div>Like</div>
  )
}

export default Like;
