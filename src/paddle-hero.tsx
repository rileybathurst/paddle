// this is the Name.tsx file
import React from 'react';
import type { PaddleHeroTypes } from './types/paddle-hero-types';
import { GatsbyImage } from 'gatsby-plugin-image';

export const PaddleHero = ({ image, collage, overlay }: PaddleHeroTypes) => {

  return (
    <div className='albatross hero-wrapper'>

      <GatsbyImage
        image={image.localFile.childImageSharp.gatsbyImageData}
        alt={image.alternativeText}
        className="hero poster"
      />

      {collage &&
        <GatsbyImage
          image={collage.localFile.childImageSharp.gatsbyImageData}
          alt={collage.alternativeText}
          className="collage"
        />
      }

      {overlay && overlay}

      <div className='hero-backer'>
        {/* stay gold */}
      </div>

    </div>
  );
};