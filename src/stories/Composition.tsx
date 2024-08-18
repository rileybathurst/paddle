// this is the Name.tsx file
// I tried adding gatsby image in here it did not work
import React from 'react';
import { faker } from '@faker-js/faker';

export const Composition = () => {

  return (
    <div className="composition condor">
      <img
        src={faker.image.urlLoremFlickr({ category: 'nature' })}
        alt={faker.image.urlLoremFlickr({ category: 'nature' })}
        className="t1 storybook-gatsby-image"
      />
      <img
        src={faker.image.urlLoremFlickr({ category: 'nature' })}
        alt={faker.image.urlLoremFlickr({ category: 'nature' })}
        className="t2 img__wrapped storybook-gatsby-image"
      />
      <img
        src={faker.image.urlLoremFlickr()}
        alt={faker.image.urlLoremFlickr()}
        className="storybook-paddler storybook-gatsby-image"
      />
    </div>
  );
};