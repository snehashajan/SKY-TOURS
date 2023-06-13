import './App.css';
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Signup from "./components/pages/Sign-up";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path ="/" element = {<Home/>}/>
        <Route exact path ="/services" element = {<Services/>}/>
        <Route exact path ="/products" element = {<Products/>}/>
        <Route exact path ="/sign-up" element = {<Signup/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
