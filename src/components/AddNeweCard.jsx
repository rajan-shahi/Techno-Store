import React from "react";

const AddNeweCard = () => {
  return (
    <div className=" flex justify-center">
      <div className=" flex justify-center  w-10/12 ite">
        {/* left */}
        <div className="w-5/12 py-8  flex flex-col  gap-8 justify-center">
          <div>
            <h1 className=" text-3xl text-gray-500 flex justify-center cursor-pointer">Add New Card</h1>
          </div>
          <div className=" flex flex-col gap-1">
            <span className=" text-xl text-gray-500">Title</span>
            <input className=" border-2 px-2 py-2 w-[500px] rounded-full outline-orange-400 placeholder:text-sm"
              type="text"
              placeholder="e.g I will do something Iam really good at"
            />
          </div>

          <div className=" flex flex-col gap-1">
            <span className=" text-xl text-gray-500">Category</span>
            <select className="border-2  px-2 py-2 w-[500px] rounded-full outline-orange-400" name="" id="">
              <option value="">Design</option>
              <option value="Web Development">Web Development</option>
              <option value="Music">Music</option>
            </select>
          </div>
          <div  className=" flex flex-col gap-1">
            <span className=" text-xl text-gray-500">Cover Image</span>
            <input className="" type="file" />
          </div>
          <div>
            <h1 className=" text-xl text-gray-500">Upload Images</h1>
          </div>
          <div>
            <h1 className=" text-xl text-gray-500">Description</h1>
          </div>
          <div >
            <textarea className=" h-[200px] border-2  px-2 py-2 w-[500px]  outline-orange-400 rounded-lg placeholder:text-sm" name="" id="" cols="30" rows="10" placeholder="Brief description to introduce your service to customers"></textarea>
          </div>
          <div>
            <button>Create</button>
          </div>
        </div>
        {/* right */}
        <div className=" w-5/12">right</div>
      </div>
    </div>
  );
};

export default AddNeweCard;
