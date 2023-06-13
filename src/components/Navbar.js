import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";
import {Button} from "./Button";

function Navbar() {

  const[click, setClick] = useState(false);
  const[button , setbutton] = useState(true);

  const showbutton =()=>{
    if(window.innerWidth <= 960){
      setbutton(false);
    }
    else{
      setbutton(true);
    }
  };

  useEffect(()=>{
    showbutton();
  }, []);

  window.addEventListener("resize", showbutton );

  const  handleclick = ()=>{
         setClick(!click);
  }

  const closemobilemenu = ()=>{
    setClick(false);
  }
  return (
    <>
    <nav className = "navbar">
      <div className = "navbar-container">
      <Link to = '/' className = "navbar-logo" onClick = {closemobilemenu}>
        SKY TOURS  <i className = "fa fa-plane"/>
      </Link>
      <div className = "menu-icon" onClick={handleclick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
      </div>
      <ul className ={click ? "nav-menu active" : "nav-menu"}>   
        <li className = "nav-items">
         <Link to = "/" className = "nav-links" onClick= {closemobilemenu}>
          Home
         </Link>
        </li>
        <li className = "nav-items">
         <Link to = "/services" className = "nav-links" onClick= {closemobilemenu}>
          Services
         </Link>
        </li>
        <li className = "nav-items">
         <Link to = "/products" className = "nav-links" onClick= {closemobilemenu}>
          Products
         </Link>
        </li>
        <li className = "nav-items">
         <Link to = "/sign-up" className = "nav-links-mobile" onClick= {closemobilemenu}>
          Sign-Up
         </Link>
        </li>
      </ul>
      {button && <Button buttonstyle="btn--outline">
        SIGN-UP
      </Button> }
      </div>
    </nav>  
    </>
  )
}

export default Navbar

