import { div } from 'framer-motion/client';
import React, { useEffect, useReducer, useState } from 'react';
import ShoppingCart from './ShoppingCart';
import { createContext } from 'react';
interface StoreType {
  title: string;
  description: string;
  price: number;
  images: string[];
  category: { name: string };
}
interface Action { 
  type: string;
  payload?:StoreType
}
interface State { 
  store:StoreType
}
const reducer = (state:State,action:Action) => { 
  switch (action.type) {
    case "ADD_ITEM":
      return {
          ...state,
        cart: [...state.cart, action.payload],
        
      }
  
    default:
      return state;
  }
}
// interface ContextType {
//   cart: any[];

//  }

export const ShoppingContext = createContext({ cart: [], dispatch: () => { } })

function ShopApi() {
  const [store, setStore] = useState<StoreType[]>([]);
  const [cart, dispatch] = useReducer(reducer, {
    cart:[]
  }) 
  useEffect(() => { 
    const fetchCartData = async () => {
      const req = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await req.json();
      // console.log(data);
      setStore(data.slice(0, 40)); // Limit to 40 products
    };
    fetchCartData();
  }, []);
  const handleSend = (item:StoreType) => {
  dispatch({
    type: 'ADD_ITEM',
    payload:item
  });
  };
  // useEffect(() => { 
  //   console.log(cart);
    
  // },[handleSend])


  return (
    <>
       <h3 className="text-[30px] font-thin mb-10 mt-10">Quiz App:[useState , useReducer , useContext , Condition Checking]</h3>
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {store.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md"
          >
            {item.images.slice(0, 1).map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image}
                alt={item.title}
                className="object-cover w-full h-48"
              />
            ))}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {item.title}
              </h2>
              
              <p className="mt-2 text-lg font-bold text-green-600">
                ${item.price.toFixed(0)}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Category: {item.category?.name || 'N/A'}
              </p>
            </div>
            <div className="p-4">
              <button className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700" onClick={()=>handleSend(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
      <ShoppingContext.Provider value={{ cart:cart.cart, dispatch }}>
        <ShoppingCart></ShoppingCart>
      </ShoppingContext.Provider>
      </>
  );
}

export default ShopApi;
