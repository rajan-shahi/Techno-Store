import React from "react";

const SmartPhone = () => {
  return (
    <div className=" flex justify-center py-4">
      {/* container */}
      <div className=" w-10/12 flex flex-col bg-gray-100 py-5 px-10">
        {/* top */}
        <div className=" flex justify-between text-gray-400  border-b-2">
          <h1 className=" text-2xl pb-3 hover:bg-gray-600 ">SmartPhones</h1>
          <h1 className=" text-2xl pb-3 px-2">Tablets</h1>
          <h1 className=" text-2xl pb-3">Game Box</h1>
          <h1 className=" text-2xl pb-3">Accessories</h1>
          <h1 className=" text-2xl pb-3">Mobiles</h1>
          <h1 className=" text-2xl pb-3">Computers</h1>
        </div>
        {/* down */}
        <div>left</div>
      </div>
    </div>
  );
};

export default SmartPhone;
