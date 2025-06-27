// Retail Card
import React from "react";
// import { GatsbyImage } from 'gatsby-plugin-image';
import { faker } from "@faker-js/faker";
import { Badges } from "./Badges";
// import { Badges } from './Badges';
// import { Remainder } from './Remainder';
// import { useRetailContext } from '../context/RetailContext';
import { TextureBackgrounds } from "./TextureBackgrounds";

export const Purchase = () => {
  return (
    <article key={faker.string.uuid()} className="purchase">
      {/* // This is currently a wrapper and not used */}
      <div className="purchase-collage">
        <TextureBackgrounds />
        <a href={faker.music.songName()} className="image-link">
          {/* <GatsbyImage
            image={cutout?.localFile?.childImageSharp?.gatsbyImageData}
            alt={cutout?.alternativeText || `${title} by ${brand.slug}`}
            className="cutout"
            objectFit="contain"
            // TODO: this has been causing some problems but keep an eye on it
          /> */}
        </a>

        <Badges
        // inflatable={faker.datatype.boolean()}
        // demo={faker.datatype.boolean()}
        // discount={faker.datatype.boolean() ? faker.number.int({ min: 1, max: 100 }) : undefined}
        />
      </div>
      <h4 className="purchase__title">
        <a href={faker.music.songName()}>{faker.music.album()}</a>
      </h4>
      <hr />
      {/* // ? I think this is too long */}
      <p>{faker.lorem.paragraph()}</p>
      <hr />
      <div className="purchase__details">
        <h4>
          {/* <Remainder inches={length} /> */}
          long by {faker.number.int({ min: 1, max: 100 })}" wide
        </h4>
        <h5 className="capitalize">
          Capacity {faker.number.int({ min: 1, max: 100 })}&thinsp;lbs
        </h5>
      </div>
    </article>
  );
};
