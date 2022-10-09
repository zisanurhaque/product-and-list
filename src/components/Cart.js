import React from 'react'

const Cart = ({cart, getPriceBDT, deleteProduct}) => {
  return (
    <>
        {

            // 'cart' is an array where all the products(user chosen) will store

            cart.length === 0 ? <div className='p-5 w-full'>Cart is empty</div> :

            cart.map((item, index) => (

                <div className='w-full desktop:flex flex-row text-xs items-center odd:bg-slate-50 even:bg-gray-1200 px-3 mobile:block' key={index}>

                    {/* Get Product Image Or Thumbnail */}

                    <div className='desktop:w-2/12 p-2 mobile:w-full'>
                        
                        <img src={item.thumbnail} alt={index} className="desktop:w-4/6 mobile:w-full"/>

                    </div>

                    {/* Get Product Title */}

                    <div className='desktop:w-6/12 p-2 desktop:text-left mobile:text-center mobile:w-full'>

                        {item.title}

                    </div>

                    {/* Get Product Individual Price */}

                    <div className='desktop:w-3/12 p-2 desktop:text-right mobile:w-full mobile:text-center'>

                        {`৳${getPriceBDT(item.price)}`}

                    </div>

                    {/* Delete The Product From Shopping Cart */}

                    <div className='desktop:w-1/12 p-2 desktop:text-right mobile:w-full mobile:text-center'>

                        <button onClick={() => deleteProduct(item.title)} className="flex justify-center items-center p-3 rounded hover:bg-gray-200 desktop:w-max mobile:w-full mobile:bg-gray-200 mobile:hover:bg-gray-300">
                        <i className="fa-regular fa-trash-can text-red-500"></i>
                        <p className='text-red-500 ml-2 desktop:none mobile:hidden'>Remove From Cart</p>
                        </button>

                    </div>

                </div>

            ))
        }
    </>
  )
}

export default Cart