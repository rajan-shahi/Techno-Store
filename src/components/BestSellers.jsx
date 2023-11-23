import React from "react";
import Jug from "../assets/jug.png";
import Star from "../assets/star.png";
import One01 from "../assets/001.jpg";
import One02 from "../assets/002.jpg";
import One03 from "../assets/003.jpg";
import One04 from "../assets/004.jpg";
import One05 from "../assets/005.jpg";
import One06 from "../assets/006.jpg";
import One07 from "../assets/0007.jpg";
import One08 from "../assets/008.jpg";
import One010 from "../assets/010.jpg";

const BestSellers = () => {
  return (
    <div name="seller" className=" flex justify-center py-8 ">
      {/* container */}
      <div className="w-full md:w-10/12 flex flex-col  bg-gray-100  py-10 justify-center">
        {/* topcontainer */}
        <div className=" grid grid-cols-1 sm:grid-cols-2  gap-12 py-6 ">
          {/* left */}
          <div className=" flex flex-col items-center gap-4  text-black/95 bg-gray-100  rounded-md py-8 px-24">
            <h1>
              {" "}
              <span className=" text-orange-400 text-xl">Save $30.00</span>{" "}
              Special Offer
            </h1>
            <img  className=" cursor-pointer" src={Jug} alt="" />
            <h2>Harman Kardon</h2>
            <p className=" text-orange-400  text-xl">$1,250.00</p>
            <div className=" flex gap-8">
              <p className=" flex flex-col gap-2">
                <h1>Days</h1>
                <span className=" bg-gray-400 px-3 py-2 rounded-md items-center font-bold">
                  14
                </span>
              </p>
              <p className=" flex flex-col gap-2">
                <h1>HOURS</h1>
                <span className=" bg-gray-400 px-3 py-2 rounded-md font-bold ">
                  09
                </span>
              </p>
              <p className=" flex flex-col gap-2">
                <h1>SECS</h1>
                <span className=" bg-gray-400 px-3 py-2 rounded-md font-bold">
                  23
                </span>
              </p>
            </div>
          </div>
          {/* right */}
          <div className=" flex flex-col gap-4  pl-8 ">
            <h1 className=" text-2xl">Bestsellers</h1>
            <hr className=" bg-gray-300 h-0.5 " />
            {bestSellers.map((bestseller, index) => (
              <div key={index}>
                <div className=" flex gap-3 items-center">
                  <span className=" rounded-md py-8 px-4">
                    <img className=" cursor-pointer" src={bestseller.img} alt="" />
                  </span>
                  <div className=" flex flex-col gap-2">
                    <h1 className=" text-xs hover:text-orange-300 cursor-pointer">{bestseller.name}</h1>
                    <div className=" flex gap-1 ">
                      <img className=" h-3"  src={bestseller.starImg} alt="" />
                      <img className=" h-3"  src={bestseller.starImg} alt="" />
                      <img className=" h-3"  src={bestseller.starImg} alt="" />
                      <img className=" h-3" src={bestseller.starImg} alt="" />
                      <img  className=" h-3" src={bestseller.starImg} alt="" />
                    </div>
                    <p className=" text-xl text-gray-500">{bestseller.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* buttonContainer */}
        <div className="  gap-4   grid grid-cols-1 sm:grid-cols-2 ">
          {/* left */}
          <div className=" flex pl-8  pb-6 flex-col gap-4 ">
            <h1 className=" text-2xl">Featured</h1>
            loki chaulagain loki erajan bahadur dhsabhi
            <hr className=" bg-gray-300 h-0.5  " />
            {features.map((feature, index) => (
              <div key={index} className=" flex gap-6 items-center">
                <div>
                  <img className=" cursor-pointer" src={feature.img} alt="" />
                </div>
                <div className=" flex flex-col gap-5 ">
                  <p className=" text-xs hover:text-orange-300 cursor-pointer">{feature.name}</p>
                  <div className=" flex gap-3">
                    <img  className=" h-3" src={feature.starImg} alt="" />
                    <img className=" h-3" src={feature.starImg} alt="" />
                    <img className=" h-3" src={feature.starImg} alt="" />
                    <img className=" h-3" src={feature.starImg} alt="" />
                    <img className=" h-3" src={feature.starImg} alt="" />
                    <img className=" h-3" src={feature.starImg} alt="" />
                  </div>
                  <p className=" text-xl text-gray-500">{feature.price}</p>
                </div>
              </div>
            ))}
          </div>
          {/* right */}
          <div className=" flex flex-col gap-4  pl-8">
            <h1 className=" text-2xl">Hot Salles</h1>
            <hr className=" bg-gray-300 h-0.5 " />
            {hots.map((hot, index) => (
              <div key={index} className=" flex gap-6 items-center">
                <img className=" cursor-pointer" src={hot.img} alt="" />
                <div className=" flex flex-col items-center gap-5">
                  <p className=" text-xs hover:text-orange-300  cursor-pointer">{hot.name}</p>
                  <div className=" flex gap-3">
                    <img className=" h-3" src={hot.starImg} alt="" />
                    <img className=" h-3" src={hot.starImg} alt="" />
                    <img className=" h-3" src={hot.starImg} alt="" />
                    <img className=" h-3" src={hot.starImg} alt="" />
                    <img className=" h-3" src={hot.starImg} alt="" />
                    <img className=" h-3" src={hot.starImg} alt="" />
                  </div>
                  <p className=" text-xl text-gray-500">{hot.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;

const bestSellers = [
  {
    img: One01,
    name: "Razer RZ02-01071500-R3M1",
    starImg: Star,
    price: "$50.00",
  },
  {
    img: One02,
    name: "Razer RZ02-01071500-R3M1",
    starImg: Star,
    price: "$5020.00",
  },
  {
    img: One03,
    name: "Razer RZ02-01071500-R3M1",
    starImg: Star,
    price: "$150.00",
  },
];

const features = [
  {
    img: One04,
    name: "Razer RZ02-01071500-R3M1",
    starImg: Star,
    price: "$50.00",
  },
  {
    img: One05,
    name: " Apple iPad Mini G2356",
    starImg: Star,
    price: "$520.00",
  },
  {
    img: One06,
    name: "Beats Pill + Portable Speaker",
    starImg: Star,
    price: "$15.00",
  },
];

const hots = [
  {
    img: One07,
    name: "Razer RZ02-01071500-R3M1",
    starImg: Star,
    price: "$50.00",
  },
  {
    img: One08,
    name: "Apple iPad Mini G2356",
    starImg: Star,
    price: "$520.00",
  },
  {
    img: One010,
    name: "Beats Pill + Portable Speaker",
    starImg: Star,
    price: "$15.00",
  },
];
