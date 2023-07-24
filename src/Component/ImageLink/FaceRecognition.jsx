import React from "react";
import "./FaceRecognition.css";
const FaceRecognition = ({ query, box }) => {
  return (
    <div className="center ma ">
      <div className="absolute mt2">
        <img
          id="InputImage"
          src={query}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.leftCol,
            bottom: box.bottomRom,
            left: box.rightCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
