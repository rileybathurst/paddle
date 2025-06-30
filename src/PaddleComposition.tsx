// * dont call this directly go through composition locally then a single query here

import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import type { GatsbyImageType } from "./types/gatsby-image-type"

type defaultPaddlerTypes = {
  sport?: string;
  defaultKayaker: GatsbyImageType;
  defaultPaddleboarder: GatsbyImageType;
}

const DefaultPaddler = ({ sport, defaultKayaker, defaultPaddleboarder }: defaultPaddlerTypes) => {
  if (sport === "sup") {
    return (
      <GatsbyImage
        image={defaultPaddleboarder.localFile.childImageSharp.gatsbyImageData}
        alt={defaultPaddleboarder.alternativeText || "Paddleboarder"}
        className="img__wrapped paddler"
      />
    )
  }
  return (
    <GatsbyImage
      image={defaultKayaker.localFile.childImageSharp.gatsbyImageData}
      alt={defaultKayaker.alternativeText || "Kayaker"}
      className="img__wrapped paddler"
    />
  )
}

interface CompositionTypes {
  sport?: string;
  image?: GatsbyImageType;
  defaultKayaker: GatsbyImageType;
  defaultPaddleboarder: GatsbyImageType;
  WaterTexture: GatsbyImageType;
}
const PaddleComposition = ({ sport, image, defaultKayaker, defaultPaddleboarder, WaterTexture }: CompositionTypes) => {
  return (
    <div className="composition">
      <GatsbyImage
        image={WaterTexture.localFile.childImageSharp.gatsbyImageData}
        alt={WaterTexture.alternativeText || "Water Texture"}
        className="img__wrapped texture-1"
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

export default PaddleComposition