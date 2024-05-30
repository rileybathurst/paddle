// havent figured out how to get this in yet

import React from 'react';
import { faker } from '@faker-js/faker';

export const Deal = () => {
  const roll = faker.number.int(10);
  if (roll < 1) {
    return (
      <h1>There are no cards available</h1>
    );
  }

  // <Ticket key={i} />
  const content = [];
  for (let i = 0; i < roll; i++) {
    content.push(
      { i }
    );
  }

  console.log(content);

  return (
    <>
      {content.map((piece) => (
        piece.i
      ))}
    </>
  );
}