import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="  z-30 bg-white md:fixed md:left-0 md:right-0   flex justify-center  border-b-2 md:pt-4 pt-14 pb-4 ">
      {/* container */}
      <div
      
        className="py-3 w-10/12 flex flex-col gap-5  md:flex-row  justify-between text-xs  items-center sticky "
      >
        {/* leftbar */}
        <div className="md:flex hidden">
          <img className=" cursor-pointer" sizes="20" src={logo} alt="" />
        </div>

        {/* midbar */}
        <div className=" text-gray-600">
          <p>
            {" "}
            <span className= "text-orange-600   text-sm md:text-xl ">Call Us: </span>{" "}
            <span className=" cursor-pointer text-sm md:text-lg">(+977) 9866448106</span>
          </p>
        </div>

        {/* mobile menu */}
        <div className=" flex  gap-3 md:hidden items-center">
          <select
            id=""
            className=" border-2  px-4 py-2 rounded-full  items-center flex text-gray-600"
          >
            <option value="">My Account</option>
            <option value="Login">Login</option>
            <option value="Wishlist">Wishlist</option>
            <option value="My Cart">My Cart</option>
            <option value="CheckOut">CheckOut</option>
          </select>
          <select
            id=""
            className=" border-2  px-4 py-2 rounded-full  items-center flex text-gray-600"
          >
            <option value="">USD</option>
            <option value="USD">USD</option>
            <option value="Euro">Euro</option>
            <option value="Dolar">Dolar</option>
            <option value="Nepali">Nepali</option>
          </select>
          <select
            id=""
            className=" border-2  px-4 py-2 rounded-full  items-center flex text-gray-600"
          >
            <option value="">Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>            <option value="Nepali">Nepali</option>
            <option value="Espanol">Espanol</option>
            <option value="Italion">Italion</option>
            <option value="Turkish">Turkish</option>
            rajan bahadur shahi
          </select>
        </div>

        {/* righrbar */}

        <div className=" hidden md:flex gap-4 text-gray-600 text-xl ">
          <Link to={"/contact"}>
            <p className=" border-r-2 text-md  pr-2 hover:text-orange-600 cursor-pointer">
              Contact
            </p>
          </Link>
          <Link to={"/about"}>
            <p className=" border-r-2 pr-2  hover:text-orange-600 cursor-pointer">
              About
            </p>
          </Link>

          <Link to={"/shopbar"}>
            <p className=" border-r-2 pr-2 hover:text-orange-600 cursor-pointer">
              Shop Cards
            </p>
          </Link>
          
          <Link to={"/blog"}>
            <p className=" border-r-2 pr-2 hover:text-orange-600 cursor-pointer">
              Blog SideBar
            </p>
          </Link>

          <Link to={"/signin"}>
            <p className="  hover:text-orange-600 cursor-pointer">Sign in</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
