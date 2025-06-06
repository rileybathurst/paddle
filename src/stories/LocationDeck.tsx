// this is the Name.tsx file
import React from 'react';
import { Location } from './Location';
import { faker } from '@faker-js/faker';

export const LocationDeck = () => {
  return (
    <div className='location-deck'>
      {Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() => (
        <Location key={faker.number.int()} />
      ))}
    </div>
  );
};