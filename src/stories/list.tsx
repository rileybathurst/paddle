// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

export const List = () => {

  return (
    <div className='react-markdown features'>
      <ul className="">
        {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map((_,) => (
          <li key={faker.number.int()}>
            {faker.hacker.adjective()}
          </li>
        ))}
      </ul>
    </div>
  );
};