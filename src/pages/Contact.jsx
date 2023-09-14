import React from "react";

const Contact = () => {
  return (
    <div className=" flex justify-center">
      <div className=" flex w-10/12 justify-center bg-gray-300 text-white">
        <div className=" flex flex-col gap-2 shadow-md shadow-slate-400 px-8 py-8">
          First Name:
          <input
            className=""
            type="text"
            placeholder=" enter your first name........."
          />
          Last Name:
          <input className="" type="text" placeholder=" enter your last name ........" />
          Subject:
          <input className="" type="text" placeholder="subject ............" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
