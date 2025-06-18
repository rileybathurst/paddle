// this is the Name.tsx file
import React from 'react';
import { Breadcrumb } from './Breadcrumb';
import { faker } from '@faker-js/faker';

export const Breadcrumbs = () => {

  return (
    <ol className='react-aria-Breadcrumbs aurora'>
      {Array.from({ length: faker.number.int({ min: 2, max: 4 }) }).map((_,) => (
        <Breadcrumb key={faker.number.int()} linked={true} />
      ))}
      {/* // TODO: not linked */}
      <Breadcrumb key={faker.number.int()} linked={false} />
    </ol>
  );
};