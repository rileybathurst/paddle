// * dont call this directly go through composition locally then a single query here

import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import type { PaddleGatsbyImageType } from "./types/paddle-gatsby-image-type"

type defaultPaddlerTypes = {
  sport?: string;
  defaultKayaker: {
    image: PaddleGatsbyImageType;
  };
  defaultPaddleboarder: {
    image: PaddleGatsbyImageType;
  };
}
const DefaultPaddler = ({ sport, defaultKayaker, defaultPaddleboarder }: defaultPaddlerTypes) => {
  if (sport === "sup") {
    return (
      <GatsbyImage
        image={defaultPaddleboarder.image.localFile.childImageSharp.gatsbyImageData}
        alt={defaultPaddleboarder.image.alternativeText || "Paddleboarder"}
        className=" paddler"
      />
    )
  }
  return (
    <GatsbyImage
      image={defaultKayaker.image.localFile.childImageSharp.gatsbyImageData}
      alt={defaultKayaker.image.alternativeText || "Kayaker"}
      className=" paddler"
    />
  )
}

interface CompositionTypes {
  sport?: string;
  image?: PaddleGatsbyImageType;
  defaultKayaker: {
    image: PaddleGatsbyImageType;
  }
  defaultPaddleboarder: {
    image: PaddleGatsbyImageType;
  }
  sandTexture: {
    image: PaddleGatsbyImageType;
  };
  waterTexture: {
    image: PaddleGatsbyImageType;
  };
}
export const PaddleComposition = ({ sport, image, defaultKayaker, defaultPaddleboarder, sandTexture, waterTexture }: CompositionTypes) => {
  return (
    <div className="composition">
      <GatsbyImage
        image={waterTexture.image.localFile.childImageSharp.gatsbyImageData}
        alt={waterTexture.image.alternativeText || "Water Texture"}
        className="texture-1"
      />

      <GatsbyImage
        image={sandTexture.image.localFile.childImageSharp.gatsbyImageData}
        alt={sandTexture.image.alternativeText || "Sand Texture"}
        className="texture-2"
      />

      {image ?
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.alternativeText || "Composition Image"}
          className=" paddler"
        />
        : <DefaultPaddler
          sport={sport}
          defaultKayaker={defaultKayaker}
          defaultPaddleboarder={defaultPaddleboarder}
        />
      }
    </div >
  )
}