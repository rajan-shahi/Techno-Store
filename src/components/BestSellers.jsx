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
import One011 from "../assets/011.jpg";
const BestSellers = () => {
  return (
    <div className=" flex justify-center ">
      {/* container */}
      <div className=" flex flex-col w-10/12 bg-gray-200 px-14 py-10">
        {/* topcontainer */}
        <div className=" flex gap-4">
          {/* left */}
          <div className=" flex flex-col items-center gap-4  text-black/95 bg-gray-100  rounded-md py-8 px-24">
            <h1>
              {" "}
              <span className=" text-orange-400 text-xl">Save $30.00</span>{" "}
              Special Offer
            </h1>
            <img src={Jug} alt="" />
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
          <div>
            <h1 className=" text-xl">Bestsellers</h1>
            <hr className=" w-[100%] bg-gray-300 h-1 my-4 " />
            {bestSellers.map((bestseller, index) => (
              <div key={index}>
                <div className=" flex gap-3 items-center">
                  <span className=" rounded-md py-8 px-4">
                    <img src={bestseller.img} alt="" />
                  </span>
                  <div className=" flex flex-col items-center gap-2">
                    <h1 className=" text-xs">{bestseller.name}</h1>
                    <div className=" flex gap-1">
                    <img   src={bestseller.starImg} alt=""  />
                    <img src={bestseller.starImg} alt="" />
                    <img src={bestseller.starImg} alt="" />
                    </div>
                    <p className=" text-xl text-gray-500">{bestseller.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* buttonContainer */}
        <div className=" flex gap-4">
          <div>
            <h1>Featured</h1>
            <hr className=" bg-gray-300 h-1 my-4 " />
            <div className=" flex justify-between">
              <p>left</p>
              <p>right</p>
            </div>
          </div>
          <div>
            <h1>Hot Sale</h1>
            <hr className=" bg-gray-300 h-1 my-4 " />
            <div className=" flex justify-between">
              <p>left</p>
              <p>right</p>
            </div>
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
