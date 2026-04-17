// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

interface BookNowProps {
  additional?: string | false ;
}

export const BookNow = ({
  additional
}: BookNowProps) => {

  return (
    <a
      href={faker.location.city()}
      rel="noopener noreferrer"
      className='book-now font-serif'
      title={`Book now with ${faker.location.city()} kayak and paddleboard`}
    >
      {additional ? additional : null}
      BOOK NOW
    </a>
  );
};