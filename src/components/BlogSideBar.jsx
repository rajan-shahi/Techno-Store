import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";
import about from "../assets/about.jpg";
import post02 from "../assets/post-02.jpg";
import post03 from "../assets/post-03.jpg";
import { Link } from "react-router-dom";
const BlogSideBar = () => {
  return (
    <div name="blog" className=" flex justify-center items-center flex-col">
      <div className=" flex md:justify-start justify-center items-center py-6  md:px-56 gap-6 border-b-2 w-full">
        <div className=" flex justify-center items-center">
          <h1 className=" text-sm text-gray-500 hover:text-orange-400 cursor-pointer">
            Home
          </h1>
        </div>
        <div className=" flex justify-center items-center gap-1">
          <span className=" text-gray-600">
            <BsArrowRight size={20} />
          </span>
          <h1 className=" text-sm text-gray-500 hover:text-orange-400 cursor-pointer">
            Shop
          </h1>
        </div>
        <div className=" flex justify-center items-center gap-1">
          <span className=" text-gray-600">
            <BsArrowRight size={20} />
          </span>
          <h1 className=" border px-4 py-2 rounded-full text-sm text-gray-500 hover:bg-orange-400 hover:text-white cursor-pointer">
            Smartphones
          </h1>
        </div>
      </div>
      <div className=" md:flex md:px-0 px-3 justify-center  gap-10 w-full md:w-10/12 py-8">
        {/* left */}
        <div className=" flex flex-col md:px-0 px-2 gap-4 justify-center md:w-8/12 w-full">
          <div>
            <img
              className=" w-full  md:h-[350px]  h-[300px] rounded-lg"
              src={about}
              alt=""
            />
          </div>

          <div>
            <h1 className=" text-xl text-gray-600 hover:text-orange-400 cursor-pointer">
              There are many variations of passages
            </h1>
          </div>
          <div className=" flex gap-4 text-orange-400">
            <h1 className=" cursor-pointer">2 Comments</h1>
            <h2 className=" cursor-pointer">February 20, 2017</h2>
          </div>
          <div>
            <p className=" text-sm text-gray-400">
              This is a Rebel that surrendered to us. Although he denies it, I
              believe there may be more of them, and I request permission to
              conduct a further search of the area. He was armed only with this.
              Good work, Commander. Leave us. Conduct your search and bring his
              companions to me. Yes, my Lord.
            </p>
          </div>
          <div>
            <button className=" py-2 px-12 border-2 rounded-full hover:bg-orange-400 hover:text-white">
              Read More
            </button>
          </div>
          <div>
            <img
              className=" w-full  md:h-[350px]  h-[300px] rounded-lg pt-10"
              src={post02}
              alt=""
            />
          </div>
          <div>
            <h1 className=" text-xl text-gray-600 hover:text-orange-400 cursor-pointer">
              Many desktop publishing
            </h1>
          </div>
          <div className=" flex gap-4 text-orange-400">
            <h2 className=" cursor-pointer">2 Comments</h2>
            <h1 className=" cursor-pointer">February 20, 2017</h1>
          </div>
          <div>
            <p className=" text-sm text-gray-400">
              This is a Rebel that surrendered to us. Although he denies it, I
              believe there may be more of them, and I request permission to
              conduct a further search of the area. He was armed only with this.
              Good work, Commander. Leave us. Conduct your search and bring his
              companions to me. Yes, my Lord.
            </p>
          </div>
          <div>
            <button className=" py-2 px-12 border-2 rounded-full hover:bg-orange-400 hover:text-white">
              Read More
            </button>
          </div>
          <div>
            <img
              className=" w-full md:h-[350px]  h-[300px]  rounded-lg pt-10"
              src={post03}
              alt=""
            />
          </div>
          <div>
            <h1 className=" text-xl text-gray-600 hover:text-orange-400 cursor-pointer">
              Lorem Ipsum is simply dummy text
            </h1>
          </div>
          <div className=" flex gap-4 text-orange-400">
            <h1 className=" cursor-pointer">2 Comments</h1>
            <h2 className=" cursor-pointer"> February 20, 2017</h2>
          </div>
          <div>
            <p className=" text-sm text-gray-400">
              This is a Rebel that surrendered to us. Although he denies it, I
              believe there may be more of them, and I request permission to
              conduct a further search of the area. He was armed only with this.
              Good work, Commander. Leave us. Conduct your search and bring his
              companions to me. Yes, my Lord.
            </p>
          </div>
          <div className=" pb-6">
            <button className=" py-2 px-12 border-2 rounded-full hover:bg-orange-400 hover:text-white">
              Read More
            </button>
          </div>
          <div className=" flex justify-center items-center gap-4 py-8 border-b-2 border-t-2">
            <span className=" text-gray-500 cursor-pointer hover:text-orange-400">
              {" "}
              <HiOutlineArrowNarrowLeft size={20} />
            </span>
            <h1 className=" text-sm text-gray-500 cursor-pointer hover:text-orange-400">
              {" "}
              Prev Page
            </h1>
            <h1 className=" text-sm border-2 border-gray-300  px-3 py-2  rounded-full cursor-pointer  hover:bg-orange-400  hover:text-white">
              01
            </h1>
            <h1 className=" text-sm border-2 border-gray-300  px-3 py-2  rounded-full cursor-pointer  hover:bg-orange-400  hover:text-white">
              02
            </h1>
            <h1 className="  md:flex  hidden text-sm border-2 border-gray-300  px-3 py-2  rounded-full cursor-pointer  hover:bg-orange-400  hover:text-white">
              03
            </h1>
            <h1 className=" md:flex hidden text-sm border-2 border-gray-300  px-3 py-2  rounded-full cursor-pointer  hover:bg-orange-400  hover:text-white">
              04
            </h1>{" "}
            <Link to={"/"}>
              <h1 className=" text-sm text-gray-500 cursor-pointer hover:text-orange-400">
                Next Page
              </h1>{" "}
            </Link>
            <span className=" text-gray-500">
              <HiOutlineArrowNarrowRight size={20} />
            </span>{" "}
          </div>
        </div>

        {/* right */}
        <div className=" flex flex-col  md:pt-0 pt-16 gap-6 w-full  md:w-2/12">
          <div>
            <input
              className=" border bg-gray-200 py-2 px-2 rounded-full placeholder:text-sm outline-orange-400 w-full md:w-[300px]"
              type="text"
              placeholder=" search"
            />
          </div>

          <div className=" flex flex-col  w-full md:w-[300px] px-4">
            <div className=" flex flex-col px-4">
              <div className=" flex  items-center justify-between py-4 border-b  border-gray-300">
                <h1 className=" text-xl text-gray-600 ">Categories</h1>
                <span className=" cursor-pointer">
                  <AiOutlineMinus size={20} />
                </span>
              </div>
              <div className=" flex flex-col gap-4 py-8 text-sm text-gray-500">
                <h1 className=" hover:text-orange-400 cursor-pointer">
                  Accessories (03)
                </h1>
                <h1 className=" hover:text-orange-400 cursor-pointer">
                  Cameras (19)
                </h1>
                <h1 className=" hover:text-orange-400 cursor-pointer">
                  Computers (56)
                </h1>
                <h1 className=" hover:text-orange-400 cursor-pointer">
                  Laptops (03)
                </h1>
                <h1 className=" hover:text-orange-400 cursor-pointer">
                  Networking (03)
                </h1>
                <h1 className=" hover:text-orange-400 cursor-pointer">
                  Old Products (89)
                </h1>
                <h1 className=" hover:text-orange-400 cursor-pointer">
                  Smartphones (90)
                </h1>
                <h1 className=" hover:text-orange-400 cursor-pointer">
                  Software (23)
                </h1>
              </div>
            </div>
            <div className=" py-2 border-b">
              <h1 className=" text-lg py-2  text-gray-600">Latest Products</h1>
            </div>
            <div className=" grid grid-cols-2 gap-8 py-4">
              <div>
                <h1 className=" py-2 px-6 border-2  text-gray-400 rounded-full bg-gray-200 text-sm cursor-pointer hover:bg-orange-400 hover:text-white hover:border-orange-400">
                  SmartPhone
                </h1>
              </div>
              <div>
                <h1 className=" py-2 px-6 border-2  text-gray-400 rounded-full bg-gray-200 text-sm cursor-pointer hover:bg-orange-400 hover:text-white hover:border-orange-400 flex justify-center">
                  Cameras
                </h1>
              </div>
              <div>
                <h2 className=" py-2 px-6 border-2  text-gray-400 rounded-full bg-gray-200 text-sm cursor-pointer hover:bg-orange-400 hover:text-white hover:border-orange-400">
                  HeadPhones
                </h2>
              </div>
              <div>
                <h1 className=" py-2 px-6 border-2  text-gray-400 rounded-full bg-gray-200 text-sm cursor-pointer hover:bg-orange-400 hover:text-white hover:border-orange-400">
                  Musics
                </h1>
              </div>
              <div>
                <h1 className=" py-2 px-6 border-2  text-gray-400 rounded-full bg-gray-200 text-sm cursor-pointer hover:bg-orange-400 hover:text-white hover:border-orange-400">
                  Computers
                </h1>
              </div>
              <div>
                <h2 className=" py-2 px-6 border-2  text-gray-400 rounded-full bg-gray-200 text-sm cursor-pointer hover:bg-orange-400 hover:text-white hover:border-orange-400 flex justify-center">
                  Laptops
                </h2>
              </div>
            </div>

            <div className=" py-2 border-b">
              <h1 className=" text-lg py-2  text-gray-600">Popular Tags</h1>
            </div>
            <div className=" grid grid-cols-2 gap-8 py-4">
              <div>
                <h1 className=" py-2 px-6 border-2  text-gray-400 rounded-full bg-gray-200 text-sm cursor-pointer hover:bg-orange-400 hover:text-white hover:border-orange-400 flex justify-center">
                  Phone
                </h1>
              </div>
              <div>
                <h1 className=" py-2 px-6 border-2  text-gray-400 rounded-full bg-gray-200 text-sm cursor-pointer hover:bg-orange-400 hover:text-white hover:border-orange-400 flex justify-center">
                  Cameras
                </h1>
              </div>
              <div>
                <h1 className=" py-2 px-6 border-2  text-gray-400 rounded-full bg-gray-200 text-sm cursor-pointer hover:bg-orange-400 hover:text-white hover:border-orange-400">
                  Computers
                </h1>
              </div>
              <div>
                <h2 className=" py-2 px-6 border-2  text-gray-400 rounded-full bg-gray-200 text-sm cursor-pointer hover:bg-orange-400 hover:text-white hover:border-orange-400">
                  HeadPhones
                </h2>
              </div>
              <div>
                <h2 className=" py-2 px-6 border-2  text-gray-400 rounded-full bg-gray-200 text-sm cursor-pointer hover:bg-orange-400 hover:text-white hover:border-orange-400 flex justify-center">
                  Laptops
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
