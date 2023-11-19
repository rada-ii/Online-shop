import React from "react";

const Cart = ({ cart, removeFromCart }) => (
  <>
    <h2 className="text-center mt-6 text-lg text-indigo-950 font-semibold transition-all">
      Your Cart
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-4 mt-8">
      {cart.map((item) => (
        <div key={item.id} className="flex flex-col items-center text-gray-600">
          <p className="my-8">{item.name}</p>
          <img
            src={item.images[0]}
            alt={`${item.name}-0`}
            className="w-1/2 h-40 object-cover mb-4 rounded-md"
          />
          <button
            className="my-4 bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-950"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
      {cart.length === 0 ? (
        <p className="text-center text-gray-700 font-semibold text-lg mt-8 mx-auto ">
          Your cart is empty
        </p>
      ) : null}
    </div>
  </>
);

export default Cart;
