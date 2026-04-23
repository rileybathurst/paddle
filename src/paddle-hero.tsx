// this is the Name.tsx file
import React from 'react';
import type { PaddleHeroTypes } from './types/paddle-hero-types';
import { GatsbyImage } from 'gatsby-plugin-image';

export const PaddleHero = ({ image, overlay }: PaddleHeroTypes) => {

  return (
    <div className='albatross hero-wrapper'>
      <GatsbyImage
        image={image.localFile.childImageSharp.gatsbyImageData}
        alt='faker image'
        className="hero poster storybook-gatsby-image"
      />

      {overlay && overlay}

      <div className='hero-backer'>
        {/* stay gold */}
      </div>

    </div>
  );
};