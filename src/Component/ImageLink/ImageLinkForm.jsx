import React, { useState } from "react";
import "./ImageLinkForm.css";
import "./FaceRecognition.css";
import "./FaceRecognition";
import FaceRecognition from "./FaceRecognition";
const ImageLinkForm = () => {
  const MODEL_ID = "face-detection";
  const [query, setQuery] = useState("");
  const [box, setBox] = useState({});
  const calculateFaceLocation = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const imag = document.getElementById("InputImage");
    const widht = Number(imag.height);
    const height = Number(imag.height);
    return {
      leftCol: face.left_col * widht,
      topRow: face.top_row * height,
      rightCol: widht - face.right_col * widht,
      bottomRom: height - face.bottom_row * height,
    };
  };
  const displayFaceBox = (Box) => {
    setBox(Box);
  };
  const PAT = "37e31d58a7ec458982662eb7c6d4207a";
  const returnAiJSONreqOptions = (imgUrl) => {
    const USER_ID = "amm2002";
    const APP_ID = "test";
    // Change these to whatever model and image URL you want to use
    const IMAGE_URL = imgUrl;

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };
    return requestOptions;
  };

  const onButtonClick = () => {
    fetch(
      "https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs",
      returnAiJSONreqOptions(query)
    )
      .then((response) => response.json())
      .then((result) => displayFaceBox(calculateFaceLocation(result)))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div>
        <p className="f3">
          {`This Magic Brain will detect face in your pictures . Give it a try`}{" "}
        </p>
      <div className="center">
        <div className="pa4 br3 shadow-5 center form">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="w-30 grow f4 link ph3 dib white bg-light-purple pv2 "
            onClick={onButtonClick}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
      <FaceRecognition query={query} box={box} />
      </>
  );
};

export default ImageLinkForm;
