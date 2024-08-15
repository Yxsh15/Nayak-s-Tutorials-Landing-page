import React from 'react';
import "./Achievers.css";
import ImageSlider from "./ImageSlider";
import CBSE_24 from "../../assets/CBSE_24.jpg";
import ICSE_24 from "../../assets/ICSE_24.jpg";
import SSC_24 from "../../assets/SSC_24.jpg";
// import sscImage from "../../assets/SSC24.jpg";

const Achievers = () => {
  const slides = [
    { url: CBSE_24, title: "CBSE Achievers" },
    { url: ICSE_24, title: "ICSE Achievers" },
    { url: SSC_24, title: "SSC Achievers" },
    // { url: sscImage, title: "SSC Achievers" },
  ];

  const containerStyles = {
    paddingTop: "50px",
    paddingLeft:"50px",
    width: "1150px",
    height: "650px",
    margin: "0 auto",
  };

  return (
    <div className='star'>
      <h1>Our STAR Achievers</h1>
      <h3>At <span style={{ color: '#da1f24', fontWeight: 600 }}>Nayak’s Tutorials</span>, SUCCESS is an outcome of a Strong Teaching Methodology and Great TEAM WORK!</h3>
      <div className="ImageSliders" style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Achievers;
