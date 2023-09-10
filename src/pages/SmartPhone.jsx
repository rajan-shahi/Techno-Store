import React, { useState } from "react";
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
import Airphone from "../assets/Airphone.jpg";
import { smartphones } from "../data/Data";

import { mobiles } from "../data/Data";

import Six0 from "../assets/19.jpg";
const SmartPhone = () => {
  const [lists, setLists] = useState(smartphones);
 

  return (
    <div className=" flex justify-center py-4">
      {/* container */}
      <div className=" w-10/12  bg-gray-100 py-5 px-10">
        {/* top */}
        <div className=" flex justify-between text-gray-400  border-b-2 ">
          <h1
            onClick={() => setLists(smartphones)}
            className="  px-4 text-2xl pb-3 hover:bg-gray-600 hover:rounded-full hover:text-white/80 "
          >
            Smartphones
          </h1>
          <h1
            onClick={() => setLists(tablets)}
            className=" px-4 text-2xl pb-3 hover:bg-gray-600 hover:rounded-full hover:text-white/80 "
          >
            Tablets
          </h1>
          <h1
            onClick={() => setLists(games)}
            className=" px-4 text-2xl pb-3 hover:bg-gray-600 hover:rounded-full hover:text-white/80"
          >
            Game Box
          </h1>
          <h1
            onClick={() => setLists(accessories)}
            className=" px-4 text-2xl pb-3 hover:bg-gray-600 hover:rounded-full hover:text-white/80"
          >
            Accessories
          </h1>
          <h1
            onClick={() => setLists(mobiles)}
            className=" px-4 text-2xl pb-3 hover:bg-gray-600 hover:rounded-full hover:text-white/80"
          >
            Mobiles
          </h1>
          <h1
            onClick={() => setLists(computers)}
            className=" px-4 text-2xl pb-3 hover:bg-gray-600 hover:rounded-full hover:text-white/80"
          >
            Computers
          </h1>
        </div>
        {/* down */}
        <div className=" flex justify-between py-4 px-4 ">
          {/* left */}
          <div className=" w-7/12 justify-center">
            <div className=" flex-col gap-4 grid grid-cols-2 ">
              {lists.map((smartphone, index) => (
                <div
                  key={index}
                  className="  bg-white  flex flex-col border-2  border-gray-100  hover:border-gray-300 rounded-xl items-center "
                >
                  <div className=" flex flex-col items-center gap-2  py-6">
                    <img
                      className=" cursor-pointer"
                      src={smartphone.image}
                      alt=""
                    />
                    <p className=" text-1xl text-gray-400">{smartphone.name}</p>
                    <p className=" text-gray-600 text-2xl cursor-pointer hover:text-orange-300">
                      {smartphone.model}
                    </p>
                    <p className="hover:text-orange-300 cursor-pointer">
                      {smartphone.desc}
                    </p>
                    <p className=" text-2xl text-orange-400">
                      {smartphone.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* right */}
          <div className=" w-3/12 bg-white px-4 py-4 rounded-md border-gray-100 hover:border-orange-400 border-2  h-max">
            <div className=" px-4 py-4 flex justify-center flex-col items-center gap-4 ">
              <img className="  h-80  cursor-pointer " src={Airphone} alt="" />
              <p className=" text-sm text-gray-400">Headphones</p>
              <h1 className=" text-2xl text-gray-600">Beats Solo</h1>
              <h1 className=" text-2xl text-gray-600">HD</h1>
              <p className=" text-3xl text-orange-300">$5,759.68</p>
              <button className=" w-full rounded-full bg-orange-700 px-6 py-4  text-xl  text-white hover:bg-orange-400 hover:text-gray-200">
                Add to card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartPhone;

// const smartphones = [
//   {
//     image: One,
//     name: "Laptop",
//     model: "Apple ipad Mini",
//     desc: "G2356",
//     price: " $ 1250.00",
//     card: "Add to Card",
//   },
//   {
//     image: Two,
//     name: "Cameras",
//     model: "New X5c-12.4Ghz Gyro",
//     desc: "Rc Quadcopter Drone",
//     price: " $ 12590.00",
//     card: "Add to Card",
//   },
//   {
//     image: Five,
//     name: "Cameras",
//     model: "Apple Ipad New",
//     desc: "G2356",
//     price: " $ 12400.00",
//     card: "Add to Card",
//   },
//   {
//     image: Six,
//     name: "Cameras",
//     model: "New X5c-12563Djk",
//     desc: "CKli-01Jb",
//     price: " $ 12542.00",
//     card: "Add to Card",
//   },
//   {
//     image: Three,
//     name: "Headphones",
//     model: "Beats Solo",
//     desc: "HD",
//     price: " $ 756250.00",
//     card: "Add to Card",
//   },
//   {
//     image: Four,
//     name: "Computers",
//     model: "Apple Imac Zosc4824",
//     desc: "Retin",
//     price: " $ 12850.00",
//     card: "Add to Card",
//   },
//   {
//     image: Seven,
//     name: "Computer",
//     model: "Apple ipad 1232BG 9.7",
//     desc: "Tablet",
//     price: " $ 42250.00",
//     card: "Add to Card",
//   },
//   {
//     image: Eighteen,
//     name: "Computers",
//     model: "smartphone 75",
//     desc: "123GB",
//     price: " $ 12552.03650",
//     card: "Add to Card",
//   },
//   {
//     image: Seventeen,
//     name: "Computers",
//     model: "Beats snarkitecture",
//     desc: "Headphones",
//     price: " $ 12450.00",
//     card: "Add to Card",
//   },
//   {
//     image: Ninteen,
//     name: "Computer",
//     desc: "40K6013UPB10",
//     price: " $ 12050.010",
//     card: "Add to Card",
//   },
// ];

// const tablets = [
//   {
//     image: One,
//     name: "Tablet33",
//     model: "Apple ipad Mini",
//     desc: "G2356",
//     price: " $ 1250.00",
//     card: "Add to Card",
//   },
//   {
//     image: Two,
//     name: "333333",
//     model: "New X5c-12.4Ghz Gyro",
//     desc: "Rc Quadcopter Drone",
//     price: " $ 12590.00",
//     card: "Add to Card",
//   },
//   {
//     image: Five,
//     name: "5656565",
//     model: "Apple Ipad New",
//     desc: "G2356",
//     price: " $ 12400.00",
//     card: "Add to Card",
//   },
//   {
//     image: Six,
//     name: "Cam566565665eras",
//     model: "New X5c-12563Djk",
//     desc: "CKli-01Jb",
//     price: " $ 12542.00",
//     card: "Add to Card",
//   },
//   {
//     image: Three,
//     name: "Headphones",
//     model: "Beats Solo",
//     desc: "HD",
//     price: " $ 756250.00",
//     card: "Add to Card",
//   },
//   {
//     image: Four,
//     name: "Computers",
//     model: "Apple Imac Zosc4824",
//     desc: "Retin",
//     price: " $ 12850.00",
//     card: "Add to Card",
//   },
//   {
//     image: Seven,
//     name: "Computer",
//     model: "Apple ipad 1232BG 9.7",
//     desc: "Tablet",
//     price: " $ 42250.00",
//     card: "Add to Card",
//   },
//   {
//     image: Eighteen,
//     name: "Computers",
//     model: "smartphone 75",
//     desc: "123GB",
//     price: " $ 12552.03650",
//     card: "Add to Card",
//   },
//   {
//     image: Seventeen,
//     name: "Computers",
//     model: "Beats snarkitecture",
//     desc: "Headphones",
//     price: " $ 12450.00",
//     card: "Add to Card",
//   },
//   {
//     image: Ninteen,
//     name: "Computer",
//     desc: "40K6013UPB10",
//     price: " $ 12050.010",
//     card: "Add to Card",
//   },
// ];

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

const computers = [
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
    price: " $ 756250.00",
    card: "Add to Card",
  },
  {
    image: Six0,
    name: "Cameras",
    model: "New X5c-12563Djk",
    desc: "CKli-01Jb",
    price: " $ 12542.00",
    card: "Add to Card",
  },
  {
    image: Seven,
    name: "Digita Clock",
    model: "Beats Solo",
    desc: "HD",
    price: " $ 756250.00",
    card: "Add to Card",
  },
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
];

// const mobiles = [
//   {
//     image: One,
//     name: "Cameras",
//     model: "New X5c-12.4Ghz",
//     desc: "Rc Quadcopter Drone",
//     price: " $ 12590.00",
//     card: "Add to Card",
//   },
//   {
//     image: Eighteen,
//     name: "Cameras",
//     model: "Apple Ipad New",
//     desc: "G2356",
//     price: " $ 12400.00",
//     card: "Add to Card",
//   },
//   {
//     image: Ninteen,
//     name: "Cameras",
//     model: "New X5c-12563Djk",
//     desc: "CKli-01Jb",
//     price: " $ 12542.00",
//     card: "Add to Card",
//   },
//   {
//     image: Four,
//     name: "Headphones",
//     model: "Beats Solo",
//     price: " $ 756250.00",
//     card: "Add to Card",
//   },
//   {
//     image: Six0,
//     name: "Cameras",
//     model: "New X5c-12563Djk",
//     desc: "CKli-01Jb",
//     price: " $ 12542.00",
//     card: "Add to Card",
//   },
//   {
//     image: Seven,
//     name: "Digita Clock",
//     model: "Beats Solo",
//     desc: "HD",
//     price: " $ 756250.00",
//     card: "Add to Card",
//   },
//   {
//     image: Two,
//     name: "Cameras",
//     model: "New X5c-12.4Ghz",
//     desc: "Rc Quadcopter Drone",
//     price: " $ 12590.00",
//     card: "Add to Card",
//   },
//   {
//     image: Six,
//     name: "Cameras",
//     model: "Apple Ipad New",
//     desc: "G2356",
//     price: " $ 12400.00",
//     card: "Add to Card",
//   },
//   {
//     image: Seventeen,
//     name: "Cameras",
//     model: "New X5c-12563Djk",
//     desc: "CKli-01Jb",
//     price: " $ 12542.00",
//     card: "Add to Card",
//   },
// ];

// const accessories = [
//   {
//     image: One,
//     name: "Laptop",
//     model: "Apple ipad Mini",
//     desc: "G2356",
//     price: " $ 1250.00",
//     card: "Add to Card",
//   },
//   {
//     image: Two,
//     name: "Cameras",
//     model: "New X5c-12.4Ghz Gyro",
//     desc: "Rc Quadcopter Drone",
//     price: " $ 12590.00",
//     card: "Add to Card",
//   },
//   {
//     image: Five,
//     name: "Cameras",
//     model: "Apple Ipad New",
//     desc: "G2356",
//     price: " $ 12400.00",
//     card: "Add to Card",
//   },
//   {
//     image: Six,
//     name: "Cameras",
//     model: "New X5c-12563Djk",
//     desc: "CKli-01Jb",
//     price: " $ 12542.00",
//     card: "Add to Card",
//   },
//   {
//     image: Three,
//     name: "Headphones",
//     model: "Beats Solo",
//     desc: "HD",
//     price: " $ 756250.00",
//     card: "Add to Card",
//   },
//   {
//     image: Four,
//     name: "Computers",
//     model: "Apple Imac Zosc4824",
//     desc: "Retin",
//     price: " $ 12850.00",
//     card: "Add to Card",
//   },
//   {
//     image: Seven,
//     name: "Computer",
//     model: "Apple ipad 1232BG 9.7",
//     desc: "Tablet",
//     price: " $ 42250.00",
//     card: "Add to Card",
//   },
//   {
//     image: Eighteen,
//     name: "Computers",
//     model: "smartphone 75",
//     desc: "123GB",
//     price: " $ 12552.03650",
//     card: "Add to Card",
//   },
//   {
//     image: Seventeen,
//     name: "Computers",
//     model: "Beats snarkitecture",
//     desc: "Headphones",
//     price: " $ 12450.00",
//     card: "Add to Card",
//   },
//   {
//     image: Ninteen,
//     name: "Computer",
//     desc: "40K6013UPB10",
//     price: " $ 12050.010",
//     card: "Add to Card",
//   },
// ];

const games = [
  {
    image: Four,
    name: "Laptop",
    model: "Apple ipad Mini",
    desc: "G2356",
    price: " $ 1250.00",
    card: "Add to Card",
  },
  {
    image: Seven,
    name: "Cameras",
    model: "New X5c-12.4Ghz Gyro",
    desc: "Rc Quadcopter Drone",
    price: " $ 12590.00",
    card: "Add to Card",
  },
  {
    image: Eighteen,
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
    image: Airphone,
    name: "Headphones",
    model: "Beats Solo",
    desc: "HD",
    price: " $ 756250.00",
    card: "Add to Card",
  },
  {
    image: Four,
    name: "Computers",
    model: "Apple Imac Zosc4824",
    desc: "Retin",
    price: " $ 12850.00",
    card: "Add to Card",
  },
  {
    image: Seven,
    name: "Computer",
    model: "Apple ipad 1232BG 9.7",
    desc: "Tablet",
    price: " $ 42250.00",
    card: "Add to Card",
  },
  {
    image: Ninteen,
    name: "Computers",
    model: "smartphone 75",
    desc: "123GB",
    price: " $ 12552.03650",
    card: "Add to Card",
  },
  {
    image: Seventeen,
    name: "Computers",
    model: "Beats snarkitecture",
    desc: "Headphones",
    price: " $ 12450.00",
    card: "Add to Card",
  },
  {
    image: Eighteen,
    name: "Computer",
    desc: "40K6013UPB10",
    price: " $ 12050.010",
    card: "Add to Card",
  },
];
