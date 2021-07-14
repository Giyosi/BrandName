import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import Header from './components/header/Header';
import About from '../src/Containers/About/About';
import Clients from './Containers/Clients/Clients';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <About />
      <Clients />
    </div>
  );
}

export default App;
