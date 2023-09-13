import React from "react";
import Navbar from "./components/Navbar";
import NavbrFooter from "./components/NavbrFooter";
import CategoriesComponents from "./components/CategoriesComponents";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Payment from "./components/Payment";
import Copyright from "./components/Copyright";
import BestSellers from "./components/BestSellers";
import Home from "./components/Home";
import RecentProducr from "./components/RecentProducr";
import NewArrivalsCom from "./pages/NewArrivalsCom";
import MobileMenu from "./components/MobileMenu";
import BestSellersComp from './components/BestSellersComp';

const App = () => {
  return (
    <div className=" overflow-x-hidden">
      <MobileMenu/>
      <Navbar />
      <NavbrFooter />
      <CategoriesComponents />
      <CardContainer />
      <NewArrivalsCom/>
      <Home />
      <BestSellersComp/>
      <RecentProducr />
      <BestSellers />
      <Payment />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
