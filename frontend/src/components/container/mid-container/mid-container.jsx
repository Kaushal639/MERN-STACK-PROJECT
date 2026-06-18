import React from "react";
import "./mid-container.css"

function Midcontainer({ backgroundColor, image, imagename, title, description }) {
  return (
    <div className="main-mid-container" style={{ backgroundColor }}>
      <div className="mid-image-container">
        <img src={image} alt={imagename} />
      </div>
      <div className="content-sec">
        <div className="content">
          <h1 id="mid-h1">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

 export default Midcontainer;