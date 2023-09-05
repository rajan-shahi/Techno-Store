import React from 'react'
import Navbar from './components/Navbar'
import NavbrFooter from './components/NavbrFooter';
import CategoriesComponents from './components/CategoriesComponents';
import CardContainer from './components/CardContainer';
import NewArrivals from './pages/NewArrivals';

const App = () => {
  return (
    <div>
      <Navbar/>
      <NavbrFooter/>
     <CategoriesComponents/>
     <CardContainer/>
     <NewArrivals/>
    </div>
  )
}

export default App
