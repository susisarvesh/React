import React, { useState, useEffect } from 'react';

function Pagination() {
    const [api, setApi] = useState([]);
    const [page, setPage] = useState(1);
    const numberofcards = 3;
    const finalIndex = numberofcards * page;
    const initialIndex = finalIndex - numberofcards
    const [list,setList] = useState([1,2,3,4,5])

  useEffect(() => {
    const apifetching = async () => {
      try {
        const req = await fetch("https://dummyjson.com/comments");
        const data = await req.json();
        console.log(data.comments);
        const fetched = data.comments;
          if (fetched) {
        const current  = fetched.slice(initialIndex,finalIndex)
          setApi(current);
        }
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    };
    apifetching();
  }, [page]);

    return (
        <>
                                          <h3 className="text-[30px] font-thin mb-10 mt-10">Pagination : [useState, useEffect , Pagination , API]</h3>

    <div className="grid grid-cols-3 ">
      {api.map((e, index) => (
        <div key={index} className="border border-slate-600 m-2 p-3 rounded-md">
          <p>Comment: {e.body}</p>
          <p>Post ID: {e.postId}</p>
          <p>Likes: {e.likes}</p>
          <p>Username: {e.user.username}</p> {/* Correct user access */}
        </div>
      ))}
          
            </div>
            <div className='flex justify-center mt-5'>
            <div className='flex justify-between w-[300px] items-center'>
                { 
                    list.map((e, index) => (
                        <>
                            <button className='' onClick={()=>setPage(index+1)}  className={`px-4 py-2 rounded-md ${
              page === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}>{e}</button>
                        </>
                    ))
                }
            </div></div> 
            </>
  );
}

export default Pagination;
