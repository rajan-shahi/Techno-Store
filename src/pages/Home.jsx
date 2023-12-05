import React from "react";
import CategoriesComponents from "../components/CategoriesComponents";
import CardContainer from "../components/CardContainer";
import NewArrivalsCom from "./NewArrivalsCom";
import BestSellersComp from "../components/BestSellersComp";
import RecentProducr from "../components/RecentProducr";
import BestSellers from "../components/BestSellers";
import Payment from "../components/Payment";

import SmartPhone from "./SmartPhone";
import NavbrFooter from "./../components/NavbrFooter";

const Home = () => {
  return (
    <div name="home">
   
      <NavbrFooter />
      <CategoriesComponents />
      <CardContainer />
      <NewArrivalsCom />
      <BestSellersComp />
      <SmartPhone />
      <RecentProducr />
      <BestSellers />
      <Payment />
    </div>
  );
};

export default Home;
