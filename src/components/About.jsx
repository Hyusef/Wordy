import React from "react";
import "./About.css";
import image from "../Assets/Images/standingChart.png";

function About() {
  return (
    <div className="aboutMain">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#031630"
          fillOpacity="1"
          d="M0,224L48,186.7C96,149,192,75,288,48C384,21,480,43,576,80C672,117,768,171,864,208C960,245,1056,267,1152,277.3C1248,288,1344,288,1392,288L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="content">
        <h1 className="header">How does Wordy Work?</h1>
        <ul className="steps">
          <li> Paste the text into the box.</li>
          <li> Choose the options for visualisation and click submit.</li>
          <li> Download/view the generated word cloud. </li>
        </ul>
      </div>
      <svg
        id="bottomWaves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#031630"
          fillOpacity="1"
          d="M0,128L60,117.3C120,107,240,85,360,106.7C480,128,600,192,720,229.3C840,267,960,277,1080,240C1200,203,1320,117,1380,74.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default About;
