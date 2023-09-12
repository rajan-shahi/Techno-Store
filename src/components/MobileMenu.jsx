import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
const MobileMenu = () => {
  const [nav, setNev] = useState(false);
  const handleClick = () => setNev(!nav);
  return (
    <div className=" flex justify-center ">
      <div className=" w-full  md:w-10/12 py-4  ">
        <div className=" flex items-center justify-between cursor-pointer ">
          <img src={logo} alt="" className=" px-4" />
          <div onClick={handleClick} className=" px-4 ">
            {!nav ? (
              <AiOutlineMenu size={30} className=" text-black" />
            ) : (
              <AiOutlineClose size={30} className="  text-black" />
            )}
          </div>
        </div>
        <div className="  py-4">
          <ul
            className={
              !nav
                ? "hidden"
                : "   md:z-0 z-40  absolute   w-full py-7   flex flex-col  justify-center   bg-gray-500 items-center rounded-md   "
            }
          >
            <li className="  hover:text-orange-400 cursor-pointer py-4 text-4xl  text-gray-200">
              Home
            </li>
            <li className="   hover:text-orange-400 cursor-pointer py-4 text-4xl text-gray-200">
              Shop
            </li>
            <li className="   hover:text-orange-400  cursor-pointer py-4 text-4xl  text-gray-200">
              Features
            </li>
            <li className="   hover:text-orange-400 cursor-pointer py-4 text-4xl  text-gray-200">
              Electronics
            </li>
            <li className="   hover:text-orange-400 cursor-pointer py-4 text-4xl  text-gray-200">
              Pages
            </li>
            <li className="   hover:text-orange-400 cursor-pointer py-4 text-4xl  text-gray-200">
              Blog
            </li>
            <li className="   hover:text-orange-400   cursor-pointer py-4 text-4xl  text-gray-200">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
