import React from "react";

const TableHeader = ({
  priceFilter,
  handlePrice,
  handleBrand,
  brandFilter,
}) => {
  return (
    <>
      <div className="w-full flex items-center bg-teal-600 py-2 border-b-4 border-teal-400">
        <div className="w-1/12 p-2 text-center text-white desktop:block mobile:hidden">
          Image
        </div>

        <div className="desktop:w-1/12 p-2 text-center text-white desktop:hidden mobile:block mobile:w-4/12">
          Filter By :
        </div>

        <div className="w-6/12 p-2 text-white desktop:block mobile:hidden">
          Product
        </div>

        <button
          className="desktop:w-1/12 p-2 text-center text-white flex justify-center mobile:4/12"
          onClick={(e) => handlePrice(e)}
        >
          Price
          <div className="flex flex-col ml-2 h-5">
            <div className="p-0 m-0 flex">
              <i
                className={`fa-solid fa-sort-up h-1 text-sm ${
                  priceFilter === false ? "text-white" : "text-teal-500"
                }`}
              ></i>
            </div>

            <div>
              <i
                className={`fa-solid fa-sort-down flex  h-1 text-sm ${
                  priceFilter === true ? "text-white" : "text-teal-500"
                }`}
              ></i>
            </div>
          </div>
        </button>

        <button
          className="desktop:w-2/12 p-2 text-center text-white flex justify-center mobile:4/12"
          onClick={(e) => handleBrand(e)}
        >
          Brand
          <div className="flex flex-col ml-2 text-white h-5">
            <div className="p-0 m-0 flex">
              <i
                className={`fa-solid fa-sort-up h-1 text-sm ${
                  brandFilter === false ? "text-white" : "text-teal-500"
                }`}
              ></i>
            </div>

            <div>
              <i
                className={`fa-solid fa-sort-down flex  h-1 text-sm ${
                  brandFilter === true ? "text-white" : "text-teal-500"
                }`}
              ></i>
            </div>
          </div>
        </button>

        <div className="w-2/12 p-2 text-center text-white desktop:block mobile:hidden">
          Action
        </div>
      </div>
    </>
  );
};

export default TableHeader;
