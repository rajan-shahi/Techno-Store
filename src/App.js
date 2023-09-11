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

const App = () => {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <NavbrFooter />
      <CategoriesComponents />
      <NewArrivalsCom/>
      <Home />
      <CardContainer />
      <BestSellers />
      <RecentProducr />
      <Payment />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
