import React from "react";
import CartItem from "./CartItem";

const Cart = ({
  cart,
  getPriceBDT,
  deleteProduct,
  getTotalPrice,
  openCart,
  setOpenCart,
}) => {
  return (
    <>
      <div className="w-full bg-teal-600 text-white px-5 py-4 border-b-4 border-teal-400 flex items-center justify-between sticky top-0 left-0">
        <div className="flex items-center gap-2 text-white">
          <i className="fa-solid fa-cart-shopping"></i> Shopping Cart (
          {cart.length})
        </div>
        <button
          className="desktop:hidden mobile:block"
          onClick={() => setOpenCart(!openCart)}
        >
          <i className="fa-regular fa-circle-xmark text-xl"></i>
        </button>
      </div>
      {cart.length === 0 ? (
        <div className="p-5 w-full">Cart is empty</div>
      ) : (
        cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            getPriceBDT={getPriceBDT}
            deleteProduct={deleteProduct}
          />
        ))
      )}
      <div className="w-full flex flex-row p-5 py-4 border-t-2 border-teal-600 items-center sticky bottom-0 left-0 bg-white">
        <div className="desktop:w-6/12 desktop:block mobile:hidden"></div>

        <div className="desktop:w-4/12 desktop:block font-bold text-lg mobile:w-4/12 mobile:flex-1">
          Total Price
        </div>

        <div className="desktop:w-2/12 text-right font-bold text-lg mobile:w-4/12">{`৳${getTotalPrice()}`}</div>

        <div className="desktop:w-1/12 desktop:block mobile:hidden"></div>
      </div>
    </>
  );
};

export default Cart;
