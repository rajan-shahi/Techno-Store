import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
const MobileMenu = () => {
  const [nav, setNev] = useState(false);
  const handleClick = () => setNev(!nav);
  return (
    <div className=" flex justify-center">
      <div className=" w-10/12 py-4">
        <div className=" flex items-center justify-between">
          <img src={logo} alt="" />
          <div onClick={handleClick}>
          {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
          </div>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Features</li>
            <li>Electronics</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
