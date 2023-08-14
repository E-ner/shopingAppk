import React, { useContext } from "react";
import { PRODUCTS } from "../constants/products";
import { ShopContext } from "../context/ShopingContext";
import CartItems from "../components/CartItems";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const contextValues = useContext(ShopContext);
  const { cartItems, getTotalCart } = contextValues;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col mb-3">
      <div className="self-center mt-6">
        <h1 className="font-bold text-2xl">Your Cart Items</h1>
      </div>
      <div className="self-center flex flex-col p-2">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems key={product.id} data={product} />;
          }
        })}
      </div>
      {getTotalCart() > 0 ? (
        <div className="mt-5 flex flex-col">
          <p className="self-center">Subtotal: {getTotalCart()}$</p>
          <div className="self-center mt-6">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="bg-black text-white p-2 rounded-xl mr-4"
            >
              Continue Shopping
            </button>
            <button className="bg-black text-white p-2 rounded-xl">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1 className="self-center text-xl">You have no cart</h1>
      )}
    </div>
  );
};

export default Cart;
