// this is the Name.tsx file
import React from 'react';
import { Ticket } from './Ticket';
import { faker } from '@faker-js/faker';

interface FlightProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Flight = ({
  primary = false,
  ...props
}: FlightProps) => {

  return (
    <div
      {...props}
      className='flight'
    >
      {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
        <Ticket />
      ))}
    </div>
  );
};