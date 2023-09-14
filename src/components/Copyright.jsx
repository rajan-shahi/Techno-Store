import React from "react";
import { Link } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";
const Copyright = () => {
  return (
    <div className=" flex justify-center">
      <div className=" justify-between flex w-full md:w-10/12  pb-6 px-8 text-sm sm:text-md">
        <div className=" cursor-pointer">
          <p>All Rights Reserved © Rajan Bahadur Shahi 2023</p>
        </div>
        <div>
          <Link to="navbar" spy={true} smooth={true} duration={500}>
            <AiOutlineArrowUp size={30}  className=" cursor-pointer"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
