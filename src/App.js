import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import Header from './components/header/Header';
import About from '../src/Containers/About/About';
import Clients from './Containers/Clients/Clients';
import AboutUs from './Containers/AboutUs';
import Pricing from './Containers/Pricing';
import Touch from './Containers/Touch';
import Footer from './Containers/Footer';
import data from "../src/data/FooterData"



function App() {
  return (
    <div className="App">
      <Header></Header>
      <About />
      <Clients />
      <AboutUs />
      <Pricing />
      <Touch />
      <Footer data={data}/>
    </div>
  );
}

export default App;


// colProps="col-sm-6 col-md-4"