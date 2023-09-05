import React from 'react'
import Navbar from './components/Navbar'
import NavbrFooter from './components/NavbrFooter';
import CategoriesComponents from './components/CategoriesComponents';
import CardContainer from './components/CardContainer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <NavbrFooter/>
     <CategoriesComponents/>
     <CardContainer/>
    </div>
  )
}

export default App
