import React from "react";
import Navbar from "./components/Navbar";
import NavbrFooter from "./components/NavbrFooter";
import CategoriesComponents from "./components/CategoriesComponents";
import CardContainer from "./components/CardContainer";
import NewArrivals from "./pages/NewArrivals";
import Footer from "./components/Footer";
import Payment from "./components/Payment";
import Copyright from "./components/Copyright";
import BestSellers from "./components/BestSellers";
import Home from "./components/Home";
import RecentProducr from "./components/RecentProducr";

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <NavbrFooter /> */}
      <CategoriesComponents />
      {/* <CardContainer />
      <NewArrivals />
      <Home /> */}
      <RecentProducr/>
      <BestSellers />
      <Payment />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
