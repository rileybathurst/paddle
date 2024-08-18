// this is the Name.tsx file
import React from 'react';
import { Ticket } from './Ticket';
import { faker } from '@faker-js/faker';

export const Deck = () => {

  return (
    <div className='deck'>
      {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
        <Ticket key={faker.number.int()} />
      ))}
    </div>
  );
};