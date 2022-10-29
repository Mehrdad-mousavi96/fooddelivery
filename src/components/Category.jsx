import React from "react";
import { categories } from "../data";

const Category = () => {
  console.log(categories);

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-center py-4 text-4xl">
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            className="bg-gray-100 px-6 hover:bg-gray-200 hover:cursor-pointer rounded-lg flex justify-between items-center"
            key={index}
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img className="w-20" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
