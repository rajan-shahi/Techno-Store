import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShopBar from "./pages/ShopBar";
import SighIn from "./components/SighIn";
import Signup from "./components/Signup";
import AddNeweCard from "./components/AddNeweCard";

const App = () => {
  return (
    <div className=" overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/shopbar" element={<ShopBar/>} />
          <Route path="/signin" element={<SighIn/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/add to card" element={<AddNeweCard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
