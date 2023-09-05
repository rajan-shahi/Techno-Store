import React from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import One from "../assets/01.png";
import Two from "../assets/02.png";
import Three from "../assets/03.png";
import Four from "../assets/04.png";
import Five from "../assets/05.png";
import Six from "../assets/06.png";
import Seven from "../assets/07.png";
import Eight from "../assets/08.png";
import Nine from "../assets/09.png";
import Ten from "../assets/10.png";
const CategoriesComponents = () => {
  return (
    <div className=" flex justify-center">
      {/* container */}
      <div className=" w-10/12 flex justify-between py-6">
        {/* leftContainer */}
        <div className=" flex flex-col justify-center  w-2/12 border-2 items-center">
          <div className=" flex flex-col items-center gap-4  pb-4 text-gray-600 cursor-pointer">
            <div className=" flex items-center gap-8 bg-gray-600  py-4 px-6 ">
              <AiOutlineAlignLeft />
              <span className=" text-white">All CATEGORIES</span>
            </div>
            <div className=" flex items-center gap-8">
              <img src={One} alt="" />
              <span className=" hover:text-orange-600">Laptop & Mac</span>
            </div>
            <div className=" flex items-center gap-8">
              <img src={Two} alt="" />
              <span  className=" hover:text-orange-600" >Laptop & Mac</span>
            </div>
            <div className=" flex items-center gap-8 ">
              <img src={Three} alt="" />
              <span className=" hover:text-orange-600" >Laptop & Mac</span>
            </div>
            <div className=" flex items-center gap-8">
              <img src={Four} alt="" />
              <span className=" hover:text-orange-600" >Laptop & Mac</span>
            </div>
            <div className=" flex items-center gap-8">
              <img src={Five} alt="" />
              <span className=" hover:text-orange-600" >Laptop & Mac</span>
            </div>
            <div className=" flex items-center gap-8">
              <img src={Six} alt="" />
              <span className=" hover:text-orange-600" >Laptop & Mac</span>
            </div>
            <div className=" flex items-center gap-8 ">
              <img src={Seven} alt="" />
              <span className=" hover:text-orange-600" >Laptop & Mac</span>
            </div>
            <div className=" flex items-center gap-8">
              <img src={Eight} alt="" />
              <span className=" hover:text-orange-600" >Laptop & Mac</span>
            </div>
            <div className=" flex items-center gap-8">
              <img src={Nine} alt="" />
              <span className=" hover:text-orange-600" >Laptop & Mac</span>
            </div>
            <div className=" flex items-center gap-8">
              <img src={Ten} alt="" />
              <span className=" hover:text-orange-600" >Laptop & Mac</span>
            </div>
          </div>
        </div>
        {/* rightContainer */}
        <div className=" w-8/12 bg-gray-600 text-white px-4 py-4 flex items-center ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            corrupti aliquid consequuntur sint aspernatur ratione odit unde
            tempore quasi nisi libero dicta molestias recusandae consequatur
            explicabo perferendis quia amet eum architecto cupiditate animi,
            rerum repudiandae, corporis quos! Vel quo nam quaerat! Vel
            consequatur commodi pariatur obcaecati, quisquam, ratione
            praesentium velit voluptatibus iusto ipsam sequi aperiam numquam
            quaerat debitis fugiat cupiditate consequuntur esse assumenda
            tempora suscipit, saepe aspernatur? Facilis nam autem quos expedita,
            consectetur minima exercitationem sequi voluptates error blanditiis
            sit culpa molestiae. Saepe, iusto corrupti culpa laudantium corporis
            nulla fugiat ab obcaecati, incidunt et facilis suscipit enim.
            Temporibus voluptates quo minima voluptas veniam fugiat, porro,
            totam illo magni unde exercitationem nobis similique ab dolore
            itaque rerum esse hic maxime consequatur. Officiis, explicabo illo,
            quas obcaecati numquam esse soluta nihil aliquam blanditiis sint
            recusandae sequi saepe. Facilis ab, cupiditate nostrum earum quia
            aperiam et totam! Error vel facere voluptates tenetur minus, ducimus
            dolore voluptatem! Aut dolores ipsam reiciendis modi recusandae,
            fugiat veritatis qui alias, mollitia culpa vel officiis perspiciatis
            illo accusamus saepe dolorem non ut autem impedit? Eius praesentium
            nisi molestiae ullam, natus mollitia quam autem. Iure doloribus
            pariatur, architecto veritatis, aperiam maiores ab animi voluptates
            adipisci, tenetur sequi ut recusandae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesComponents;
