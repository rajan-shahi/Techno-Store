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
import { Link } from "react-router-dom";

const NewArrivalsCom = () => {
  const [actives, setActives] = useState(products);

  return (
    <div name="NewArrivals" className=" flex justify-center">
      <div className=" md:pt-0 pt-5 flex w-10/12 flex-col ">
        <div className=" flex gap-8 md:text-xl  text-gray-700  border-b-2 py-4 w-full border-gray-200 ">
          <button
            onClick={() => setActives(products)}
            className={` ${actives.name === "pro" ? "text-red-500" : ""}`}
          >
            New Arrivals
          </button>
          <button
            onClick={() => setActives(featureds)}
            className={` ${actives.name === "featu" ? "text-red-500" : ""}`}
          >
            Featured
          </button>
          <button
            onClick={() => setActives(sellings)}
            className={` ${actives.name === "sells" ? "text-red-500" : ""}`}
          >
            {" "}
            Top Selling
          </button>
        </div>
        <div>
          <div className=" grid grid-cols-1 md:grid-cols-6 py-4 ">
            {actives?.items?.map((product, index) => (
              <div
                key={index}
                className="border border-transparent rounded-2xl hover:border-gray-300   transition all  ease-in-out "
              >
                <div className=" flex flex-col gap-3 py-12  items-center">
                  <img
                    className=" cursor-pointer pb-4 h-28 "
                    src={product.image}
                    alt=""
                  />
                  <p className=" text-gray-300  ">{product.name}</p>
                  <p className=" hover:text-orange-600 cursor-pointer text-sm text-gray-500">
                    {product.model}
                  </p>
                  <p className=" hover:text-orange-600 cursor-pointer text-sm">
                    {product.desc}
                  </p>
                  <p className=" text-orange-600 text-2xl cursor-pointer">
                    {product.price}
                  </p>
                  <Link to={"/add to card"}>
                    <p className=" flex items-center bg-orange-300 px-4 py-2 border rounded-full text-white cursor-pointer hover:bg-orange-600     transition all  ease-in-out ">
                      {product.card}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsCom;

const products = {
  name: "pro",
  items: [
    {
      image: One,
      name: "Laptop",
      model: "Apple ipad Mini",
      desc: "G2356",
      price: " $ 1250.00",
      card: "Add to New Card",
    },
    {
      image: Two,
      name: "Cameras",
      model: "New X5c-12.4Ghz Gyro",
      desc: "Rc Quadcopter Drone",
      price: " $ 12590.00",
      card: "Add to New Card",
    },
    {
      image: Five,
      name: "Cameras",
      model: "Apple Ipad New",
      desc: "G2356",
      price: " $ 12400.00",
      card: "Add to New Card",
    },
    {
      image: Six,
      name: "Cameras",
      model: "New X5c-12563Djk",
      desc: "CKli-01Jb",
      price: " $ 12542.00",
      card: "Add to New Card",
    },
    {
      image: Three,
      name: "Headphones",
      model: "Beats Solo",
      desc: "HD",
      price: " $ 756250.00",
      card: "Add to New Card",
    },
    {
      image: Seventeen,
      name: "Computers",
      model: "Beats snarkitecture",
      desc: "Headphones",
      price: " $ 12450.00",
      card: "Add to New Card",
    },
    {
      image: Four,
      name: "Computers",
      model: "Apple Imac Zosc4824",
      desc: "Retin",
      price: " $ 12850.00",
      card: "Add to New Card",
    },
    {
      image: Seven,
      name: "Computer",
      model: "Apple ipad 1232BG 9.7",
      desc: "Tablet",
      price: " $ 42250.00",
      card: "Add to New Card",
    },
    {
      image: Eighteen,
      name: "Computers",
      model: "smartphone 75",
      desc: "123GB",
      price: " $ 12552.03650",
      card: "Add to New Card",
    },
    {
      image: Seventeen,
      name: "Computers",
      model: "Beats snarkitecture",
      desc: "Headphones",
      price: " $ 12450.00",
      card: "Add to New Card",
    },
    {
      image: Ninteen,
      name: "Computer",
      model: "Notebook Widescreen Z51-120",
      desc: "40K6013UPB10",
      price: " $ 12050.010",
      card: "Add to New Card",
    },
    {
      image: Three,
      name: "Headphones",
      model: "Beats Solo",
      desc: "HD",
      price: " $ 756250.00",
      card: "Add to New Card",
    },
  ],
};

const featureds = {
  name: "featu",
  items: [
    {
      image: Five,
      name: "Camera",
      model: "New X5c-12.4Ghz Gyro",
      desc: "G dwfet 2356",
      price: " $ 1250.00",
      card: "Add to New Featured",
    },
    {
      image: Six,
      name: "Cameras",
      model: "Apple ipad Mini",
      desc: "Rc Quadcopter Drone",
      price: " $ 121200090.00",
      card: "Add to Featured",
    },
    {
      image: Eighteen,
      name: "Laptop",
      model: "New X5c-12563Djk",
      desc: "Gfgfgy2356",
      price: " $ 12412200.00",
      card: "Add to Featured",
    },
    {
      image: Ninteen,
      name: "Cameras",
      model: "Apple Ipad new or Old",
      desc: "CKl cdfgf i-01Jb",
      price: " $ 12542.00",
      card: "Add to Featured",
    },
    {
      image: Four,
      name: "Headphones",
      model: "Apple ipad 1232BG 9.7",
      desc: " cfgvtrytb HD",
      price: " $ 71056250.00",
      card: "Add to Featured",
    },
    {
      image: One,
      name: "Mobile",
      model: "Apple Imac Zosc4824",
      desc: "Retin fgfgvb  head",
      price: " $ 128002250.00",
      card: "Add to Featured",
    },
    {
      image: Seventeen,
      name: "Computers",
      model: "Notebook Widescreen Z51-120",
      desc: "Headv gbtyhtgb phones",
      price: " $ 12450.00",
      card: "Add to Featured",
    },
    {
      image: Five,
      name: "Camera",
      model: "New X5c-12.4Ghz Gyro",
      desc: "G dwfet 2356",
      price: " $ 1250.00",
      card: "Add to Featured",
    },
    {
      image: Seven,
      name: "Computer",
      model: "Beats head Solo",
      desc: "Tab cgvrfft let",
      price: " $ 42250.00",
      card: "Add to Featured",
    },
    {
      image: Two,
      name: "Headphones",
      model: "smartphone 75",
      desc: "1 41025 23GB",
      card: "Add to Featured",
    },
    {
      image: Seventeen,
      name: "Computers",
      model: "Notebook Widescreen Z51-120",
      desc: "Headv gbtyhtgb phones",
      price: " $ 12450.00",
      card: "Add to Featured",
    },
    {
      image: Three,
      name: "Computer",
      model: "Notebook Widescreen Z51-120",
      desc: "40K601 bgtytgb 3UPB10",
      price: " $ 12050.010",
      card: "Add to Featured",
    },
  ],
};

const sellings = {
  name: "sells",
  items: [
    {
      image: Ninteen,
      name: "Laptop",
      model: "Apple ipad Mini",
      desc: "G2356",
      price: " $ 1250.00",
      card: "Add to Selling",
    },
    {
      image: Eighteen,
      name: "Cameras",
      model: "New X5c-12.4Ghz Gyro",
      desc: "Rc Quadcopter Drone",
      price: " $ 12590.00",
      card: "Add to Selling",
    },
    {
      image: Seventeen,
      name: "Cameras",
      model: "Apple Ipad New",
      desc: "G2356",
      price: " $ 12400.00",
      card: "Add to Selling",
    },
    {
      image: Seven,
      name: "Cameras",
      model: "New X5c-12563Djk",
      desc: "CKli-01Jb",
      price: " $ 12542.00",
      card: "Add to Selling",
    },
    {
      image: Four,
      name: "Headphones",
      model: "Beats Solo",
      desc: "HD",
      price: " $ 756250.00",
      card: "Add to Selling",
    },
    {
      image: One,
      name: "Computers",
      model: "Apple Imac Zosc4824",
      card: "Add to Selling",
    },
    {
      image: Three,
      name: "Computer",
      model: "Apple ipad 1232BG 9.7",
      desc: "Tablet",
      price: " $ 42250.00",
      card: "Add to Selling",
    },
    {
      image: Six,
      name: "Computer",
      model: "Notebook Widescreen Z51-120",
      desc: "40K6013UPB10",
      price: " $ 12050.010",
      card: "Add to Selling",
    },
    {
      image: One,
      name: "Computers",
      model: "smartphone 75",
      desc: "123GB",
      price: " $ 12552.03650",
      card: "Add to Selling",
    },
    {
      image: Two,
      name: "Computers",
      model: "Beats snarkitecture",
      desc: "Headphones",
      price: " $ 12450.00",
      card: "Add to Selling",
    },
    {
      image: Six,
      name: "Computer",
      model: "Notebook Widescreen Z51-120",
      desc: "40K6013UPB10",
      price: " $ 12050.010",
      card: "Add to Selling",
    },
    {
      image: Seven,
      name: "Cameras",
      model: "New X5c-12563Djk",
      desc: "CKli-01Jb",
      price: " $ 12542.00",
      card: "Add to Selling",
    },
  ],
};
