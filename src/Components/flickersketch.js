import React from "react";
import Images from "../images.js";
// import useSound from "use-sound";
// import click from "../../sound/12105701.mp3";
import { useState, useEffect } from "react";
//
// THESES LINES UNDER CAN BE IGNORED UNTIL LINE 18
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
// SAVED WORKING COPY BELLOW
export default function Flicker() {
  const [flip, setFlip] = useState(true);
  const [imageNumber, setImageNumber] = useState(0);
  const [isPlaying, setIsPlaying] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     if (isPlaying) {
  //       setFlip((flip) => !flip);
  //       setImageNumber(
  //         (imageNumber) =>
  //           // imageNumber >= 3 ? 0 : imageNumber + 1
  //           (imageNumber + 1) % 4
  //       );
  //     }
  //   }, 1500);
  //   return () => clearInterval(id);
  // }, [isPlaying]);
  useEffect(() => {
    const id = setInterval(() => {
      if (isPlaying) {
        setFlip((flip) => !flip);
        setTimeout(() => setFlip(false), 2000);
        setImageNumber(
          (imageNumber) =>
            // imageNumber >= 4 ? 0 : imageNumber + 1
            (imageNumber + 1) % 4
        );
      }
    }, 1500);
    return () => clearInterval(id);
  }, [isPlaying]);

  // id = setInterval(() => {
  //   setFlip(true);
  //   // setFlip((flip) => !flip);
  //   setTimeout(() => setFlip(false), 2000);
  //   setImageNumber(
  //     (imageNumber) =>
  //       // imageNumber >= 2 ? 0 : imageNumber + 1
  //       (imageNumber + 1) % 3
  //   );
  // }, 2500);

  const boxClass = flip ? "boxFlickerBlack" : "boxFlickerClear";
  const diaporama = Images[imageNumber];
  const textDisplay = flip ? "text" : "notext";
  return (
    <>
      <div
        onMouseEnter={() => {
          setIsPlaying(true);
        }}
        onMouseLeave={() => {
          setFlip(true);
          setIsPlaying(false);
        }}
      >
        <div className={boxClass} />
        <div className={textDisplay}>{diaporama.text}</div>
        <img className="imageFit" alt={diaporama.alt} src={diaporama.image} />
      </div>
    </>
  );
}
