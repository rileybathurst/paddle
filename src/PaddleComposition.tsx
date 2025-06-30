// * dont call this directly go through composition locally then a single query here

import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import type { GatsbyImageType } from "./types/gatsby-image-type"

type defaultPaddlerTypes = {
  sport?: string;
  defaultKayaker: {
    image: GatsbyImageType;
  };
  defaultPaddleboarder: {
    image: GatsbyImageType;
  };
}
const DefaultPaddler = ({ sport, defaultKayaker, defaultPaddleboarder }: defaultPaddlerTypes) => {
  if (sport === "sup") {
    return (
      <GatsbyImage
        image={defaultPaddleboarder.image.localFile.childImageSharp.gatsbyImageData}
        alt={defaultPaddleboarder.image.alternativeText || "Paddleboarder"}
        className="img__wrapped paddler"
      />
    )
  }
  return (
    <GatsbyImage
      image={defaultKayaker.image.localFile.childImageSharp.gatsbyImageData}
      alt={defaultKayaker.image.alternativeText || "Kayaker"}
      className="img__wrapped paddler"
    />
  )
}

interface CompositionTypes {
  sport?: string;
  image?: GatsbyImageType;
  defaultKayaker: {
    image: GatsbyImageType;
  }
  defaultPaddleboarder: {
    image: GatsbyImageType;
  }
  sandTexture: {
    image: GatsbyImageType;
  };
  waterTexture: {
    image: GatsbyImageType;
  };
}
export const PaddleComposition = ({ sport, image, defaultKayaker, defaultPaddleboarder, sandTexture, waterTexture }: CompositionTypes) => {
  return (
    <div className="composition">
      <GatsbyImage
        image={waterTexture.image.localFile.childImageSharp.gatsbyImageData}
        alt={waterTexture.image.alternativeText || "Water Texture"}
        className="img__wrapped texture-1"
      />

      <GatsbyImage
        image={sandTexture.image.localFile.childImageSharp.gatsbyImageData}
        alt={sandTexture.image.alternativeText || "Sand Texture"}
        className='img__wrapped texture-2'
      />

      {image ?
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.alternativeText || "Composition Image"}
          className="img__wrapped paddler"
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