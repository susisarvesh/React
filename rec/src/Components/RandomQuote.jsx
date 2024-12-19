import { useEffect, useState } from 'react';

function RandomQuote() {
    const [quo, setQuo] = useState(""); // Initialize quo as an empty string
    const [allQuotes, setAllQuotes] = useState([]); // Store all quotes
    const [show, setShow] = useState(false); // State to toggle visibility of quote

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const req = await fetch('https://dummyjson.com/quotes');
                const data = await req.json();
                if (!req.ok) {
                    throw new Error(`HTTP error! Status: ${req.status}`);
                }
                console.log(data.quotes); // Log all quotes to the console
                setAllQuotes(data.quotes); // Store all quotes in state
            } catch (err) {
                console.log("Error", err);
                setQuo("Error: Look at the console for details"); // Error message
            }
        };

        fetchQuotes(); // Call the fetchQuotes function when the component mounts
    }, []); // Empty dependency array ensures the effect runs only once

    const handleRandom = () => {
        if (allQuotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * allQuotes.length);
            setQuo(allQuotes[randomIndex].quote); // Set a random quote
            setShow(true); // Show the quote
        }
    };

    return (
        <div>
            <h3 className="text-[30px] font-thin">RandomQuote: [useState , useEffect , Random , Api]</h3>
            <div className='mt-5'>
                {show && (
                    <>
                        <p className="text-[25px] font-thin"><span className='text-[70px] font-bold text-green-800'>"</span>{quo} <span className='text-[70px] font-bold text-green-800'>"</span></p>
                    </>
                )}
                <button onClick={handleRandom} className='bg-slate-300 font-mono  shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] p-2 rounded-md mt-5'>Get Random Quote</button>
            </div>
        </div>
    );
}

export default RandomQuote;
