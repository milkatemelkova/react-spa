import React from "react";
import Box from "./Box";
import image1 from "../images/s1.png";
import image2 from "../images/s2.png";

function Services() {
  return (
    <div id="services">
      <div className="s-heading">
        <h1>Services</h1>
        <p>Here are some of Our Services </p>
      </div>
      <div className="b-container">
        <Box image={image1} button="CSS" />
        <Box image={image2} button="React" />
      </div>
    </div>
  );
}

export default Services;
