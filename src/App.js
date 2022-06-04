import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import { Routes, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <div className="navBar">
        <Navbar />
      </div>
      <div className="routes">
        <Routes>
          <Route path="/" exact element="Home" />
          <Route path="/about" exact element="About" />
          <Route path="/service" exact element="Service" />
          <Route path="/contact" exact element="Contact" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
