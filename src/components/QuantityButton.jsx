
import React, { useState } from 'react';

function QuantityButton({ product, onUpdate }) {
  const [count, setCount] = useState(0);

  function handleCountChange(newCount) {
    setCount(newCount);
    onUpdate({ id: product.id, name: product.name, price: product.price, quantity: newCount });
  }

  return (
    <div className="flex items-center rounded-md p-2">
      {count === 0 ? (
        <button 
          onClick={() => handleCountChange(1)} 
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          ADD
        </button>
      ) : (
        <>
          <button 
            onClick={() => handleCountChange(count - 1)} 
            className="text-red-600 text-xl font-bold px-2 hover:text-red-700 transition"
          >
            −
          </button>
          <span className="mx-4">{count}</span>
          <button 
            onClick={() => handleCountChange(count + 1)} 
            className="text-green-600 text-xl font-bold px-2 hover:text-green-700 transition"
          >
            +
          </button>
        </>
      )}
    </div>
  );
}

export default QuantityButton;
