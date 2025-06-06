// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

interface BookNowProps {
  primary?: boolean;

  onClick?: () => void;
}

export const BookNow = ({
  primary = false,

  ...props
}: BookNowProps) => {

  return (
    <div
      {...props}
    >
      <a
        href={faker.location.city()}
        rel="noopener noreferrer"
        className='button book-now'
        title={`Book now with ${faker.location.city()} kayak and paddleboard`}
      >
        BOOK NOW
      </a>
    </div>
  );
};