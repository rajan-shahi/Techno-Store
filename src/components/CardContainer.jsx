import React from 'react'
import Home from "../assets/home-06.jpg";
import Home7 from "../assets/home-07.jpg";
import Home9 from "../assets/home-09.jpg";
import Home10 from "../assets/home-10.jpg";

const CardContainer = () => {
  return (
    <div className=' flex justify-center'>
    {/* container */}
    <div className='  hidden md:flex  w-10/12'>
        <div className=' grid  gap-4 grid-cols-1 md:grid-cols-2 py-8'>
            <div className='cursor-pointer'>
                <img  src={Home} alt="" />
            </div>
            <div className=' cursor-pointer'>
                <img src={Home7} alt="" />
            </div>
            <div className=' cursor-pointer'>
                <img src={Home9} alt="" />
                </div>
            <div className=' cursor-pointer'>
                <img src={Home10} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default CardContainer
