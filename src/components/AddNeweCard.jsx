import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const AddNeweCard = () => {
  return (
    <div className=" flex  justify-center py-5">
      <div className=" md:flex md:px-0 px-4  justify-between  md:w-10/12 w-full">
        {/* left */}
        <div className="md:w-5/12 w-full   flex flex-col  gap-6 justify-center">
          <div className=" flex flex-col justify-center items-center">
            <h1 className=" text-3xl text-gray-500 flex justify-center cursor-pointer hover:text-orange-400">
              <span>Add New Card</span> 
            </h1>
          </div>
          <div className=" flex flex-col gap-1">
            <span className=" text-sm text-gray-500">Title</span>
            <input
              className=" border-2 px-2 py-2 md:w-[500px] w-[350px] rounded-full outline-orange-400 placeholder:text-sm"
              type="text"
              placeholder="e.g I will do something Iam really good at"
            />
          </div>
          hello
          <div className=" flex flex-col gap-1">
            <span className=" text-sm text-gray-500">Category</span>
            <select
              className="border-2  px-2 py-2 md:w-[500px] w-[350px] rounded-full outline-orange-400"
              name=""
              id=""
            >
              <option value="">Design</option>
              <option value="Web Development">Web Development</option>
              <option value="Music">Music</option>
            </select>
          </div>
          <div className=" flex flex-col gap-1">
            <span className=" text-sm text-gray-500">Cover Image</span>
            <input className="" type="file" />
          </div>
          <div>
            <h1 className=" text-sm text-gray-500">Upload Images</h1>
          </div>
          <div>
            <h1 className=" text-sm text-gray-500">Description</h1>
          </div>
          <div>
            <textarea
              className=" h-[200px] border-2  px-2 py-2 md:w-[500px] w-[350px] outline-orange-400 rounded-lg placeholder:text-sm"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Brief description to introduce your service to customers"
            ></textarea>
          </div>
        </div>
        {/* right */}
        <div className=" md:pt-0 pt-6 md:w-5/12 w-full ">
          <div className=" flex flex-col gap-6 justify-center">
            <div className=" flex flex-col gap-1">
              <span className=" text-sm text-gray-500">Service Title</span>
              <input
                className=" border-2 px-2 py-2 md:w-[500px] w-[350px] rounded-full outline-orange-400 placeholder:text-sm"
                type="text"
                placeholder=" e.g One-page web Design"
              />
            </div>
            <div className=" flex flex-col gap-1">
              <span className=" text-sm text-gray-500">Short Description</span>
              <textarea
                className=" h-[200px] border-2  px-2 py-2 md:w-[500px] w-[350px]  outline-orange-400 rounded-lg placeholder:text-sm"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder=" short description of your services"
              ></textarea>
            </div>
            <div className=" flex flex-col gap-1">
              <span className=" text-sm text-gray-500">Delivery Time</span>
              <input
                className=" border-2 px-2 py-2 md:w-[500px] w-[350px] rounded-full outline-orange-400 placeholder:text-sm"
                type="time"
              />
            </div>

            <div className=" flex flex-col gap-1">
              <span className=" text-sm text-gray-500">Add features</span>
              <input
                className=" border-2 px-2 py-2 md:w-[500px] w-[350px] rounded-full outline-orange-400 placeholder:text-sm"
                type="text"
                placeholder="e.g page design"
              />
            </div>
            <div className=" flex flex-col gap-1">
              <span className=" text-sm text-gray-500">Price</span>
              <input
                className=" border-2 px-2 py-2 md:w-[500px] w-[350px] rounded-full outline-orange-400 placeholder:text-sm"
                type="number"
                min={1}
              />
            </div>
            <div>
              <button className=" flex justify-center text-md text-white bg-blue-400 border-2  py-2 md:w-[500px] w-[350px] rounded-lg  hover:bg-orange-300  ">
                Create
              </button>
            </div>
            <div className=" flex px-10  justify-end items-center">
            <Link to={"/"}> 
              <span className=" cursor-pointer">
                <BsArrowRight size={25} />
              </span>   </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNeweCard;
