// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

export const MultiButton = () => {

  return (
    <div className="multi_button multi_button-center">
    <button type="button">{faker.phone.number()}</button>
    <a
      href={`mailto:${faker.internet.email()}`}
      rel="norel norefferer"
      className="button"
    >
      {faker.internet.email()}
    </a>
  </div>
  );
};