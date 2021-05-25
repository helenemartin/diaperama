import React from "react";
import Images from "../images.js";
// import useSound from "use-sound";
// import click from "../../sound/12105701.mp3";
import { useState, useEffect } from "react";

export default function Flicker() {
  const [flip, setFlip] = useState(true);
  const [imageNumber, setImageNumber] = useState(0);
  const [isPlaying, setIsPlaying] = useState(0);

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

// const soundUrl = '../../sound/12105701.mp3';

//   const [play, { stop }] = useSound(
//     soundUrl,
//     { volume: 0.5 }
//   );