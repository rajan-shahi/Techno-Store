import React from "react";
import Navbar from "../components/Navbar";
import CategoriesComponents from "../components/CategoriesComponents";
import CardContainer from "../components/CardContainer";
import NewArrivalsCom from "./NewArrivalsCom";
import BestSellersComp from "../components/BestSellersComp";
// import Home from './../components/Home';
import RecentProducr from "../components/RecentProducr";
import BestSellers from "../components/BestSellers";
import Payment from "../components/Payment";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import MobileMenu from "../components/MobileMenu";
import SmartPhone from "./SmartPhone";

const Home = () => {
  return (
    <div>
      <MobileMenu />
      <Navbar />

      <CategoriesComponents />
      <CardContainer />
      <NewArrivalsCom />
      <BestSellersComp />
      <SmartPhone />
      <RecentProducr />
      <BestSellers />
      <Payment />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
