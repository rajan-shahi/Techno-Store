import React from "react";
import Logo from "../assets/logo.png";
import Ft1 from "../assets/ft-01.png";
import Ft2 from "../assets/ft-02.png";
import Ft3 from "../assets/ft-03.png";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <div className=" flex justify-center">
      {/* container */}
      <div className=" flex flex-col  w-10/12 py-10">
        {/* top */}
        <div className=" flex gap-14 bg-gray-100 py-8  px-6 justify-center items-center">
          <div className=" flex flex-col gap-2 text-gray-600 text-sm  ">
            <img
              sizes="20"
              className=" pb-8 cursor-pointer"
              src={Logo}
              alt=""
            />
            <p className=" text-2xl">Got Question ? Call Us 24/7!</p>
            {Calls.map((call, index) => (
              <p className="hover:text-orange-600 " key={index}>{call.name}</p>
            ))}
            <div className=" flex gap-6 text-gray-400 pt-1">
              <span className=" hover:text-gray-600 cursor-pointer">
                <BiLogoFacebook size={20} />
              </span>
              <span className=" hover:text-gray-600 cursor-pointer">
                <AiOutlineTwitter size={20} />
              </span>
              <span className=" hover:text-gray-600 cursor-pointer">
                <FaInstagram size={20} />
              </span>
              <span className=" hover:text-gray-600 cursor-pointer">
                <AiFillGoogleCircle size={20} />
              </span>
              <span className=" hover:text-gray-600 cursor-pointer">
                <AiFillLinkedin size={20} />
              </span>
            </div>
          </div>
          <div className=" flex flex-col gap-2 text-gray-600 text-sm">
            <h1 className=" text-3xl">Find By Categories</h1>
            {Categories.map((categorie, index) => (
              <p className="hover:text-orange-600 " key={index}>{categorie.name}</p>
            ))}
          </div>
          <div className=" flex flex-col gap-2 text-gray-600 text-sm">
            <h1 className=" text-3xl">Customer Care</h1>
            {links.map((link, index) => (
              <p className="hover:text-orange-600 " key={index}>{link.name}</p>
            ))}
          </div>
          <div className=" flex flex-col gap-2 text-gray-600 text-sm">
            <h1 className=" text-3xl">Sign Up To New Letter</h1>
            <p>Make sure that you never miss our interesting</p>
            <p>news by joining our newsletter program</p>
            <input
              name="email"
              className=" p-4 rounded-full bg-transparent  border border-gray-400 focus:outline-none cursor-pointer"
              type="text"
              placeholder=" Your E-Mail"
            />
            <div className=" flex items-center gap-4 p-4 cursor-pointer">
              <img src={Ft1} alt="" />
              <img src={Ft2} alt="" />
              <img src={Ft3} alt="" />
            </div>
          </div>
        </div>
        {/* button */}
        <div className=" flex justify-center bg-gray-100 pb-10 ">
          <div className=" flex flex-col items-center">
            <h1>Mobile Apps</h1>
            <div className=" flex py-4 px-4 gap-6">
              <h2 className=" py-4 px-12  rounded-full border border-gray-600 cursor-pointer hover:border-orange-600">
                App Store
              </h2>
              <h2 className=" px-12 py-4 border rounded-full border-gray-600 cursor-pointer hover:border-orange-600">
                Google Play
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const links = [
  {
    name: "Contac Us",
  },
  {
    name: "Site Map",
  },
  {
    name: "MY Account",
  },
  {
    name: "Wish List",
  },
  {
    name: "Delivery Information",
  },
  {
    name: "Privacy Policy",
  },
  {
    name: "Terms & Conditions",
  },
];

const Calls = [
  {
    name: "Call Us: (888) 1234 56789",
  },
  {
    name: "Po Box CT16122 Collins Street",
  },
  {
    name: "West,Victoria 8007,",
  },
  {
    name: "Austrails.",
  },
];

const Categories = [
  {
    name: "Desktops",
  },
  {
    name: "Laptops & Notebooks",
  },
  {
    name: "Components",
  },
  {
    name: "Tablets",
  },
  {
    name: "Software",
  },
  {
    name: "Phone & PDAs",
  },
  {
    name: "Cameras",
  },
];
