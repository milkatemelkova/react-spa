import React from "react";
import featureimage from "../images/Frame 19.png";

function Features() {
  return (
    <div id="features">
      <div className="features-model">
        <img src={featureimage} />
      </div>
      <div className="features-text">
        <h2>Features</h2>
        <h3>
          This App <span>Software</span>is Art
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsa et
          harum recusandae repellendus, similique deserunt. Aliquid quaerat
          suscipit consequatur.
        </p>
        <button>View More Features</button>
      </div>
    </div>
  );
}

export default Features;
