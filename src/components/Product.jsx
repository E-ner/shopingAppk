import React, { useContext } from "react";
import { ShopContext } from "../context/ShopingContext";

const Product = ({ name, id, image, price }) => {
  const contextValues = useContext(ShopContext);
  const { addToCart, cartItems } = contextValues;
  const cartItemAmount = cartItems[id];
  return (
    <div>
      <img src={image} className="rounded-xl" />
      <span className="flex flex-col mt-3">
        <p className="self-center text-lg font-bold">{name}</p>
        <p>${price}</p>
      </span>
      <button
        className="border border-black rounded-2xl text-sm h-10 p-2 pb-0 pt-0 hover:bg-black hover:text-white"
        onClick={() => {
          addToCart(id);
        }}
      >
        Add cart{cartItemAmount > 0 && <> ({cartItemAmount}) </>}
      </button>
    </div>
  );
};

export default Product;
