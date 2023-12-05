import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShopBar from "./pages/ShopBar";
import SighIn from "./components/SighIn";
import Signup from "./components/Signup";
import AddNeweCard from "./components/AddNeweCard";
import BlogSideBar from "./components/BlogSideBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Copyright from "../components/Copyright";

const App = () => {
  return (
    <div className=" overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <div className=" py-32"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/shopbar" element={<ShopBar />} />
            <Route path="/signin" element={<SighIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add to card" element={<AddNeweCard />} />
            <Route path="/blog" element={<BlogSideBar />} />
          </Routes>
        </div>
        <Footer />
   
      </BrowserRouter>
    </div>
  );
};

export default App;
