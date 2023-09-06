import React from "react";
import Car from "../assets/car.png";
import Order from "../assets/order.png";
import Payments from "../assets/payment.png";
import Returns from "../assets/return.png";
const Payment = () => {
  return (
    <div className=" flex justify-center">
      {/* container */}
      <div className=" grid grid-cols-1 sm:grid-cols-4 w-10/12  justify-between">
        <div>
          <img
            className="  py-4 px-2 rounded-full  border-2 hover:border-orange-400 cursor-pointer"
            src={Car}
            alt=""
          />
          <h1 className=" pt-4">Worldwide Shipping</h1>
          <p className=" text-gray-400">free shipping on order over</p>
          <p className=" text-gray-400">$100</p>
        </div>
        <div>
          <img
            className="  py-2 px-2 rounded-full  border-2 hover:border-orange-400 cursor-pointer"
            src={Order}
            alt=""
          />
          <h1 className=" pt-4">Order Online Service</h1>
          <p className=" text-gray-400">Free return products in 30 days</p>
        </div>
        <div>
          <img
            className="  py-3 px-2 rounded-full  border-2 hover:border-orange-400 cursor-pointer"
            src={Payments}
            alt=""
          />
          <h1 className=" pt-4">Payment</h1>
          <p className=" text-gray-400">Secure system</p>
        </div>
        <div>
          <img
            className="  py-3 px-2 rounded-full  border-2 hover:border-orange-400 cursor-pointer"
            src={Returns}
            alt=""
          />
          <h1 className=" pt-4">Return 30 Days</h1>
          <p className=" text-gray-400">Free return products in </p>
          <p className=" text-gray-400">30 days</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
