import React from "react";
import Headphone from "../assets/Airphone.jpg";
import Two from "../assets/02.jpg";
import Five from "../assets/05.jpg";
import Six from "../assets/06.jpg";
import Three from "../assets/03.jpg";
const Tablets = () => {
  return (
    <div className=" flex justify-center py-4">
      {/* container */}
      <div className=" flex  flex-col justify-center w-10/12 bg-gray-100">
        <div className=" flex gap-4 py-5 justify-center">
          {/* top */}
          <div className=" flex justify-center  bg-white py-8  w-5/12 border-2 border-gray-100 hover:border-orange-300 ">
            {Headphones.map((Headphone, index) => (
              <p className=" flex flex-col items-center gap-8 pb-6 ">
                <div className=" cursor-pointer">
                  <img key={index} src={Headphone.image} alt="" />
                </div>
                <div className=" flex flex-col items-center gap-1">
                  <h1 className=" text-1xl text-gray-400">{Headphone.name}</h1>
                  <h3 className=" text-2xl text-gray-600 hover:text-orange-400 ">
                    {Headphone.model}
                  </h3>
                  <p className=" text-2xl text-gray-600 hover:text-orange-400 ">
                    {Headphone.desc}
                  </p>
                  <h2 className=" text-3xl  text-orange-400">
                    {Headphone.price}
                  </h2>
                </div>
                <button className=" text-xl rounded-full bg-orange-400  w-full px-12 py-4 text-white cursor-pointer hover:bg-orange-700 ">
                  {Headphone.card}
                </button>
              </p>
            ))}
          </div>
          <div className=" w-5/12">
            <div className="  flex-col gap-4 grid grid-cols-2 ">
                {tablets.map((tablet,index)=>(
                    <div  key={index} className=" bg-white px-4 py-4 flex flex-col justify-center items-center gap-4 border-2 border-gray-100 hover:border-gray-300">
                        <div className=" cursor-pointer">
                        <img src={tablet.image} alt="" />
                        </div>
                        <div className=" flex items-center flex-col">
                        <h1 className=" text-1xl text-gray-400">{tablet.name}</h1>
                        <h1  className=" text-1xl text-gray-600 hover:text-orange-400 ">{tablet.model}</h1>
                        <h2  className="hover:text-orange-300 cursor-pointer" >{tablet.desc}</h2>
                        <p  className=" text-2xl text-orange-400">{tablet.price}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
        {/* down */}
        <div className=" w-8/12  pb-4 flex justify-center">
            <div className="  flex-col gap-4 grid grid-cols-2 ">
                {tablets.map((tablet,index)=>(
                    <div  key={index} className=" bg-white px-4 py-4 flex flex-col justify-center items-center gap-4 border-2 border-gray-100 hover:border-gray-300">
                        <div className=" cursor-pointer">
                        <img src={tablet.image} alt="" />
                        </div>
                        <div className=" flex items-center flex-col">
                        <h1 className=" text-1xl text-gray-400">{tablet.name}</h1>
                        <h1  className=" text-1xl text-gray-600 hover:text-orange-400 ">{tablet.model}</h1>
                        <h2  className="hover:text-orange-300 cursor-pointer" >{tablet.desc}</h2>
                        <p  className=" text-2xl text-orange-400">{tablet.price}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Tablets;

const Headphones = [
  {
    image: Headphone,
    name: "Headphone",
    model: "Beats Solo",
    desc: "HD",
    price: " $ 1,999.0000",
    card: "Add to Card",
  },
];

const tablets = [
  {
    image: Two,
    name: "Cameras",
    model: "New X5c-12.4Ghz",
    desc: "Rc Quadcopter Drone",
    price: " $ 12590.00",
    card: "Add to Card",
  },
  {
    image: Five,
    name: "Cameras",
    model: "Apple Ipad New",
    desc: "G2356",
    price: " $ 12400.00",
    card: "Add to Card",
  },
  {
    image: Six,
    name: "Cameras",
    model: "New X5c-12563Djk",
    desc: "CKli-01Jb",
    price: " $ 12542.00",
    card: "Add to Card",
  },
  {
    image: Three,
    name: "Headphones",
    model: "Beats Solo",
    desc: "HD",
    price: " $ 756250.00",
    card: "Add to Card",
  },
];
