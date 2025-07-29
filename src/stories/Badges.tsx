// this is the Name.tsx file
import { faker } from '@faker-js/faker/locale/zu_ZA';
import React from 'react';

interface NameTypes {
  name: string;
}
const Name = ({ name }: NameTypes) => {
  return (
    <div className="badge">
      <h5 className="capitalize">{name}</h5>
    </div>
  );
}

export const Badges = () => {
  // TODO: deal with multiple

  // Discount
  if (faker.datatype.boolean()) {
    return (
      <div className="badge">
        <h5 className="capitalize">{faker.number.int({ min: 1, max: 100 })}% off</h5>
      </div>
    );
  }

  if (faker.datatype.boolean()) {
    return <Name name={faker.helpers.arrayElement(['inflatable', 'demo', faker.airline.airline().name])} />;
  }

  return null;
};