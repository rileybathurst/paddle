// this is the Name.tsx file
// I tried adding gatsby image in here it did not work
import React from 'react';
import { faker } from '@faker-js/faker';

export const Composition = () => {

  return (
    <div className="composition condor">
      <img
        src={faker.image.urlPicsumPhotos()}
        alt='fake'
        className="texture-1 storybook-gatsby-image"
      />
      <img
        src={faker.image.urlPicsumPhotos()}
        alt='fake'
        className="texture-2 storybook-gatsby-image"
      />
      <img
        src={faker.image.urlPicsumPhotos()}
        alt='fake'
        className="storybook-paddler storybook-gatsby-image"
      />
    </div>
  );
};