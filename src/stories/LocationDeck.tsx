// this is the Name.tsx file
import React from 'react';
import { Location } from './Location';
import { faker } from '@faker-js/faker';

function Deal() {

  const roll = faker.number.int(10);

  if (roll < 1) {
    return (
      <h1>double zero</h1>
    );
  }

  const content = [];
  for (let i = 0; i < roll; i++) {
    content.push(
      <Location key={i} />
    );
  }

  return content;
}


interface LocationDeckProps {
  primary?: boolean;
  onClick?: () => void;
}

export const LocationDeck = ({
  primary = false,
  ...props
}: LocationDeckProps) => {

  return (
    <div className='location-deck'>
      <Deal />
    </div>
  );
};