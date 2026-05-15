// this is the Name.tsx file
import React from 'react';
// TODO: testing with this off
// import { Locales } from './locales';
import { faker } from '@faker-js/faker';

export const CollageHero = () => {

  return (
    <div className='albatross hero-wrapper'>

      <img
        src={faker.image.urlPicsumPhotos()}
        alt='faker image'
        className="hero poster storybook-gatsby-image"
      />

      <img
        src={faker.image.urlPicsumPhotos()}
        alt='faker image'
        className="collage storybook-gatsby-image"
      />

      {/* // * testing off
      {faker.datatype.boolean() && (
        <Locales />
      )} */}

      {/* <div className='hero-backer'>
        stay gold
      </div> */}

    </div>
  );
};