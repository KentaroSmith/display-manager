import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home';
import StreetsCarousel from './components/carousel';
import FieldCarousel from './components/fieldshop';

function App() {
  return (
    <Router>
      
      <Route exact path="/" component={Home}/>
      <Route exact path="/Streets" component={StreetsCarousel}/>
      <Route exact path="/FieldShop" component={FieldCarousel}/>
     
    </Router>
  );
}

export default App;
