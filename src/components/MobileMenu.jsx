import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
const MobileMenu = () => {
  const [nav, setNev] = useState(false);
  const handleClick = () => setNev(!nav);
  return (
    <div  className="  md:hidden flex justify-center ">
      <div className=" w-full  md:w-10/12 py-4   ">
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
                : "   md:z-0 z-40  absolute   w-full py-6   flex flex-col  justify-center   bg-gray-500 items-center rounded-md   "
            }
          >
           
        
            <li className="  hover:text-orange-400 cursor-pointer py-4 text-4xl  text-gray-200">
            <Link to="Home" spy={true} smooth={true} duration={500}>Home</Link>
            </li>
            
            <li className="   hover:text-orange-400 cursor-pointer py-4 text-4xl text-gray-200">
            <Link to="NewArrivals" spy={true} smooth={true} duration={500}>  New Arrivals</Link>  
            </li>
            <li className="   hover:text-orange-400  cursor-pointer py-4 text-4xl  text-gray-200">
            <Link to="featured" spy={true} smooth={true} duration={500}> Features</Link>
            </li>
            <li className="   hover:text-orange-400 cursor-pointer py-4 text-4xl  text-gray-200">
            <Link to="smartPhone" spy={true} smooth={true} duration={500}> SmartPhones</Link> 
            </li>
            <li className="   hover:text-orange-400 cursor-pointer py-4 text-4xl  text-gray-200">
            <Link to="product" spy={true} smooth={true} duration={500}>  Recent Products</Link>
            </li>
            <li className="   hover:text-orange-400 cursor-pointer py-4 text-4xl  text-gray-200">
            <Link to="seller" spy={true} smooth={true} duration={500}> Bestsellers</Link> 
            </li>
            <li className="   hover:text-orange-400   cursor-pointer py-4 text-4xl  text-gray-200">
            <Link to="payment" spy={true} smooth={true} duration={500}> Payments</Link> 
            </li>
            <li className="   hover:text-orange-400   cursor-pointer py-4 text-4xl  text-gray-200">
            <Link to="contact" spy={true} smooth={true} duration={500}> Contacts</Link> 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
