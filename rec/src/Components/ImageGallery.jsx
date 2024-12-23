import React from 'react'

function ImageGallery({ arr }) {
    const image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLHrj_-6YTw_xdy0fG0-9Jf0nDy8czj-fig&s"
  return (
      <div>
          <h3 className="text-[30px] font-thin mb-10 mt-10">Image Gallery: [useState , Props , Grids , List]</h3>
          <div className='grid grid-cols-1 bg-gray-100 border border-gray-800 m-2 rounded-md lg:grid-cols-4'>
              {arr.map((ele,index) => (
                  <>
                      <div key={index} className='m-2' >
                          <div>
                              <img src={image} alt={`${ele} image`} className='h-[200px] rounded-md bg-gray-500 w-full object-cover' />
                              <h3>{ele}</h3>
                      </div>
                      </div>
                  </>
              ))
                
              }
              
          </div>

    </div>
  )
}

export default ImageGallery