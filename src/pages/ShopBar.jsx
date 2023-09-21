import React, { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import { PiDotsNineBold } from "react-icons/pi";
import { AiOutlineBarcode } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import One from "../assets/01.jpg";
import Two from "../assets/02.jpg";
import Five from "../assets/05.jpg";
import Six from "../assets/06.jpg";
import Three from "../assets/03.jpg";
import wat from "../assets/wat.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import headphone from "../assets/headphone1.png";
import { Link } from "react-router-dom";

const ShopBar = () => {
  const [open, setopen] = useState(true);
  const openClose = () => {
    setopen(!open);
  };
  return (
    <div className=" flex flex-col justify-center py-2">
      <div className=" flex justify-center md:gap-4  py-3">
        <div className=" flex items-center md:gap-2">
          <h1 className=" md:flex border md:px-8 px-4 py-2 rounded-full text-gray-500 cursor-pointer hover:text-white hover:bg-orange-400 hidden ">
            home
          </h1>
          <span className=" text-gray-400 md:flex hidden">
            <BiRightArrowAlt size={30} />
          </span>
        </div>
        <div className=" flex items-center gap-2">
          <h1 className=" flex border px-8 py-2 rounded-full text-gray-500 cursor-pointer hover:text-white hover:bg-orange-400">
            shop
          </h1>
          <span className=" text-gray-400">
            <BiRightArrowAlt size={30} />
          </span>
        </div>
        <button className=" flex border px-8 py-2 rounded-full text-gray-500 cursor-pointer hover:text-white hover:bg-orange-400">
          SmartPhones
        </button>
      </div>
      <hr />
      {/* container */}
      <div className=" md:flex  w-full md:w-11/12 justify-center gap-4">
        {/* leftbar */}
        <div className="md:w-3/12 w-full flex flex-col">
          {/* category */}
          <div className=" flex flex-col px-4">
            <div className=" flex  items-center justify-between py-4 border-b border-gray-300">
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
          {/*         
          {/* brands */}
          <div className="flex flex-col px-4">
            <div className=" flex  items-center justify-between py-4 border-b border-gray-300">
              <h1 className=" text-xl text-gray-600 ">Brands</h1>
              <span className=" cursor-pointer hover:text-pink-400">
                <span onClick={openClose}>
                  <AiOutlineMinus size={20} />
                </span>
              </span>
            </div>
            <div className=" py-5">
              <input
                className=" w-full px-2 py-2 rounded-full border-2 outline-none"
                type="text"
                placeholder=" brands search"
              />
            </div>
            {open && (
              <div className=" flex flex-col gap-4 py-8 text-sm text-gray-500 overflow-y-scroll  sticky h-56">
                <div className=" flex gap-4">
                  <input className=" cursor-pointer" type="checkbox" />
                  <h1>Dell (1)</h1>
                </div>
                <div className=" flex gap-4">
                  <input type="checkbox" />
                  <h1>Apple (4)</h1>
                </div>
                <div className=" flex gap-4">
                  <input type="checkbox" />
                  <h1>Samsung (2)</h1>
                </div>
                <div className=" flex gap-4">
                  <input type="checkbox" />
                  <h1>HTC (2)</h1>
                </div>
                <div className=" flex gap-4">
                  <input type="checkbox" />
                  <h1>LG (2)</h1>
                </div>
                <div className=" flex gap-4">
                  <input type="checkbox" />
                  <h1>Sony (3)</h1>
                </div>
                <div className=" flex gap-4">
                  <input type="checkbox" />
                  <h1>Bphone (4)</h1>
                </div>
                <div className=" flex gap-4">
                  <input type="checkbox" />
                  <h1>Oppo (4)</h1>
                </div>
              </div>
            )}
          </div>
          {/* colors */}
          <div className=" flex flex-col px-4">
            <div className=" flex  items-center justify-between py-4 border-b border-gray-300">
              <h1 className=" text-xl text-gray-600 ">Colors</h1>
              <span className=" cursor-pointer">
                <AiOutlineMinus size={20} />
              </span>
            </div>
            <div className=" py-5">
              <input
                className=" w-full px-2 py-2 rounded-full border-2 outline-none"
                type="text"
                placeholder=" colors search"
              />
            </div>
            <div className=" flex flex-col gap-4 py-8 text-sm text-gray-500 overflow-y-scroll  sticky h-56">
              <div className=" flex gap-4">
                <input className=" cursor-pointer" type="checkbox" />
                <h1>Black (4)</h1>
              </div>
              <div className=" flex gap-4">
                <input type="checkbox" />
                <h1>Yellow (2)</h1>
              </div>
              <div className=" flex gap-4">
                <input type="checkbox" />
                <h1>White (2)</h1>
              </div>
              <div className=" flex gap-4">
                <input type="checkbox" />
                <h1>Blue (2)</h1>
              </div>
              <div className=" flex gap-4">
                <input type="checkbox" />
                <h1>Red (1)</h1>
              </div>
              <div className=" flex gap-4">
                <input type="checkbox" />
                <h1>Pink (3)</h1>
              </div>
              <div className=" flex gap-4">
                <input type="checkbox" />
                <h1>Green (4)</h1>
              </div>
              <div className=" flex gap-4">
                <input type="checkbox" />
                <h1>Gold (4)</h1>
              </div>
            </div>
          </div>
          {/* bestsellers */}
          <div className=" flex flex-col px-4">
            <div className=" flex  items-center justify-between py-4 border-b border-gray-300">
              <h1 className=" text-xl text-gray-600 "> Berst Sellers</h1>
              <span onClick={openClose} className=" cursor-pointer">
                <AiOutlineMinus size={20} />
              </span>
            </div>
            {open && (
              <div className=" flex flex-col gap-3 py-2">
                <img src={wat} alt="" />
                <img src={wat} alt="" />
              </div>
            )}
          </div>
        </div>
        {/* rightbar */}
        <div className="md:w-8/12 w-full md:px-0 px-2 flex flex-col">
          <div className="py-4">
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
              <div className=" w-full">
                {shops.map((shop, index) => (
                  <div key={index} className="">
                    <SwiperSlide>
                      <div className=" px-10 flex justify-between items-center bg-gray-100 md:pb-0  pb-24 md:py-0 py-4 rounded-lg ">
                        <div className=" flex flex-col  gap-6 px-4">
                          <h1 className=" text-gray-400">{shop.name}</h1>
                          <h2 className="  md:text-6xl text-4xl space-x-4  text-orange-400  ">
                            {shop.model}
                          </h2>
                        </div>
                        <img
                          className=" px-4 md:flex hidden"
                          src={shop.image}
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                  </div>
                ))}
              </div>
            </Swiper>
          </div>
          {/* mobile and test */}
          <div className=" md:px-0 px-4 md:flex  justify-between py-4 pt-10 border-b border-gray-300">
            <h1 className=" text-xl md:pb-0 pb-2 text-gray-700">
              Mobile & Tablet
            </h1>
            <h2 className=" text-sm text-gray-500">
              Showing 1–15 of 20 results
            </h2>
          </div>
          {/* show container */}
          <div>
            <div className=" md:flex items-center justify-between py-7 border-b border-gray-300 ">
              <div className=" flex gap-4 px-4 md:px-0">
                <PiDotsNineBold
                  size={30}
                  className=" cursor-pointer text-gray-700"
                />
                <AiOutlineBarcode
                  size={30}
                  className=" cursor-pointer text-gray-500"
                />
              </div>
              <div className=" md:flex  px-4 md:px-0 gap-4">
                <div className="md:py-0 py-4">
                  <select
                    className=" w-full px-6  py-2 border-2 rounded-full text-gray-500"
                    name=""
                    id=""
                  >
                    sort by popularity
                    <option value="sort by popularity">
                      sort by popularity
                    </option>
                    <option value="sort by popularity">
                      sort by popularity
                    </option>
                    <option value="sort by popularity">
                      sort by popularity
                    </option>
                    <option value="sort by popularity">
                      sort by popularity
                    </option>
                  </select>
                </div>
                <div>
                  <select
                    className=" w-full px-6  py-2 border-2 rounded-full text-gray-500"
                    name=""
                    id=""
                  >
                    show 15
                    <option value="show 15">show 15</option>
                    <option value="show 15">show 15</option>
                    <option value="show 15">show 15</option>
                    <option value="show 15">show 15</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* shopcard container */}
          <div className=" py-6">
            {shopcards.map((shopcard, index) => (
              <div key={index} className=" grid grid-rows-1 ">
                <div className=" md:flex items-center justify-between border-2 border-transparent hover:border-gray-300  rounded-lg px-4 py-4 ">
                  <div className=" flex justify-center md:justify-start">
                    <img src={shopcard.image} alt="" />
                  </div>
                  <div className=" flex flex-col gap-1 pb-8 md:items-start  items-center">
                    <h1 className=" text-gray-400">{shopcard.name}</h1>
                    <h2 className=" text-gray-600 hover:text-orange-400 cursor-pointer">
                      {shopcard.model}
                    </h2>
                    <h3 className=" hover:text-orange-400 cursor-pointer">
                      {shopcard.desc}
                    </h3>
                    <h1 className=" text-orange-600 py-1 text-sm">
                      {shopcard.stock}
                    </h1>
                    <h2 className=" text-gray-400 text-sm">{shopcard.the}</h2>
                    <h2 className=" text-gray-400 text-sm">{shopcard.apple}</h2>
                    <h1 className=" text-gray-400 text-sm">{shopcard.like}</h1>
                  </div>
                  <div className=" flex flex-col gap-4 md:px-4  md:items-start items-center">
                    <h1 className=" text-2xl text-orange-400">
                      {shopcard.price}
                    </h1>
                    <h2 className=" text-white bg-orange-600 px-6 py-2 rounded-full cursor-pointer">
                      {shopcard.card}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* footer */}
          <div className=" flex justify-end px-4 py-4">
            <span className=" text-gray-500">
              {" "}
              <Link to={"/"}>
                <BiRightArrowAlt size={40} />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBar;

const shops = [
  {
    image: headphone,
    name: "You Can buld the banner for other categories",
    model: "Shop Banner",
  },
  {
    image: headphone,
    name: "You Can buld the banner for other categories",
    model: "Shop Banner",
  },
  {
    image: headphone,
    name: "You Can buld the banner for other categories",
    model: "Shop Banner",
  },
  {
    image: headphone,
    name: "You Can buld the banner for other categories",
    model: "Shop Banner",
  },

  {
    image: headphone,
    name: "You Can buld the banner for other categories",
    model: "Shop Banner",
  },

  {
    image: headphone,
    name: "You Can buld the banner for other categories",
    model: "Shop Banner",
  },

  {
    image: headphone,
    name: "You Can buld the banner for other categories",
    model: "Shop Banner",
  },
];

const shopcards = [
  {
    image: One,
    name: "Laptop",
    model: "Apple iPad Air 2 32GB 9.7",
    desc: "Tablet",
    stock: "Availablity: In stock",
    the: "The iPhone 5c replaces the iPhone 5 in",
    apple: "the Apple stable, inheriting its internals,",
    like: "like the A6 processor, 4 screen...",
    price: " $ 125140.00",
    card: "Add to Card",
  },
  {
    image: Six,
    name: "Cameras",
    model: "Apple iPad Air 2 32GB 9.7",
    desc: "Tablet",
    stock: "Availablity: In stock",
    the: "The iPhone 5c replaces the iPhone 5 in",
    apple: "the Apple stable, inheriting its internals,",
    like: "like the A6 processor, 4 screen...",
    price: " $ 12542.00",
    card: "Add to Card",
  },
  {
    image: Two,
    name: "Cameras",
    model: "Apple iPad Air 2 32GB 9.7",
    desc: "Tablet",
    stock: "Availablity: In stock",
    the: "The iPhone 5c replaces the iPhone 5 in",
    apple: "the Apple stable, inheriting its internals,",
    like: "like the A6 processor, 4 screen...",
    price: " $ 125140.00",
    card: "Add to Card",
  },
  {
    image: Five,
    name: "Cameras",
    model: "Apple iPad Air 2 32GB 9.7",
    desc: "Tablet",
    stock: "Availablity: In stock",
    the: "The iPhone 5c replaces the iPhone 5 in",
    apple: "the Apple stable, inheriting its internals,",
    like: "like the A6 processor, 4 screen...",
    price: " $ 12400.00",
    card: "Add to Card",
  },
  {
    image: Six,
    name: "Cameras",
    model: "Apple iPad Air 2 32GB 9.7",
    desc: "Tablet",
    stock: "Availablity: In stock",
    the: "The iPhone 5c replaces the iPhone 5 in",
    apple: "the Apple stable, inheriting its internals,",
    like: "like the A6 processor, 4 screen...",
    price: " $ 12542.00",
    card: "Add to Card",
  },
  {
    image: Three,
    name: "Headphones",
    model: "Apple iPad Air 2 32GB 9.7",
    desc: "Tablet",
    stock: "Availablity: In stock",
    the: "The iPhone 5c replaces the iPhone 5 in",
    apple: "the Apple stable, inheriting its internals,",
    like: "like the A6 processor, 4 screen...",
    price: " $ 756250.00",
    card: "Add to Card",
  },
];
