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

const NewArrivals = () => {
  return (
    <div className=" flex justify-center">
      {/* container */}
      <div className="  w-10/12 grid grid-cols-5 gap-2">
        {products.map((product, index) => (

          <div key={index} className="border p-3 ">
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <p>{product.model}</p>
            <p>{product.desc}</p>
            <p>{product.price}</p>
          </div>

        ))}
      </div>
    </div>
  );
};

export default NewArrivals;



const products = [
  {
    image: One,
    name: "Laptop",
    model:"Apple ipad Mini",
    desc:"G2356",
    price: 1250.00,
  },
  {
    image: Two,
    name: "Cameras",
    model:"New X5c-12.4Ghz Gyro",
    desc:"Rc Quadcopter Drone",
    price: 2009.00,
  },
  {
    image: Five,
    name: "Cameras",
    model:"Apple Ipad New",
    desc:"G2356",
    price: 1250.00,
  },
  {
    name: "Cameras",
    model:"New X5c-12563Djk",
    image: Six,
    price: 20090.00,
  },
  {
    image: Three,
    name: "Headphones",
    model:"Beats Solo",
    desc:"HD",
    price: 1999.000,
  },
  {
    image: Four,
    name: "Computers",
 model:"Apple Imac Zosc4824",
 desc:"Retin",
    price: 5759.68,
  },
  {
    image: Seven,
    name: "Computer",
  model:"Apple ipad 1232BG 9.7",
  desc:"Tablet",
    price: 5565.100,
  },
  {
    image: Eighteen,
    name: "Computers",
model:"smartphone 75",
desc:"123GB",
    price: 2356.0123,
  },
  {
    image: Seventeen,
    name: "Computers",
   model:"Beats snarkitecture",
   desc:"Headphones",
    price: 5523.01254,
  },
  {
    image: Ninteen,
    name: "Computer",
  model:"Notebook Widescreen Z51-120",
  desc:"40K6013UPB10",
    price:  125463.0010,
  },
];
