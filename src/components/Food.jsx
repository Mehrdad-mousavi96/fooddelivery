import React, { useState } from "react";
import { data } from "../data.js";

const Food = () => {
  const [foods, setFoods] = useState(data);

  //   Filter Type Burgers/Pizza/Etc

  const filterType = (category) => {
    setFoods(data.filter((item) => item.category === category));
  };

  // Filter by price

  const filterPrice = (price) => {
    setFoods(data.filter((item) => item.price === price));
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300 hover:font-semibold hover:scale-105 m-1"
            >
              ALL
            </button>
            <button
              onClick={() => filterType("burger")}
              className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300 hover:font-semibold hover:scale-105 m-1"
            >
              Burger
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300 hover:font-semibold hover:scale-105 m-1"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300 hover:font-semibold hover:scale-105 m-1"
            >
              Chicken
            </button>
            <button
              onClick={() => filterType("salad")}
              className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300 hover:font-semibold hover:scale-105 m-1"
            >
              Salads
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300 hover:font-semibold hover:scale-105 m-1"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300 hover:font-semibold hover:scale-105 m-1"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300 hover:font-semibold hover:scale-105 m-1"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-300 hover:font-semibold hover:scale-105 m-1"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            key={index}
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-around px-2 py-4">
              <p className="font-semibold">{item.name}</p>
              <p className="">
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
