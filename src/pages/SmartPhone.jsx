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
const SmartPhone = () => {
  return (
    <div className=" flex justify-center py-4">
      {/* container */}
      <div className=" w-10/12  bg-gray-100 py-5 px-10">
        {/* top */}
        <div className=" flex justify-between text-gray-400  border-b-2 ">
          <h1 className="  px-4 text-2xl pb-3 hover:bg-gray-600 hover:rounded-full hover:text-white/80 ">
            Smartphones
          </h1>
          <h1 className=" px-4 text-2xl pb-3 hover:bg-gray-600 hover:rounded-full hover:text-white/80 ">
            Tablets
          </h1>
          <h1 className=" px-4 text-2xl pb-3 hover:bg-gray-600 hover:rounded-full hover:text-white/80">
            Game Box
          </h1>
          <h1 className=" px-4 text-2xl pb-3 hover:bg-gray-600 hover:rounded-full hover:text-white/80">
            Accessories
          </h1>
          <h1 className=" px-4 text-2xl pb-3 hover:bg-gray-600 hover:rounded-full hover:text-white/80">
            Mobiles
          </h1>
          <h1 className=" px-4 text-2xl pb-3 hover:bg-gray-600 hover:rounded-full hover:text-white/80">
            Computers
          </h1>
        </div>
        {/* down */}
        <div className=" flex justify-between py-4 px-4 ">
          {/* left */}
          <div className=" w-7/12 justify-center">
            <div className=" flex-col gap-4 grid grid-cols-2 ">
              {smartphones.map((smartphone, index) => (
                <div
                  key={index}
                  className="  bg-white  flex flex-col border-2 rounded-xl items-center hover:border-orange-300 "
                >
                  <img src={smartphone.image} alt="" />
                  <p>{smartphone.name}</p>
                  <p>{smartphone.model}</p>
                  <p>{smartphone.price}</p>
                </div>
              ))}
            </div>
          </div>
          {/* right */}
          <div className=" w-3/12 bg-white px-4 py-4 rounded-md  ">
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur molestiae tenetur nisi accusamus odit quaerat velit
              ullam voluptatum id, doloribus dolorem vel dolor quisquam
              temporibus eius placeat accusantium repellendus eligendi culpa
              ipsum autem. Neque exercitationem eius ducimus assumenda sit
              dolorem ullam quos. In eligendi recusandae cum aspernatur ea
              reprehenderit minus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartPhone;

const smartphones = [
  {
    image: One,
    name: "Laptop",
    model: "Apple ipad Mini",
    desc: "G2356",
    price: " $ 1250.00",
    card: "Add to Card",
  },
  {
    image: Two,
    name: "Cameras",
    model: "New X5c-12.4Ghz Gyro",
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
    image: Eighteen,
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
    image: Ninteen,
    name: "Computer",
    model: "Notebook Widescreen Z51-120",
    desc: "40K6013UPB10",
    price: " $ 12050.010",
    card: "Add to Card",
  },
];
