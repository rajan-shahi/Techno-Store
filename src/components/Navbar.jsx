
import { Link} from "react-router-dom";
import logo from "../assets/logo.png";
import MobileMenu from "../components/MobileMenu";
import { useState } from "react";

const Navbar = () => {
  const [Nav,setNav] =useState("Home");



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
            <p onClick={()=>{setNav("Home");}}
            className="  hover:text-orange-600 cursor-pointer">
           Home {Nav ==="Home" ? <hr/>: <></>}
            </p>
          </Link>
          <Link to={"/about"}>
          <p onClick={()=>{setNav("About");}}
            className="  hover:text-orange-600 cursor-pointer">
           About {Nav ==="About" ? <hr/>: <></>}
            </p>
          </Link>

          <Link to={"/shopbar"}>
          <p onClick={()=>{setNav("Shop Cards");}}
            className="  hover:text-orange-600 cursor-pointer">
           Shop Cards {Nav ==="Shop Cards" ? <hr/>: <></>}
            </p>
          </Link>

          <Link to={"/blog"}>
          <p onClick={()=>{setNav("Blog SideBar");}}
            className="  hover:text-orange-600 cursor-pointer">
           Blog SideBar {Nav ==="Blog SideBar" ? <hr/>: <></>}
            </p>
          </Link>

          <Link to={"/contact"}>
          <p onClick={()=>{setNav("Contact");}}
            className="  hover:text-orange-600 cursor-pointer">
           Contact {Nav ==="Contact" ? <hr/>: <> </>}
            </p>
          </Link>
          <Link to={"/signin"}>
          <p onClick={()=>{setNav("Login");}}
            className="  hover:text-orange-600 cursor-pointer">
           Login  {Nav ==="Login" ? <hr/>: <></>}
            </p>
          </Link>
        </div>
      </div>
      <MobileMenu />
    </div>
  );
};

export default Navbar;
