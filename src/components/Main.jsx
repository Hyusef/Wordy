import React from "react";
import "./Main.css";
import img from "../Assets/Images/FinalWordLogo.png";
import Navbar from "./Navbar";
import circle from "../Assets/Images/circlepie.png";
import sitting from "../Assets/Images/sittingEngineer.png";

function Main() {
  return (
    <div className="trunk">
      <div className="main">
        <img src={img} className="logo"></img>
        <Navbar />
      </div>
      <img src={circle} className="circle"></img>

      <div className="y">
        <div className="mainText">
          <h1>
            Create Your Own Visual
            <br /> Representation Of Any Text
          </h1>
          <h1>Fast, Easy and Downloadable.</h1>
        </div>
        <img src={sitting} className="sitting"></img>
      </div>
    </div>
  );
}

export default Main;
{
  /*      <div className="main">
       <img alt="logo" className="circle" src={circle}></img>
       <div className="navContainer">
         <div className="imageContainer">
           <img alt="logo" className="logo" src={img}></img>
         </div>
         <Navbar />
       </div>
     </div> */
}
