import { data } from './data'
import React, { useState } from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import Cart from './Cart'

const Table = () => {

  // Cart Products

  const [cart, setCart] = useState([])

  const addToCart = (product) => {

    const theProduct = data.find((item) => {

      return item.title === product

    })

    setCart([...cart, theProduct])
    
  }

  // Get Price In Bangla

  const getPriceBDT = (price) => {

    const value = parseFloat(price).toLocaleString('bn-BD')
    return value

  }

  // Get Total Cart Price

  const getTotalPrice = () => {

    let value = 0;

    for(let i = 0; i < cart.length; i++){

      value = value += parseFloat(cart[i].price)

    }

    return value.toLocaleString("bn-BD")

  }

  // Delete Product From Shopping Cart Function

  const deleteProduct = (product) => {

      const value = cart.filter((item) => {
        
        return item.title !== product

      })

      setCart(value)

  }

  // his Function Is For Check, 
  // Is The Product Alredy Added To The Shopping Cart Or Not

  const dynamicButton = (item) => {

    const value = cart.filter((product) => {

      return product.title === item

    })

    if(value.length === 0){

      return false

    }
    
    else{

      return true

    }

  }

  const [filtered, setFiltered] = useState(data)

  const [priceFilter, setPriceFilter] = useState(null)

  const [brandFilter, setBrandFilter] = useState(null)

  // Filter Products By Price

  const handlePrice = (e) => {

    e.preventDefault()

    setBrandFilter(null)

    if(priceFilter === null){

      setPriceFilter(true)

      const value = data.sort((a, b) => {

        return a.price > b.price

      })

      setFiltered(value)

    }
    
    else if(priceFilter === true){

      setPriceFilter(false)

      const value = data.sort((a, b) => {

        return a.price < b.price

      })

      setFiltered(value)

    }

    else{

      setPriceFilter(true)

      const value = data.sort((a, b) => {

        return a.price > b.price

      })

      setFiltered(value)

    }

  }

  // Filter Products By Brand Name

  const handleBrand = (e) => {

    e.preventDefault()
    
    setPriceFilter(null)

    if(brandFilter === null){

      setBrandFilter(true)

      const value = data.sort((a, b) => {

        return a.brand < b.brand

      })

      setFiltered(value)

    }

    else if(brandFilter === true){

      setBrandFilter(false)

      const value = data.sort((a, b) => {

        return a.brand > b.brand

      })

      setFiltered(value)

    }

    else{

      setBrandFilter(true)

      const value = data.sort((a, b) => {

        return a.brand < b.brand

      })
      
      setFiltered(value)

    }

  }

  return (
    <>
        <div className='w-full'>

            <div className='desktop:w-10/12 mx-auto mobile:w-11/12'>

                {/* This Is Project Title */}

                <h1 className='text-center w-full desktop:py-10 desktop:text-4xl text-sky-800 font-bold uppercase border-b border-gray-200 mobile:text-xl mobile:py-5'>Product List & Shopping Cart</h1>

                <div className='w-full desktop:flex flex-row desktop:gap-5 desktop:py-20 mobile:py-5 mobile:gap-0 mobile:block'>

                    <div className='desktop:w-3/5 mobile:w-full'>

                        {/* Table Header Component */}

                        <TableHeader priceFilter={priceFilter} handlePrice={handlePrice} handleBrand={handleBrand} brandFilter={brandFilter}/>

                        {/* Table Body Component */}

                        <TableBody filtered={filtered} getPriceBDT={getPriceBDT} addToCart={addToCart} dynamicButton={dynamicButton}/>

                        
                    </div>

                    <div className='desktop:w-2/5 border h-max mobile:w-full desktop:mt-0 mobile:mt-10'>

                        <div className='w-full bg-teal-600 text-white px-5 py-4 border-b-4 border-teal-400'>Shopping Cart ({cart.length})</div>

                        {/* Shopping Cart Component */}

                        <Cart cart={cart} getPriceBDT={getPriceBDT} deleteProduct={deleteProduct}/>

                        {/* Shopping Cart's Bottom */}

                        <div className='w-full flex flex-row p-5 border-t-2 border-teal-600 items-center'>

                          <div className='desktop:w-6/12 desktop:block mobile:hidden'></div>

                          <div className='desktop:w-4/12 desktop:block font-bold text-lg mobile:w-4/12 mobile:flex-1'>Total Price</div>

                          {/* Get Total Value Of The Shopping Cart */}

                          <div className='desktop:w-2/12 text-right font-bold text-lg mobile:w-4/12'>{`৳${getTotalPrice()}`}</div>

                          <div className='desktop:w-1/12 desktop:block mobile:hidden'></div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </>
  )
}

export default Table