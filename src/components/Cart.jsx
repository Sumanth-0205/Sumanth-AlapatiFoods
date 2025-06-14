import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Cart() {
   const { cart, handleUpdateCart } = useContext(CartContext);

   function increaseQuantity(productId) {
    const item = cart[productId];
    handleUpdateCart({ id: productId, name: item.name, price: item.price, quantity: item.quantity + 1 });
  }

  function decreaseQuantity(productId) {
    const item = cart[productId];
    if (item.quantity > 1) {
      handleUpdateCart({ id: productId, name: item.name, price: item.price, quantity: item.quantity - 1 });
    } else {
      handleUpdateCart({ id: productId, name: item.name, price: item.price, quantity: 0 }); // Remove if 0
    }
  }

  function deleteItem(productId) {
    handleUpdateCart({ id: productId, name: cart[productId].name, price: cart[productId].price, quantity: 0 });
  }

  const totalPrice = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      {Object.keys(cart).length > 0 ? (
        <>
          <ul>
            {Object.entries(cart).map(([productId,item]) => (
                            <li key={productId} className="flex justify-between items-center gap-4">
                {item.name} - ₹{item.price} X {item.quantity} - Total: ₹{item.price * item.quantity}
                <div className="flex items-center">
                  <button 
                    onClick={() => decreaseQuantity(productId)} 
                    className="text-red-500 text-xl font-bold px-3 hover:text-red-700 transition"
                  >
                    −
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button 
                    onClick={() => increaseQuantity(productId)} 
                    className="text-green-500 text-xl font-bold px-3 hover:text-green-700 transition"
                  >
                    +
                  </button>
                  <button 
                    onClick={() => deleteItem(productId)} 
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700 transition ml-4"
                  >
                    <FontAwesomeIcon icon={faTrash} /> Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="mt-4 text-xl font-bold text-green-700">Grand Total: ₹{totalPrice}</h3>
        </>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
