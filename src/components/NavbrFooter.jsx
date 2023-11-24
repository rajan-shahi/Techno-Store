import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsArrowLeftRight } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
const NavbrFooter = () => {
  return (
    <div className=" hidden md:flex   md:pt-36 md:pb-10 h-[120px] justify-center  items-center">
      {/* container */}
      <div className="   w-full md:w-10/12 flex justify-between ">
        {/* left */}
        <div className=" flex  w-[500px] border-2 rounded-full  px-2 text-sm">
          <div className=" flex items-center">
            <select
              id=""
              className=" border-r-2  px-4 py-1  items-center flex text-gray-600"
            >
              <option value="">All Category</option>
              <option className="text-2xl" value="Electronics">
                Electronics
              </option>
              <option value="Components">Components</option>
              <option value="Laptop">Laptop</option>
              <option value="Monitor">Monitor</option>
              <option value="MP3">MP3 </option>
              <option value="Scanner">Scanner</option>
              <option className="text-2xl" value="">
                {" "}
                Furniters
              </option>
              <option value="">Bookcase</option>
              <option value="">Tv stand</option>
              <option value="">Desks</option>
              <option value="">Chairs</option>
              <option className="text-2xl" value="">
                Accessories
              </option>
              <option value="">Software</option>
              <option value="">Mobile</option>
              <option value="">Media</option>
              <option value="">Printers</option>
            </select>
          </div>
          <div className=" flex items-center gap-2 pl-2">
            <input
              className=" w-[310px] flex focus:outline-none "
              type="text"
              placeholder="search what you looking for ?"
            />
          </div>
          <span className=" bg-gray-200 py-2 px-8 rounded-full cursor-pointer">
            <FiSearch size={30} />
          </span>
        </div>
        {/* right */}
        <div className=" flex items-center gap-8">
          <span className=" rounded-full px-3 py-3 border-2 hover:border-orange-300   hover:border-2 cursor-pointer">
            <BsArrowLeftRight size={30} className=" text-gray-300" />
          </span>
          <span className=" rounded-full px-3 py-3 border-2 hover:border-orange-300  hover:border-2 cursor-pointer">
            <AiOutlineHeart size={30} className=" text-gray-300" />
          </span>
          <span className=" rounded-full px-3 py-3 border-2 hover:border-orange-300  hover:border-2 cursor-pointer">
            <FaShoppingCart size={30} className=" text-gray-300" />
          </span>
          <p className=" rounded-full px-2 py- bg-orange-600 ml-[-40px] mt-[-30px] cursor-pointer text-white">
            4
          </p>
          <p className=" ml-[-30px] hover:text-orange-600 cursor-pointer">
            $0.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavbrFooter;
