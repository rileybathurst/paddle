// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

export const Hero = () => {

  return (
    <div className='albatross'>
    <img
      src={faker.image.urlPicsumPhotos()}
      alt='faker image'
      className="hero storybook-gatsby-image"
      />
      </div>
  );
};