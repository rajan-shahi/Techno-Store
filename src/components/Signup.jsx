import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleSignup = () => {
    toast.success("Sucess Register");
  };
  return (
    <div className=" flex justify-center items-center  ">
      <div className="flex  flex-col gap-4 w-full md:w-3/12  ">
        <div className=" flex flex-col items-center justify-center">
          <h1 className=" text-3xl  text-gray-500 cursor-pointer hover:text-orange-400">
            Register
          </h1>
          <h2 className=" text-sm text-gray-500">
            You have Already an account ?{" "}
            <span className=" text-blue-500 cursor-pointer text-xl hover:text-orange-400">
              <Link to={"/signin"}> sign in</Link>
            </span>
          </h2>
        </div>
        <form
          onSubmit={handleSignup}
          className=" flex  md:px-4 flex-col md:gap-5  gap-6 justify-center items-center"
        >
          <div className=" flex flex-col">
            <span className=" text-md text-gray-600">Usename</span>
            <input
              name="name"
              className=" w-[350px] border  border-gray-400 outline-orange-400 px-2 md:py-1 py-2 rounded-lg  placeholder:text-sm"
              placeholder="Enter Username"
              required
            />
          </div>

          <div className=" flex flex-col">
            <span className=" text-md text-gray-600">Email</span>
            <input
              name="email"
              className=" w-[350px] border  border-gray-400 outline-orange-400 px-2 md:py-1 py-2 rounded-lg  placeholder:text-sm"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className=" flex flex-col">
            <span className=" text-md text-gray-600">Date of birth</span>
            <input
              name="date"
              className=" w-[350px] border  border-gray-400 outline-orange-400 px-2 md:py-1 py-2 rounded-lg  placeholder:text-sm "
              type="text"
              placeholder="mm/dd/yyyy"
              required
            />
          </div>
          <div className=" flex flex-col">
            <span className=" text-md text-gray-600">Password</span>
            <input
              name="password"
              className=" w-[350px] border  border-gray-400 outline-orange-400 px-2 md:py-1 py-2 rounded-lg  placeholder:text-sm"
              type="password"
              placeholder="Enter password"
              required
            />
          </div>
          <div className=" flex flex-col">
            <span className=" text-md text-gray-600">Conform Password</span>
            <input
              name="password"
              className=" w-[350px] border  border-gray-400 outline-orange-400 px-2 md:py-1 py-2 rounded-lg  placeholder:text-sm"
              type="password"
              placeholder="Enter Conform password"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className=" hover:bg-orange-400 duration-500 w-[350px] border  border-gray-400 outline-orange-400 px-1 py-2 md:py-1 rounded-lg  bg-blue-400 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
