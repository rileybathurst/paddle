// this is the Name.tsx file
import React from 'react';
import { Locales } from './locales';
import { faker } from '@faker-js/faker';

export const Hero = () => {

  return (
    <div className='albatross hero-wrapper'>
      <img
        src={faker.image.urlPicsumPhotos()}
        alt='faker image'
        className="hero poster storybook-gatsby-image"
      />

      {faker.datatype.boolean() && (
        <Locales />
      )}

      <div className='hero-backer'>
        {/* stay gold */}
      </div>

    </div>
  );
};