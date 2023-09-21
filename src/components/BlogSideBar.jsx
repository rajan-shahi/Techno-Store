import React from "react";
import { BsArrowRight } from "react-icons/bs";
import about from "../assets/about.jpg";
import post02 from "../assets/post-02.jpg";
import post03 from "../assets/post-03.jpg";
const BlogSideBar = () => {
  return (
    <div className=" flex justify-center flex-col">
      <div className=" flex justify-start items-center py-6  px-56 gap-6 border-b-2 w-full">
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
      <div className=" flex  justify-center items-center w-10/12 py-8">
        {/* left */}
        <div className=" flex flex-col gap-4 justify-center w-8/12">
          <div>
            <img className=" w-full h-[350px] rounded-lg" src={about} alt="" />
          </div>
          <div>
            <h1 className=" text-xl text-gray-600">
              There are many variations of passages
            </h1>
          </div>
          <div className=" flex gap-4 text-orange-400">
            <h1>2 Comments</h1>
            <h2>February 20, 2017</h2>
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
            <img className=" rounded-lg pt-10" src={post02} alt="" />
          </div>
          <div>
            <h1 className=" text-xl text-gray-600">Many desktop publishing</h1>
          </div>
          <div className=" flex gap-4 text-orange-400">
            <h2>2 Comments</h2>
            <h1>February 20, 2017</h1>
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
            <img className=" rounded-lg pt-10" src={post03} alt="" />
          </div>
          <div>
            <h1 className=" text-xl text-gray-600">
              Lorem Ipsum is simply dummy text
            </h1>
          </div>
          <div className=" flex gap-4 text-orange-400">
            <h1>2 Comments</h1>
            <h2> February 20, 2017</h2>
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
        </div>

        {/* right */}
        <div className=" flex flex-col justify-center w-2/12">left</div>
      </div>
    </div>
  );
};

export default BlogSideBar;
