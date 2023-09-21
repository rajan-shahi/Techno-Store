import React from "react";
import { BsArrowRight } from "react-icons/bs";
import about from "../assets/about.jpg";
const BlogSideBar = () => {
  return (
    <div className=" flex justify-center flex-col">
      <div className=" flex justify-start items-center py-6  px-56 gap-6 border-b-2 w-full">
        <div className=" flex justify-center items-center">
          <h1 className=" text-sm text-gray-500 hover:text-orange-400 cursor-pointer">
            Home
          </h1>
        </div>
        <div className=" flex justify-center items-center gap-1">
          <span className=" text-gray-600">
            <BsArrowRight size={20} />
          </span>
          <h1 className=" text-sm text-gray-500 hover:text-orange-400 cursor-pointer">
            Shop
          </h1>
        </div>
        <div className=" flex justify-center items-center gap-1">
          <span className=" text-gray-600">
            <BsArrowRight size={20} />
          </span>
          <h1 className=" border px-4 py-2 rounded-full text-sm text-gray-500 hover:bg-orange-400 hover:text-white cursor-pointer">
            Smartphones
          </h1>
        </div>
      </div>
      <div className=" flex  justify-center items-center w-10/12 py-4">
        {/* left */}
        <div className=" flex flex-col justify-center w-8/12">
            <div>
                <img src={about} alt="" />
            </div>
        </div>
        {/* right */}
        <div className=" flex flex-col justify-center w-2/12">left</div>
      </div>
    </div>
  );
};

export default BlogSideBar;
