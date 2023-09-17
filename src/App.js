// import React from "react";
// import Navbar from "./components/Navbar";
// import NavbrFooter from "./components/NavbrFooter";
// import CategoriesComponents from "./components/CategoriesComponents";
// import CardContainer from "./components/CardContainer";
// import Footer from "./components/Footer";
// import Payment from "./components/Payment";
// import Copyright from "./components/Copyright";
// import BestSellers from "./components/BestSellers";
// import Home from "./components/Home";
// import RecentProducr from "./components/RecentProducr";
// import NewArrivalsCom from "./pages/NewArrivalsCom";
// import MobileMenu from "./components/MobileMenu";
// import BestSellersComp from "./components/BestSellersComp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


const App = () => {
  return (
    <div className=" overflow-x-hidden">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact/loki" element={<Contact />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
      {/* <Contact />
      <About />
      <MobileMenu />
      <Navbar />
      <NavbrFooter />
      <CategoriesComponents />
      <CardContainer />
      <NewArrivalsCom />
      <BestSellersComp />
      <Home />
      <RecentProducr />
      <BestSellers />
      <Payment />
      <Footer />
      <Copyright /> */}
    </div>
  );
};

export default App;
