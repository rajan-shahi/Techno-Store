import React from "react";
import One from "../assets/01.jpg";
import Two from "../assets/02.jpg";
import Five from "../assets/05.jpg";
import Six from "../assets/06.jpg";
import Three from "../assets/03.jpg";
import Four from "../assets/04.jpg";
import Seven from "../assets/07.jpg";
import Eighteen from "../assets/18.jpg";
import Seventeen from "../assets/17.jpg";
import Ninteen from "../assets/19.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
const RecentProducr = () => {
  return (
    <div name="product" className=" flex justify-center">
      <div className=" flex w-10/12 py-8  flex-col gap-8">
        <div className=" text-gray-800 p-4 border-b-2 w-full">
          <h1 className=" text-2xl "> Recent Products</h1>
        </div>
        <div className=" flex justify-center items-center px-0  md:px-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {prouducts.map((prouduct, index) => (
              <SwiperSlide>
                <div
                  key={index}
                  className=" flex flex-col justify-center gap-4 items-center px-8 py-5 border-2 hover:border-orange-300 rounded-md   "
                >
                  <div className=" flex flex-col gap-3 justify-center items-center">
                    <span>
                      <img
                        className=" cursor-pointer"
                        src={prouduct.image}
                        alt=""
                      />
                    </span>
                    <div className=" flex flex-col gap-1 items-center">
                      <h1 className=" text-sm text-gray-600 hover:text-orange-400 cursor-pointer">
                        {prouduct.name}
                      </h1>
                      <h2 className=" cursor-pointer hover:text-orange-400">
                        {prouduct.model}
                      </h2>
                      <p className=" md:pb-0 pb-4  text-2xl text-orange-400">{prouduct.price}</p>
                    </div>
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

export default RecentProducr;

const prouducts = [
  {
    image: One,
    name: "Laptop",
    model: "Apple ipad Mini",
    desc: "G2356",
    price: " $ 129",
    card: "Add to Card",
  },
  {
    image: Two,
    name: "Cameras",
    model: "New X5c-12.4Ghz ",
    desc: "Rc Quadcopter Drone",
    price: " $ 630",
    card: "Add to Card",
  },
  {
    image: Five,
    name: "Cameras",
    model: "Apple Ipad New",
    desc: "G2356",
    price: " $ 199",
    card: "Add to Card",
  },
  {
    image: Six,
    name: "Cameras",
    model: "New X5c-12Djk",
    desc: "CKli-01Jb",
    price: " $ 293",
    card: "Add to Card",
  },
  {
    image: Three,
    name: "Headphones",
    model: "Beats Solo",
    desc: "HD",
    price: " $ 756",
    card: "Add to Card",
  },
  {
    image: Four,
    name: "Computers",
    model: "Apple Imac Zosc4824",
    desc: "Retin",
    price: " $ 290",
    card: "Add to Card",
  },
  {
    image: Seven,
    name: "Computer",
    model: "Apple ipad 1232BG 9.7",
    desc: "Tablet",
    price: " $ 399",
    card: "Add to Card",
  },
  {
    image: Eighteen,
    name: "Computers",
    model: "smartphone 75",
    desc: "123GB",
    price: " $ 128",
    card: "Add to Card",
  },
  {
    image: Seventeen,
    name: "Computers",
    model: "Beats snarkitecture",
    desc: "Headphones",
    price: " $ 560",
    card: "Add to Card",
  },
  {
    image: Ninteen,
    name: "Computer",
    desc: "40K6013UPB10",
    price: " $ 499",
    card: "Add to Card",
  },
];
