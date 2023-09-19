import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex justify-center  border-b-2  ">
      rajan
      {/* container */}
      <div
        name="navbar"
        className=" z-20 py-3 w-10/12 flex flex-col gap-5  md:flex-row  justify-between text-xs  items-center sticky "
      >
        {/* leftbar */}
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
            <p className=" hover:text-orange-600 cursor-pointer">Shop Cards</p>
          </Link>
        </div>
        {/* midbar */}
        <div className=" text-gray-600">
          <p>
            {" "}
            <span className="text-orange-600 ">Call Us: </span>{" "}
            <span className=" cursor-pointer">(888) 123456789</span>
          </p>
        </div>
        {/* righrbar */}
        <div className=" flex gap-4 text-gray-600">
          <select className=" flex flex-col  border-r-2  px-4 cursor-pointer ">
            <option value=""> My Account</option>
            <option value="Login">Login</option>
            <option value="Wishlist">Wishlist</option>
            <option value="My Cart">My cart</option>
            <option value="My Account">My Account</option>
            <option value="Checkout">CheckOut</option>
          </select>
          <select id="" className=" border-r-2  px-4 cursor-pointer">
            <option value="">USD</option>
            <option value="Euro">Euro</option>
            <option value="Dolar">Dolar</option>
          </select>
          <select id="" className=" cursor-pointer text-sm">
            <option value="">Language</option>
            <option value="Turkish">Turkish</option>
            <option value="Englidh">English</option>
            <option value="Espanol">Espanol</option>
            <option value="Italion">Italion</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
