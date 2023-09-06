import React from 'react'
import Navbar from './components/Navbar'
import NavbrFooter from './components/NavbrFooter';
import CategoriesComponents from './components/CategoriesComponents';
import CardContainer from './components/CardContainer';
import NewArrivals from './pages/NewArrivals';
import Footer from './components/Footer';
import Payment from './components/Payment';

const App = () => {
  return (
    <div>
      <Navbar/>
      <NavbrFooter/>
     <CategoriesComponents/>
     <CardContainer/>
     <NewArrivals/>
     <Payment/>
     <Footer/>
    </div>
  )
}

export default App
