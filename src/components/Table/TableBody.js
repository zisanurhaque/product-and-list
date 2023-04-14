import React from "react";

const TableBody = ({ filtered, getPriceBDT, addToCart, dynamicButton }) => {
  return (
    <>
      {filtered.map((product, index) => (
        <div
          className="w-full desktop:flex items-center even:bg-slate-100 odd:bg-teal-100 py-2 mobile:block"
          key={index}
        >
          <div className="desktop:w-1/12 p-2 text-center flex justify-center mobile:w-full">
            <img
              src={product.thumbnail}
              alt={index}
              className="desktop:w-20 mobile:w-full"
            />
          </div>

          <div className="desktop:w-6/12 p-2 desktop:font-normal desktop:text-base desktop:text-left mobile:text-center mobile:w-full mobile:font-semibold mobile:text-lg">
            {product.title}
          </div>

          <div className="desktop:w-1/12 p-2 text-center mobile:w-full">{`৳${getPriceBDT(
            product.price
          )}`}</div>

          <div className="desktop:w-2/12 p-2 text-center mobile:w-full">
            {product.brand}
          </div>

          <div className="desktop:w-2/12 p-2 text-center mobile:w-full">
            {dynamicButton(product.title) === true ? (
              <button
                className="w-full bg-gray-400 text-white px-1 py-4 uppercase text-xs rounded-sm"
                disabled
              >
                Already Added
              </button>
            ) : (
              <button
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-1 py-4 uppercase text-xs rounded-sm flex gap-2 items-center justify-center"
                onClick={() => addToCart(product.title)}
              >
                <i className="fa-solid fa-cart-shopping"></i> Add To Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default TableBody;
