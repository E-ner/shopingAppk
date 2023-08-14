import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopingContext";

const CartItems = ({ data }) => {
  const contextValues = useContext(ShopContext);
  const { addToCart, cartItems, removeFromCart, updateCartItemCount } = contextValues;
  const cartItemAmount = cartItems[data.id];

  return (
    <div className="flex flex-row shadow-xl p-4">
      <img
        src={data.productImage}
        className="rounded-xl w-56 mt-5 mr-8"
        alt="no Image"
      />
      <span className="flex flex-col mt-4 self-center">
        <p className="self-start text-xl font-bold mb-5">{data.productName}</p>
        <p className="mb-6">${data.price * cartItemAmount}</p>
        <div className="flex flex-row self-center ">
          <button
            className="border bg-slate-200 h-6 rounded-md border-slate-400"
            onClick={() => {
              addToCart(data.id);
            }}
          >
            +
          </button>
          <input
            type="number"
            className="pl-2 w-20 border border-slate-400 rounded-lg"
            value={cartItemAmount}
            onChange={(e) => {
              updateCartItemCount(Number(e.target.value), data.id);
            }}
          />
          <button
            className="border bg-slate-200 rounded-md border-slate-400 w-4 h-6"
            onClick={() => {
              removeFromCart(data.id);
            }}
          >
            -
          </button>
        </div>
      </span>
    </div>
  );
};

export default CartItems;
