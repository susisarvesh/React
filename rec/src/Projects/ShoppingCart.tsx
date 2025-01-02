import React, { useContext } from 'react';
import { ShoppingContext } from './ShopApi';

function ShoppingCart() {
  const { cart } = useContext(ShoppingContext);
  

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="py-2 border-b border-gray-300">
              <div className="flex justify-between">
                <span className="font-semibold">{item.title}</span>
                <span className="text-green-600">${item.price.toFixed(2)}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;
