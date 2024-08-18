// this is the Name.tsx file
import React from 'react';
import { Location } from './Location';
import { faker } from '@faker-js/faker';

type LocationDeckTypes = {
  background: boolean;
};
export const LocationDeck = ({ background }: LocationDeckTypes) => {
  return (
    <div className={`location-deck ${background}`}>
      {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
        <Location key={faker.number.int()} />
      ))}
    </div>
  );
};