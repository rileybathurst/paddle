// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

export const Time = () => {

  const hairSpace = String.fromCharCode(0x200A);

  return (
    <>
      {faker.helpers.arrayElement([
        `${new Date(faker.date.anytime()).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })}
        ${hairSpace}-${hairSpace}Noon`,
        // TODO: im sure theres a way to check if its got an s with faker but thats kinda a pain
        `${faker.number.int({ min: 1, max: 10 })} hour(s)`,
        `${new Date(faker.date.anytime()).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })}
        ${hairSpace}-${hairSpace}
        ${new Date(faker.date.anytime()).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })}`

      ])}
    </>
  );
};