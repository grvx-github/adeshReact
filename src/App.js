import React from 'react';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Description } from './components/Description';
import { Products } from './components/Products';
import { Cards } from './components/Cards';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-slick/dist/react-slick.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Cards/>
      <Description/>
      <Products/>
    </div>
  );

}

export default App;
