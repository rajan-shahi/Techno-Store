import React from "react";
import boy from "../assets/boy.jpg";
import girl from "../assets/girl.jpg";
import girl2 from "../assets/girl2.jpg";
import about from "../assets/about.jpg";
const About = () => {
  return (
    <div className=" flex justify-center">
      <div className=" flex flex-col w-full md:px-0 px-4  md:w-10/12">
        {/* topcontainer */}
        <div className=" md:flex  py-10 md:py-20">
          <div className=" flex-1  z-20">
            <img
              className=" cursor-pointer md:absolute  rounded-lg  md:pl-[60px] md:mt-[-20px]  pb-8  "
              src={about}
              alt=""
            />
          </div>
          <div className="  md:relative z-10 flex-1  flex flex-col border-2 border-gray-300 rounded-lg   py-10 md:py-20 md:px-12  px-8 gap-4 md:gap-8  md:pl-10">
            <h1 className="text-xl text-gray-700">
              There are many variations of passages
            </h1>
            <p className=" text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              quis diam erat. Duis velit lectus, posuere a blandit sit amet,
              tempor at lorem. Donec ultricies, lorem sed ultrices interdum, leo
              metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor
              arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo.
              Mauris metus mauris, tristique quis sapien eu, rutrum vulputate
              enim. Nunc at rutrum leo. Mauris metus mauris, tristique
            </p>
            <p className=" text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, erat in malesuada aliquam, est erat faucibus purus,
              eget viverra nulla sem vitae neque.Sed tincidunt, fdgftytryrb{" "}
              <span className=" text-gray-600 font-bold pt-4">
                Quisque id sodales libero. In nec enim nisi, in ultricies. Sed
                lacinia feugiat velit, cursus molestie lectus mollis et.
              </span>
            </p>
          </div>
        </div>
        {/* buttom container */}
        <div className=" py-12 flex gap-4">
          <div className=" flex-1 flex flex-col gap-3">
            <img className=" rounded-lg" src={girl} alt="" />
            <h1 className=" text-gray-700 text-xl hover:text-orange-400 cursor-pointer">
              There are many
            </h1>
            <p className=" text-gray-400 text-sm">
              This is a Rebel that surrendered to us. Although he denies it, I
              believe there may be more of them, and I request permission to
              conduct a further search of the area. He was
            </p>
          </div>
          <div className=" flex-1 flex flex-col gap-3">
            <img className=" rounded-lg" src={girl2} alt="" />
            <h1 className=" text-gray-700 text-xl hover:text-orange-400 cursor-pointer">
              Many desktop publishing
            </h1>
            <p className=" text-gray-400 text-sm">
              This is a Rebel that surrendered to us. Although he denies it, I
              believe there may be more of them, and I request permission to
              conduct a further search of the area. He was
            </p>
          </div>
          <div className=" flex-1 flex flex-col gap-3">
            <img className=" rounded-lg" src={boy} alt="" />
            <h1 className=" text-gray-700 text-xl hover:text-orange-400 cursor-pointer">
              Lorem Ipsum is simply
            </h1>
            <p className=" text-gray-400 text-sm">
              This is a Rebel that surrendered to us. Although he denies it, I
              believe there may be more of them, and I request permission to
              conduct a further search of the area. He was
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
