import React from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import One1 from "../assets/01.png";
import Two2 from "../assets/02.png";
import Three3 from "../assets/03.png";
import Four4 from "../assets/04.png";
import Five5 from "../assets/05.png";
import Six6 from "../assets/06.png";
import Seven7 from "../assets/07.png";
import Eight8 from "../assets/08.png";
import Nine9 from "../assets/09.png";
import Ten10 from "../assets/10.png";
import clock from "../assets/clock.png";
import One from "../assets/01.jpg";
import Two from "../assets/02.jpg";
import Five from "../assets/05.jpg";
import Six from "../assets/06.jpg";
import Three from "../assets/03.jpg";
import Four from "../assets/04.jpg";
import Seven from "../assets/07.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const CategoriesComponents = () => {
  return (
    <div className=" flex justify-center">
      {/* container */}
      <div className=" w-full md:w-10/12  flex gap-8 py-6 justify-center ">
        {/* leftContainer */}
        <div className=" border-2 border-gray-600  sm:flex   hidden flex-col p-8 h-max gap-6    ">
          <div className=" flex gap-4  text-gray-700">
            <span className=" cursor-pointer">
              <AiOutlineAlignLeft size={30} />
            </span>
            <h1 className=" text-2xl">All Categories</h1>
          </div>
          {alls.map((all, index) => (
            <div key={index} className=" flex  gap-6  text-gray-600  text-sm ">
              <h1>
                <img
                  className=" h-6 w-6 cursor-pointer "
                  src={all.image}
                  alt=""
                />
              </h1>
              <h1 className=" cursor-pointer hover:text-orange-400  ">
                {all.name}
              </h1>
            </div>
          ))}
        </div>
        {/* rightContainer */}
        <div className="w-full  md:w-8/12 bg-gray-200 py-4 flex  items-center  ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {clocks.map((clock, index) => (
              <SwiperSlide>
                <div key={index} className="flex gap-4  p-20   ">
                  <div className=" flex-1 flex flex-col gap-2 text-gray-500 ">
                    <h1>{clock.name}</h1>
                    <p className=" text-3xl pb-4  text-orange-500">
                      {clock.model}
                    </p>
                    <h2>{clock.desc}</h2>
                    <p className=" text-3xl py-4 text-orange-400">
                      {clock.price}
                    </p>
                    <h1 className=" border border-gray-400 w-max px-8  py-2 rounded-full cursor-pointer font-bold text-gray-700 hover:bg-orange-400 hover:text-white">
                      {clock.button}
                    </h1>
                  </div>
                  <div className=" flex-1 hidden md:flex sm:hidden  cursor-pointer">
                    <img
                      className="  bg-transparent"
                      src={clock.image}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CategoriesComponents;

const alls = [
  {
    image: One1,
    name: "Laptop & Mac",
  },
  {
    image: Two2,
    name: "Mobile & Tablet",
  },
  {
    image: Three3,
    name: "Home Device",
  },
  {
    image: Four4,
    name: "Software",
  },

  {
    image: Five5,
    name: "Tv & Audio",
  },

  {
    image: Six6,
    name: "Sports & Fitness",
  },
  {
    image: Seven7,
    name: "Game & Toys",
  },
  {
    image: Eight8,
    name: "Video Cameras",
  },
  {
    image: Nine9,
    name: "Accessories",
  },

  {
    image: Ten10,
    name: "Security",
  },
];

const clocks = [
  {
    image: clock,
    name: "Enhanced Technology",
    model: "SMART TV",
    desc: " The ship get ground on the shore of this unchared desert isle with gilligan the skipper too the millionare and his history",
    price: "$1.635.999",
    button: "Show Now",
  },
  {
    image: One,
    name: "Enhanced Technology",
    model: "SMART TV",
    desc: " The ship get ground on the shore of this unchared desert isle with gilligan the skipper too the millionare and his history",
    price: "$1.635.999",
    button: "Show Now",
  },
  {
    image: Two,
    name: "Enhanced Technology",
    model: "SMART TV",
    desc: " The ship get ground on the shore of this unchared desert isle with gilligan the skipper too the millionare and his history",
    price: "$1.635.999",
    button: "Show Now",
  },
  {
    image: Five,
    name: "Enhanced Technology",
    model: "SMART TV",
    desc: " The ship get ground on the shore of this unchared desert isle with gilligan the skipper too the millionare and his history",
    price: "$1.635.999",
    button: "Show Now",
  },

  {
    image: Six,
    name: "Enhanced Technology",
    model: "SMART TV",
    desc: " The ship get ground on the shore of this unchared desert isle with gilligan the skipper too the millionare and his history",
    price: "$1.635.999",
    button: "Show Now",
  },

  {
    image: clock,
    name: "Enhanced Technology",
    model: "SMART TV",
    desc: " The ship get ground on the shore of this unchared desert isle with gilligan the skipper too the millionare and his history",
    price: "$1.635.999",
    button: "Show Now",
  },
  {
    image: Three,
    name: "Enhanced Technology",
    model: "SMART TV",
    desc: " The ship get ground on the shore of this unchared desert isle with gilligan the skipper too the millionare and his history",
    price: "$1.635.999",
    button: "Show Now",
  },
  {
    image: Four,
    name: "Enhanced Technology",
    model: "SMART TV",
    desc: " The ship get ground on the shore of this unchared desert isle with gilligan the skipper too the millionare and his history",
    price: "$1.635.999",
    button: "Show Now",
  },
  {
    image: clock,
    name: "Enhanced Technology",
    model: "SMART TV",
    desc: " The ship get ground on the shore of this unchared desert isle with gilligan the skipper too the millionare and his history",
    price: "$1.635.999",
    button: "Show Now",
  },

  {
    image: Seven,
    name: "Enhanced Technology",
    model: "SMART TV",
    desc: " The ship get ground on the shore of this unchared desert isle with gilligan the skipper too the millionare and his history",
    price: "$1.635.999",
    button: "Show Now",
  },
];
