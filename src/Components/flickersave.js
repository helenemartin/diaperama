//Final working version before creating multiple slideshows
import React from "react";
import Images from "../images.js";
import useSound from "use-sound";
import click from "../../public/sound/single-click-slide-pojector.mp3";
import { useState, useEffect, useRef } from "react";

export default function Flicker() {
  const [flip, setFlip] = useState(true);
  const [imageNumber, setImageNumber] = useState(0);
  const [isPlaying, setIsPlaying] = useState(0);
  const [sound] = useSound(click, { volume: 0.4 });
  const timer = useRef(null); // we can save timer in useRef and pass it to child

  useEffect(() => {
    const imagesLength = Images.length;
    const id = setInterval(() => {
      if (isPlaying) {
        setFlip((flip) => !flip);
        timer.current = setTimeout(() => setFlip(false), 2000);
        setImageNumber((imageNumber) => (imageNumber + 1) % imagesLength);
        sound();
      }
    }, 1500);
    return () => clearInterval(id);
  }, [isPlaying, sound]);

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
          clearTimeout(timer.current);

          // diaporama.image[0];
          //reset slide show to first text
          setImageNumber(0);
        }}
      >
        <div className={boxClass} />
        <div className={textDisplay}>{diaporama.text}</div>
        <img className="imageFit" alt={diaporama.alt} src={diaporama.image} />
      </div>
    </>
  );
}
