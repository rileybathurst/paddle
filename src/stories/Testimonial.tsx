// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

interface TestimonialProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Testimonial = ({
  primary = false,
  ...props
}: TestimonialProps) => {

  return (
    <li
      key={faker.string.alphanumeric()}
    >
      <p className='elbrus'><span className='denali font-serif'>&ldquo;</span>{faker.lorem.sentence()}<span className='denali font-serif'>&rdquo;</span></p>
      <p>{faker.helpers.arrayElement(['Thank You,', 'Sincerely,', null])} {faker.person.firstName()}</p>
      <p className='kosciuszko'>{faker.location.city()}</p>
    </li>
  );
};