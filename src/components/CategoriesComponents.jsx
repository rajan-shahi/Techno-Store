import React from "react";
// import { AiOutlineAlignLeft } from "react-icons/ai";
import One1 from "../assets/01.png";
import Two2 from "../assets/02.png";
import Three3 from "../assets/03.png";
import Four4 from "../assets/04.png";
import Five5 from "../assets/05.png";
import Six6 from "../assets/06.png";
import Seven7 from "../assets/07.png";
import Eight8 from "../assets/08.png";
import Nine9 from "../assets/09.png";
import Ten10 from "../assets/10.png";
const CategoriesComponents = () => {
  return (
    <div className=" flex justify-center">
      {/* container */}
      <div className=" w-10/12 flex justify-between py-6 ">
        {/* leftContainer */}
        <div className=" border-2 w-3/12 border-gray-400 flex flex-col gap-3 justify-center ">
          {alls.map((all, index) => (
            <div key={index} className=" flex  gap-4 justify-center  items-center ">
              <h1>
                <img className=" h-6 w-6  flex justify-center items-center " src={all.image} alt="" />
              </h1>
              <h1 className=" flex justify-center items-center ">{all.name}</h1>
            </div>
          ))}
        </div>
        {/* rightContainer */}
        <div className=" w-7/12 bg-gray-600 text-white px-4 py-4 flex items-center ">
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

const alls = [
  {
    image: One1,
    name: "Laptop & Mac",
  },
  {
    image: Two2,
    name: "Mobile & Tablet",
  },
  {
    image: Three3,
    name: "Home Device",
  },
  {
    image: Four4,
    name: "Software",
  },

  {
    image: Five5,
    name: "Tv & Audio",
  },

  {
    image: Six6,
    name: "Sports & Fitness",
  },
  {
    image: Seven7,
    name: "Game & Toys",
  },
  {
    image: Eight8,
    name: "Video Cameras",
  },
  {
    image: Nine9,
    name: "Accessories",
  },

  {
    image: Ten10,
    name: "Security",
  },
];
