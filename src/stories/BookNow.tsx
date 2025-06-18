// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

interface BookNowProps {
  primary?: boolean;
  onClick?: () => void;
  additional?: string | undefined;
}

export const BookNow = ({
  primary = false,
  additional,
  ...props
}: BookNowProps) => {

  return (
    <div
      {...props}
    >
      <a
        href={faker.location.city()}
        rel="noopener noreferrer"
        className='book-now'
        title={`Book now with ${faker.location.city()} kayak and paddleboard`}
      >
        {additional ? additional : null}
        BOOK NOW
      </a>
      {/* // * these are only used for color testing as they story into other components */}
      {/*       <br />
      <a
        href={faker.location.city()}
        rel="noopener noreferrer"
        className='book-now book-now__hover'
        title={`Book now with ${faker.location.city()} kayak and paddleboard`}
      >
        BOOK NOW Hover
      </a>
      <br />
      <a
        href={faker.location.city()}
        rel="noopener noreferrer"
        className='book-now book-now__active'
        title={`Book now with ${faker.location.city()} kayak and paddleboard`}
      >
        BOOK NOW Active
      </a> */}


    </div>
  );
};