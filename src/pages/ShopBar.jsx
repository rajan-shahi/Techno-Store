import React from "react";
import { AiOutlineMinus } from "react-icons/ai";

import headphone from "../assets/headphone1.png";
const ShopBar = () => {
  return (
    <div className=" flex justify-center">
      {/* container */}
      <div className=" flex w-10/12 gap-4">
        {/* leftbar */}
        <div className="w-3/12 flex flex-col">
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
          {/* brands */}
          <div className="flex flex-col px-4">
          <div className=" flex  items-center justify-between py-4 border-b border-gray-300">
              <h1 className=" text-xl text-gray-600 ">Brands</h1>
              <span className=" cursor-pointer">
                <AiOutlineMinus size={20} />
              </span>
            </div>
            <div className=" py-5">
            <input className=" w-full px-2 py-2 rounded-full border-2 outline-none" type="text" placeholder=" brands search" />
            </div>
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
          </div>
          {/* colors */}
          <div  className=" flex flex-col px-4">
          <div className=" flex  items-center justify-between py-4 border-b border-gray-300">
              <h1 className=" text-xl text-gray-600 ">Colors</h1>
              <span className=" cursor-pointer">
                <AiOutlineMinus size={20} />
              </span>
            </div>
            <div className=" py-5">
            <input className=" w-full px-2 py-2 rounded-full border-2 outline-none" type="text" placeholder=" colors search" />
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
          <div>bestsellers</div>
        </div>
        {/* rightbar */}
        <div className="w-7/12">
            rightbar
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
      name: "Enhanced Technology",
    },
    {
      image: headphone,
      name: "Enhanced Technology",
      model: "SMART TV",
    },
    {
      image: headphone,
      name: "Enhanced Technology",
    
    },
  
    {
      image: headphone,
      name: "Enhanced Technology",
      model: "SMART TV",
    },
  
    {
      image: headphone,
      name: "Enhanced Technology",
      model: "SMART TV",
    },
   
    {
      image: headphone,
      name: "Enhanced Technology",
      model: "SMART TV",
    },
  ];
  