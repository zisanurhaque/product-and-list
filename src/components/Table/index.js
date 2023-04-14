import { products } from "../../fake-db/products";
import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Cart from "../Cart";
import Header from "../Header";

const Table = () => {
  // Cart Products
  const [cart, setCart] = useState([]);

  const [filtered, setFiltered] = useState(products);

  const [priceFilter, setPriceFilter] = useState(null);

  const [brandFilter, setBrandFilter] = useState(null);

  const [openCart, setOpenCart] = useState(false);

  const addToCart = (product) => {
    const theProduct = products.find((item) => {
      return item.title === product;
    });

    setCart([...cart, theProduct]);
  };

  // Get Price In Bangla

  const getPriceBDT = (price) => {
    const value = parseFloat(price).toLocaleString("bn-BD");
    return value;
  };

  // Get Total Cart Price

  const getTotalPrice = () => {
    let value = 0;

    for (let i = 0; i < cart.length; i++) {
      value = value += parseFloat(cart[i].price);
    }

    return value.toLocaleString("bn-BD");
  };

  // Delete Product From Shopping Cart Function

  const deleteProduct = (product) => {
    const value = cart.filter((item) => {
      return item.title !== product;
    });

    setCart(value);
  };

  // his Function Is For Check,
  // Is The Product Alredy Added To The Shopping Cart Or Not

  const dynamicButton = (item) => {
    const value = cart.filter((product) => {
      return product.title === item;
    });

    if (value.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  // Filter Products By Price

  const handlePrice = (e) => {
    e.preventDefault();

    setBrandFilter(null);

    if (priceFilter === null) {
      setPriceFilter(true);

      const value = products.sort((a, b) => {
        return a.price > b.price;
      });

      setFiltered(value);
    } else if (priceFilter === true) {
      setPriceFilter(false);

      const value = products.sort((a, b) => {
        return a.price < b.price;
      });

      setFiltered(value);
    } else {
      setPriceFilter(true);

      const value = products.sort((a, b) => {
        return a.price > b.price;
      });

      setFiltered(value);
    }
  };

  // Filter Products By Brand Name

  const handleBrand = (e) => {
    e.preventDefault();

    setPriceFilter(null);

    if (brandFilter === null) {
      setBrandFilter(true);

      const value = products.sort((a, b) => {
        return a.brand < b.brand;
      });

      setFiltered(value);
    } else if (brandFilter === true) {
      setBrandFilter(false);

      const value = products.sort((a, b) => {
        return a.brand > b.brand;
      });

      setFiltered(value);
    } else {
      setBrandFilter(true);

      const value = products.sort((a, b) => {
        return a.brand < b.brand;
      });

      setFiltered(value);
    }
  };

  return (
    <>
      <Header />
      <button
        className="text-white h-10 w-10 bg-teal-600 flex justify-center items-center fixed right-0 bottom-28 desktop:hidden mobile:flex"
        onClick={() => setOpenCart(!openCart)}
      >
        <i className="fa-solid fa-cart-shopping"></i>
        <span className="text-sm mb-3 ml-1">{cart.length}</span>
      </button>
      <div className="w-full desktop:flex flex-row desktop:gap-10 desktop:py-12 mobile:py-5 mobile:gap-0 mobile:block">
        <div className="desktop:w-3/5 mobile:w-full">
          <TableHeader
            priceFilter={priceFilter}
            handlePrice={handlePrice}
            handleBrand={handleBrand}
            brandFilter={brandFilter}
          />

          <TableBody
            filtered={filtered}
            getPriceBDT={getPriceBDT}
            addToCart={addToCart}
            dynamicButton={dynamicButton}
          />
        </div>

        <div
          className={`desktop:w-2/5 border desktop:h-max mobile:h-screen mobile:overflow-y-scroll mobile:w-full mt-0 desktop:relative mobile:fixed ${
            openCart
              ? "mobile:right-0 desktop:right-0"
              : "mobile:-right-full desktop:right-0"
          } mobile:top-0 mobile:z-50 bg-white`}
        >
          <Cart
            cart={cart}
            getPriceBDT={getPriceBDT}
            deleteProduct={deleteProduct}
            getTotalPrice={getTotalPrice}
            openCart={openCart}
            setOpenCart={setOpenCart}
          />
        </div>
      </div>
    </>
  );
};

export default Table;
