import React from "react";

const SighIn = () => {
  return (
    <div className=" flex justify-center ">
      <div className=" flex   flex-col gap-2 w-3/12 shadow-lg py-4">
        <div className=" flex flex-col justify-center items-center">
          <h1>Login</h1>
          <h2>Don't have an account? sign up</h2>
        </div>
        <div className=" flex flex-col gap-3 justify-center items-center">
            <div className=" flex flex-col">
                <span className=" text-md text-gray-600">Email</span>
                <input name="email" className=" w-[350px] border  border-gray-400 outline-orange-400 px-1 py-1 rounded-lg placeholder:text-blue-600" type="email" placeholder="Enter Your email" />
            </div>
            <div className=" flex flex-col">
                <span className=" text-md text-gray-600 ">Password</span>
                <input name="password" className=" w-[350px] border  border-gray-400 outline-orange-400 px-1 py-1 rounded-lg placeholder:text-blue-600" type="password" placeholder="Enter Your password" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SighIn;
