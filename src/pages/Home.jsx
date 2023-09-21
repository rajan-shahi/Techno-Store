import React from "react";
import Navbar from "../components/Navbar";
import CategoriesComponents from "../components/CategoriesComponents";
import CardContainer from "../components/CardContainer";
import NewArrivalsCom from "./NewArrivalsCom";
import BestSellersComp from "../components/BestSellersComp";
import RecentProducr from "../components/RecentProducr";
import BestSellers from "../components/BestSellers";
import Payment from "../components/Payment";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import MobileMenu from "../components/MobileMenu";
import SmartPhone from "./SmartPhone";
import NavbrFooter from "./../components/NavbrFooter";
import BlogSideBar from "../components/BlogSideBar";
const Home = () => {
  return (
    <div name="home">
      <BlogSideBar/>
      <MobileMenu />
      <Navbar />
      <NavbrFooter />
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
