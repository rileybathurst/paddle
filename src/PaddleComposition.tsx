import * as React from "react"
import { faker } from '@faker-js/faker';
// import { GatsbyImage } from "gatsby-plugin-image"

// import WaterTexture from "../images/watertexture";
// import Kayaker from "../images/kayaker";
// import Supper from "../images/supper";
// import { useStrapiTextures } from "../hooks/use-strapi-textures"

/* // TODO: rename
interface TopThreeTypes {
  className: string;
}
function TopThree({ className }: TopThreeTypes) {

  // const { query } = useStrapiTextures()
  // console.log(query.baseone);

  return <GatsbyImage
      image={useStrapiTextures().topthree.image.localFile.childImageSharp.gatsbyImageData}
      alt="deepwater texture"
      className={`texture-slice crops ${props.className}`}
      objectFit="contain"
    />

// ! Testing
return null;
} */

interface CompositionTypes {
  sport?: string;
}
const PaddleComposition = ({ sport }: CompositionTypes) => {
  return (
    <div className="composition">
      {/* <WaterTexture className="texture-1" /> */}
      <img
        src={faker.image.urlPlaceholder()}
        alt={faker.location.city()}
        className="texture-1"
      />
      <img
        src={faker.image.urlPlaceholder()}
        alt={faker.location.city()}
        className="texture-2 img-wrapped"
      />
      {/* <TopThree className="texture-2 img__wrapped" /> */}
      {/* {sport === 'paddleboard' ? <Supper className="paddler" /> : <Kayaker className="paddler" />} */}
      {faker.datatype.boolean() ? <>Supper</> : <>Kayaker</>}
    </div >
  )
}

export default PaddleComposition