import React from "react";
import diaporamaData from "./../diaporama.json";
import Flicker from "./flicker";

export default function Shuffle() {
  return diaporamaData.map((diaporama) => (
    <div key={diaporama.id}>
      <Flicker
        diaporama={diaporama.diapo}
        title={diaporama.title}
        paragraph={diaporama.paragraph}
      />
    </div>
  ));
}
