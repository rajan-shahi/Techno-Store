import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const MobileMenu = () => {
  const [nav, setNev] = useState(false);
  const handleClick = () => setNev(!nav);
  return (
    <div className="fixed left-0 right-0 top-0 py-3  bg-white   z-50  md:hidden flex justify-center ">
      <div className=" w-full  md:w-10/12   ">
        <div className="     flex items-center justify-between cursor-pointer ">
          <img src={logo} alt="" className=" px-4" />
          <div onClick={handleClick} className=" px-4 ">
            {!nav ? (
              <AiOutlineMenu size={30} className=" text-black" />
            ) : (
              <AiOutlineClose size={30} className="  text-black" />
            )}
          </div>
        
        </div>
        <div className=" ">
          <ul
            className={
              !nav
                ? "hidden"
                : "   md:z-0 z-40  absolute   w-full py-6   flex flex-col  justify-center   bg-gray-500 items-center rounded-md   "
            }
          >
            <li className="   hover:text-orange-400  cursor-pointer py-4 text-4xl  text-gray-200">
              {" "}
              <Link to={"/signin"}>Sign in</Link>
            </li>

            <li className="  hover:text-orange-400 cursor-pointer py-4 text-4xl  text-gray-200">
              <Link to={"/about"}>About</Link>
            </li>

            <li className="   hover:text-orange-400 cursor-pointer py-4 text-4xl text-gray-200">
              {" "}
              <Link to={"/shopbar"}>Shop cards</Link>
            </li>

            <li className="   hover:text-orange-400 cursor-pointer py-4 text-4xl text-gray-200">
              {" "}
              <Link to={"/blog"}>Blog SideBar</Link>
            </li>
            <li className="   hover:text-orange-400  cursor-pointer py-4 text-4xl  text-gray-200">
              {" "}
              <Link to={"/contact"}>Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
