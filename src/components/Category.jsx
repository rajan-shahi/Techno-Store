import React from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";

const Category = () => {
  return (
    <div className=" h-[8vh] bg-orange-400 flex justify-center">
      {/* contaner */}
      <div className=" w-10/12 ">
        {/* Category left */}
        <div>
          <div className=" flex items-center gap-4 w-[200px] bg-gray-600 text-white  py-4 px-4 rounded-2xl">
            <span>
              <AiOutlineAlignLeft size={30} />
            </span>
            <h2>ALL CATEGORIES</h2>
          </div>
        </div>
        {/* Mid components */}
        <div></div>
        {/* rigt  */}
        <div></div>
      </div>
    </div>
  );
};

export default Category;
