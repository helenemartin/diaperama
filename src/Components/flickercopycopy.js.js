import React from "react";
import Images from "../images.js";
// import useSound from "use-sound";
// import click from "../../sound/12105701.mp3";
import { useState, useEffect } from "react";

// export default function Flicker() {
//   const [flip, setFlip] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setFlip((flip) => (flip === "black" ? "" : "black"));
//     }, 900);
//     return () => clearInterval(id);
//   }, []);

//   const boxClass = flip === "black" ? "boxFlicker1" : "boxFlicker2";
//   return <div className={boxClass}></div>;
// }

export default function Flicker() {
  const [flip, setFlip] = useState(true);
  const [imageNumber, setImageNumber] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(0);
  // const [isHovering, setIsHovering] = React.useState(false);
  // useEffect(() => {
  let id;
  function rolling() {
    id = setInterval(() => {
      setFlip(true);
      // setFlip((flip) => !flip);
      setTimeout(() => setFlip(false), 2000);
      setImageNumber(
        (imageNumber) =>
          // imageNumber >= 2 ? 0 : imageNumber + 1
          (imageNumber + 1) % 3
      );
    }, 2500);

    // const id = setInterval(() => {
    //   if (isPlaying) {
    //     const int = setInterval(() => {
    //       setFlip((flip) => !flip);
    //     }, 3000);
    //     setImageNumber(
    //       (imageNumber) =>
    //         // imageNumber >= 2 ? 0 : imageNumber + 1
    //         (imageNumber + 1) % 3
    //     );
    //   }
    // }, 2500);

    //change flip state 2 times
    //change it to false then finish
    //use another object
    //separate image/text
    //hide show another if use separete image, 1st time text. 2nd time image
    //place in a image array (or div element text? )picture=text, picture, picture-text, picture
    // console.log(id);
    return () => clearInterval(id);
  }

  //Use this one
  // const boxClass = flip ? "boxFlickerBlack" : "boxFlickerClear";
  const diaporama = Images[imageNumber];
  const textDisplay = flip ? "text" : "notext";

  return (
    <>
      <div
        onMouseEnter={() => {
          rolling();
        }}
        onMouseLeave={() => {
          // setFlip(true);
          // setIsPlaying(false);

          return () => clearInterval(id);
        }}
      >
        {/* <div className={boxClass} />
        <div className={textDisplay}>{diaporama.text}</div>
        <img className="imageFit" alt={diaporama.alt} src={diaporama.image} />
      </div> */}
        {flip ? (
          <div className={textDisplay}>{diaporama.text}</div>
        ) : (
          <img className="imageFit" alt={diaporama.alt} src={diaporama.image} />
        )}
      </div>
    </>
  );
}

// {flip ? (
//   <div className={textDisplay}>{diaporama.text}</div>
// ) : (
//   <img className="imageFit" alt={diaporama.alt} src={diaporama.image} />
// )}
// </div>
