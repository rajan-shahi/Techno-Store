import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const MobileMenu = () => {
  const [nav, setNev] = useState(false);
  const handleClick = () => setNev(!nav);
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="fixed  border-b left-0 right-0 top-0 py-4  bg-white  z-50  md:hidden flex justify-center ">
      <div className=" w-full  md:w-10/12   ">
        <div className="  flex items-center justify-between cursor-pointer ">
          <img src={logo} alt="" className=" px-4" />
          <div onClick={handleClick} className=" px-4 ">
            {!nav ? (
              <AiOutlineMenu size={30} className=" text-black" />
            ) : (
              <AiOutlineClose size={30} className="  text-black" />
            )}
          </div>
        </div>
        <div>
          <ul
            className={
              !nav
                ? "hidden"
                : "   md:z-0 z-40  absolute   w-full py-6   top-14 flex flex-col  justify-center   bg-gray-500 items-center rounded-md   "
            }
          >
            <li
              onClick={handleClick}
              className={`${
                location.pathname === "/" ? " text-orange-500" : "text-gray-200"
              } cursor-pointer py-4 text-2xl  `}
            >
              {" "}
              <Link to={"/"}>Home</Link>
            </li>
            <li
              onClick={handleClick}
              className={`${
                location.pathname === "/signin"
                  ? " text-orange-500"
                  : "text-gray-200"
              } cursor-pointer py-4 text-2xl  `}
            >
              {" "}
              <Link to={"/signin"}>Sign in</Link>
            </li>

            <li
              onClick={handleClick}
              className={`${
                location.pathname === "/about"
                  ? " text-orange-500"
                  : "text-gray-200"
              } cursor-pointer py-4 text-2xl  `}
            >
              <Link to={"/about"}>About</Link>
            </li>

            <li
              onClick={handleClick}
              className={`${
                location.pathname === "/shopbar"
                  ? " text-orange-500"
                  : "text-gray-200"
              } cursor-pointer py-4 text-2xl  `}
            >
              {" "}
              <Link to={"/shopbar"}>Shop cards</Link>
            </li>
            <li
              onClick={handleClick}
              className={`${
                location.pathname === "/blog"
                  ? " text-orange-500"
                  : "text-gray-200"
              } cursor-pointer py-4 text-2xl  `}
            >
              {" "}
              <Link to={"/blog"}>Blog SideBar</Link>
            </li>
            <li
              onClick={handleClick}
              className={`${
                location.pathname === "/contact"
                  ? " text-orange-500"
                  : "text-gray-200"
              } cursor-pointer py-4 text-2xl  `}
            >
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
