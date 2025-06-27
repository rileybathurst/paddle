// this is the Name.tsx file
import React from "react";
import { faker } from "@faker-js/faker";

export const TextureBackgrounds = () => {
  return (
    <>
      <img
        src={faker.image.dataUri()}
        className="texture-slice crop"
        alt="top texture"
      />
      <img
        src={faker.image.dataUri()}
        className="texture-slice"
        alt="bottom texture"
      />
      <svg viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
        <title>Diagonal line decoration</title>
        <line
          x1="0"
          y1="630"
          x2="1200"
          y2="0"
          // only color the stroke in css so it has dark mode
          strokeWidth="3"
        />
      </svg>
    </>
  );
};
