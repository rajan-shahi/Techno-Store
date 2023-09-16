import React from "react";
import boy from "../assets/boy.jpg";
import girl from "../assets/girl.jpg";
import girl2 from "../assets/girl2.jpg";
import girl4 from "../assets/girl4.jpg";
import boy1 from "../assets/boy1.jpg";
import boy3 from "../assets/boy3.jpg";
import girl5 from "../assets/girl5.jpg";
import about from "../assets/about.jpg";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";
import brand6 from "../assets/brand6.png";
import brand7 from "../assets/brand7.png";



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {  Navigation,  Pagination, History } from "swiper/modules";
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
        <div className=" py-12 md:flex gap-4 ">
          <div className=" flex-1 flex flex-col md:gap-3 gap-5 items-center md:items-start ">
            <img className=" cursor-pointer rounded-lg" src={girl} alt="" />
            <h1 className=" text-gray-700 text-xl hover:text-orange-400 cursor-pointer ">
              There are many
            </h1>
            <p className=" text-gray-400 text-sm">
              This is a Rebel that surrendered to us. Although he denies it, I
              believe there may be more of them, and I request permission to
              conduct a further search of the area. He was
            </p>
          </div>
          <div className=" flex-1 flex flex-col l md:gap-3 gap-5  items-center md:items-start ">
            <img
              className=" cursor-pointer md:pt-0 pt-9 rounded-lg"
              src={girl2}
              alt=""
            />
            <h1 className=" text-gray-700 text-xl hover:text-orange-400 cursor-pointer">
              Many desktop publishing
            </h1>
            <p className=" text-gray-400 text-sm">
              This is a Rebel that surrendered to us. Although he denies it, I
              believe there may be more of them, and I request permission to
              conduct a further search of the area. He was
            </p>
          </div>
          <div className=" flex-1 flex flex-col l md:gap-3 gap-5  items-center md:items-start  ">
            <img
              className="  cursor-pointer rounded-lg md:pt-0  pt-9"
              src={boy}
              alt=""
            />
            <h1 className=" text-gray-700 text-xl hover:text-orange-400 cursor-pointer">
              Lorem Ipsum is simply
            </h1>
            <p className=" text-gray-400 text-sm ">
              This is a Rebel that surrendered to us. Although he denies it, I
              believe there may be more of them, and I request permission to
              conduct a further search of the area. He was
            </p>
          </div>
        </div>
        {/* meet our team */}
        <h1 className=" text-xl text-gray-700 py-8 px-4  md:justify-start justify-center flex md:items-start items-center  ">Meet Our Team</h1>
        <div className=" px-10 pb-10 ">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            pagination={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            history={{
              key: "slide",
            }}
            modules={[Navigation, Pagination, History]}
            className="mySwiper"
          >
            <div className=" ">
              {meets.map((meet, index) => (
                <SwiperSlide data-history="1">
                  <div key={index} className=" flex  items-center flex-col pb-10">
                    <div className=" border-2 border-gray-200  rounded-lg hover:border-orange-300 cursor-pointer">
                      <img className=" h-80 w-80" src={meet.image} alt="" />
                    </div>
                    <h1 className=" text-xl py-1  pt-4 text-gray-800 hover:text-orange-400  cursor-pointer">
                      {meet.name}
                    </h1>
                    <p className=" text-sm text-gray-500">{meet.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        {/*pattrens */}
        <h1 className=" text-2xl md:text-xl cursor-pointer  text-gray-700  pt-6 hover:text-orange-400 flex justify-center md:justify-start md:w-max">Partners</h1>
        <div className=" grid grid-cols-2 md:grid-cols-6 gap-8 pt-5 pb-10  justify-center">
        <img className=" cursor-pointer" src={brand4} alt="" />
          <img className=" cursor-pointer" src={brand2} alt="" />
          <img className=" cursor-pointer" src={brand3} alt="" />
          <img className=" cursor-pointer" src={brand6} alt="" />
          <img className=" cursor-pointer" src={brand7} alt="" /> 
          <img className=" cursor-pointer" src={brand5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

const meets = [
  {
    image: boy1,
    name: "Garry Stil",
    desc: "CEo/Founder",
  },
  {
    image: girl5,
    name: "Angela baby",
    desc: "fashion Designer",
  },
  {
    image: boy3,
    name: "john swim",
    desc: "Manager/HOD",
  },
  {
    image: girl4,
    name: "Harry Dor",
    desc: "Web Designer",
  },
  {
    image: boy1,
    name: "Garry Stil",
    desc: "CEo/Founder",
  },
  {
    image: girl5,
    name: "Angela baby",
    desc: "fashion Designer",
  },
  {
    image: boy3,
    name: "john swim",
    desc: "Manager/HOD",
  },
  {
    image: girl4,
    name: "Harry Dor",
    desc: "Web Designer",
  },
];