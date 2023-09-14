import React from "react";

const Contact = () => {
  return (
    <div className=" flex justify-center">
      <div className=" flex w-10/12 py-8 justify-center bg-gray-300">
        <div className=" flex flex-col  shadow-md shadow-slate-400 px-8 py-8 w-[400px]">
           <span className=" text-2xl text-white py-1">First Name:</span>
          <input
            className="  p-2 rounded-full cursor-pointer"
            type="text"
            placeholder=" enter your first name........."
          />
          <span className=" text-2xl  text-white py-1">Last Name:</span>
          <input className=" p-2 rounded-full" type="text" placeholder=" enter your last name ........" />
           <span>Subject:</span>
          <input className="" type="text" placeholder="subject ............" />
         <textarea className=" h-40" name=""  placeholder=" message ......" id="" cols="10" rows="10"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
