import React from "react";

const AddNeweCard = () => {
  return (
    <div className=" flex justify-center">
      <div className=" flex  py-8 justify-between  w-10/12">
        {/* left */}
        <div className="w-5/12   flex flex-col  gap-8 justify-center">
          <div>
            <h1 className=" text-3xl text-gray-500 flex justify-center cursor-pointer">
              Add New Card
            </h1>
          </div>
          <div className=" flex flex-col gap-1">
            <span className=" text-xl text-gray-500">Title</span>
            <input
              className=" border-2 px-2 py-2 w-[500px] rounded-full outline-orange-400 placeholder:text-sm"
              type="text"
              placeholder="e.g I will do something Iam really good at"
            />
          </div>

          <div className=" flex flex-col gap-1">
            <span className=" text-xl text-gray-500">Category</span>
            <select
              className="border-2  px-2 py-2 w-[500px] rounded-full outline-orange-400"
              name=""
              id=""
            >
              <option value="">Design</option>
              <option value="Web Development">Web Development</option>
              <option value="Music">Music</option>
            </select>
          </div>
          <div className=" flex flex-col gap-1">
            <span className=" text-xl text-gray-500">Cover Image</span>
            <input className="" type="file" />
          </div>
          <div>
            <h1 className=" text-xl text-gray-500">Upload Images</h1>
          </div>
          <div>
            <h1 className=" text-xl text-gray-500">Description</h1>
          </div>
          <div>
            <textarea
              className=" h-[200px] border-2  px-2 py-2 w-[500px]  outline-orange-400 rounded-lg placeholder:text-sm"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Brief description to introduce your service to customers"
            ></textarea>
          </div>
          <div>
            <button>Create</button>
          </div>
        </div>
        {/* right */}
        <div className=" w-5/12">
          <div className=" flex flex-col   py-16 gap-4 justify-center">
            <div>
              <span>Service Title</span>
              <input type="text" placeholder=" e.g One-page web Design" />
            </div>
            <div>
                <span>Short Description</span>
                 <textarea className=" h-[200px]" name="" id="" cols="30" rows="10" placeholder=" short description of your services"></textarea>
            </div>
            <div>
                <span>Delivery Time</span>
                <input type="time" />
            </div>
            <div>
                <span>Revision Number</span>
                <input type="number" />
            </div>
            <div>
                <span>Add features</span>
                <input type="text" placeholder="e.g page design" />
            </div>
            <div>
            <input type="text" placeholder="e.g file uploading" />
            </div>
            <div>
            <input type="text" placeholder="e.g setting up a domain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNeweCard;
