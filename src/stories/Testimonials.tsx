// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';
import { Testimonial } from './Testimonial';

export const Testimonials = () => {

  return (
    <ul className='testimonials condor'>
      {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
        <Testimonial key={faker.number.int()} />
      ))}
    </ul>
  );
};