// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

export const Select = () => {

  return (
    <select
      className="comparesheet_select"
      name={faker.commerce.productName()}
      aria-label="Select a product"
    >
      {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
        <option
          key={faker.string.uuid()}
          value={faker.commerce.productName()}
        >
          {faker.commerce.productName()}
        </option>
      ))}
    </select>
  );
};