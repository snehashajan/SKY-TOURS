import React from 'react'
import {Button} from "./Button";
import "./Herosection.css";
import "../App.css";

function Herosection() {
  return (
    <div className = "hero-container">
        <video src = "/videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS !</h1>
      <p>Plan your dream vacations with us !</p>
      <div className = "hero-btns">
      <Button 
      className = "btns" 
      buttonstyle = "btn--outline"
      buttonsize = "btn--large">
       GET STARTED
      </Button>
      <Button className = "btns" 
      buttonstyle = "btn--primary"
       buttonsize = "btn--large">
       WATCH TRAILER
      </Button>
      </div>
    </div>
  );
}

export default Herosection;
