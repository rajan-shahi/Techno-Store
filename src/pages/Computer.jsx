import React from "react";
import Two from "../assets/02.jpg";
import Five from "../assets/05.jpg";
import Six from "../assets/06.jpg";
import Three from "../assets/001.jpg";
import Seven from "../assets/17.jpg";
import Six0 from "../assets/19.jpg";
const Computer = () => {
  return (
    <div className=" flex justify-center">
      {/* container */}
      <div className=" flex  w-10/12 bg-gray-100 gap-4 flex-col">
        {/* top */}
        <div className=" flex gap-2 ">
          <div className="  flex-col w-10/12 grid grid-cols-3 gap-4 pl-6 py-3 pt-8" >
            {computers.map((computer, index) => (
              <div key={index} className=" bg-white border flex flex-col justify-center items-center gap-3 pb-4">
                <span>
                  <img src={computer.image} alt="" />
                </span>
                <div className=" flex flex-col gap-1 items-center">
                  <h1>{computer.name}</h1>
                  <h2> {computer.model}</h2>
                  <h1> {computer.desc}</h1>
                  <p> {computer.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex flex-col w-2/12">right</div>
        </div>
        {/* buttom */}
        <div>
          <div>left</div>
          <div>right</div>
        </div>
      </div>
    </div>
  );
};

export default Computer;

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
];
