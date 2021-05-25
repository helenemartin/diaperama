// import React from "react";
// import Images from "../images.js";
// import { useState, useEffect } from "react";

// export default function Diaporama() {
//   const [imageNumber, setImageNumber] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => {
//       setImageNumber((imageNumber) => (imageNumber >= 2 ? 0 : imageNumber + 1));
//     }, 900);
//     return () => clearInterval(id);
//   }, []);

//   const diaporamaRun = Images[imageNumber].image;
//   return (
//     <div className="imageFit">
//       <img src={diaporamaRun} />
//     </div>
//   );
// }
// { display: imageFit ? "block" : "none" }
