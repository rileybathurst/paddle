import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import type { PaddleGatsbyImageType } from "./types/paddle-gatsby-image-type";

type textureTypes = {
  baseOne: { image: PaddleGatsbyImageType };
  baseTwo: { image: PaddleGatsbyImageType };
  baseThree: { image: PaddleGatsbyImageType };
  topOne: { image: PaddleGatsbyImageType };
  topTwo: { image: PaddleGatsbyImageType };
  topThree: { image: PaddleGatsbyImageType };
};
export const PaddleTextureBackgrounds = ({ baseOne, baseTwo, baseThree, topOne, topTwo, topThree }: textureTypes) => {

  const baseTextures = [
    baseOne,
    baseTwo,
    baseThree
  ];
  const baseRandom = Math.floor(Math.random() * baseTextures.length);
  // console.log(baseTextures[baseRandom]);

  const topTextures = [
    topOne,
    topTwo,
    topThree
  ];
  const topRandom = Math.floor(Math.random() * topTextures.length);
  // { topTextures[topRandom] }

  return (
    <>
      <GatsbyImage
        image={baseTextures[baseRandom].image.localFile.childImageSharp.gatsbyImageData}
        alt="splash texture"
        className="texture-slice"
        objectFit="contain"
      />
      <GatsbyImage
        image={topTextures[topRandom].image.localFile.childImageSharp.gatsbyImageData}
        alt="sand texture"
        className="texture-slice crop"
        objectFit="contain"
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