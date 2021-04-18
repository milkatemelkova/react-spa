import React from "react";

function Box(props) {
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={props.image} />
      </div>
      <div className="s-b-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          facilis necessitatibus esse quia modi aut saepe est eos provident
          reprehenderit.
        </p>
        <a href="#" className="cv-btn">
          {props.button}
        </a>
      </div>
    </div>
  );
}

export default Box;
