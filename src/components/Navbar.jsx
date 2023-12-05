import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import MobileMenu from "../components/MobileMenu";

const Navbar = () => {
  return (
    <div className=" z-30 bg-white md:fixed md:left-0 md:right-0   flex justify-center   md:border-b md:pt-4 pt-14  md:pb-4 md:py-0  py-2">
      {/* container */}
      <div className=" w-10/12 flex flex-col gap-5  md:flex-row  justify-between text-sm  items-center sticky">
        {/* leftbar */}
        <div className="md:flex hidden">
          <img className=" cursor-pointer" sizes="10" src={logo} alt="" />
        </div>

        {/* rightbar */}
        <div className=" hidden md:flex gap-8 text-gray-600 text-sm  font-bold">
          <Link to={"/"}>
            <p className=" hover:border-b  border-orange-600 duration-500 hover:text-orange-600 cursor-pointer">
              Home
            </p>
          </Link>
          <Link to={"/about"}>
            <p className="  hover:border-b  border-orange-600 duration-500  hover:text-orange-600 cursor-pointer">
              About
            </p>
          </Link>

          <Link to={"/shopbar"}>
            <p className="  hover:border-b  border-orange-600 duration-500 hover:text-orange-600 cursor-pointer">
              Shop Cards
            </p>
          </Link>

          <Link to={"/blog"}>
            <p className="  hover:border-b  border-orange-600 duration-500 hover:text-orange-600 cursor-pointer">
              Blog SideBar
            </p>
          </Link>

          <Link to={"/contact"}>
            <p className="  hover:border-b  border-orange-600 duration-500  text-md  pr-2 hover:text-orange-600 cursor-pointer">
              Contact
            </p>
          </Link>
          <Link to={"/signin"}>
            <p className="  hover:border-b  border-orange-600 duration-500 hover:text-orange-600 cursor-pointer">
              Sign in
            </p>
          </Link>
        </div>
      </div>
      <MobileMenu />
    </div>
  );
};

export default Navbar;
