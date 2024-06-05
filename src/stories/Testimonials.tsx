// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';
import { Testimonial } from './Testimonial';

function Deal() {

  const hand = faker.number.int(10);
  console.log(hand);

  if (hand < 1) {
    return (
      <h1>There are no cards available</h1>
    );
  }

  const content = [];
  for (let i = 0; i < hand; i++) {
    content.push(
      <Testimonial />
    );
  }

  return (<>{content}</>);
}

interface TestimonialsProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Testimonials = ({
  primary = false,
  ...props
}: TestimonialsProps) => {

  return (
    <ul className='testimonials vulture'>
      <Deal />
    </ul>
  );
};