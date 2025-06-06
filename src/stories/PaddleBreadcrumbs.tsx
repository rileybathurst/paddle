// this is the Name.tsx file
import React from 'react';
import { PaddleBreadcrumb } from './PaddleBreadcrumb';
import { faker } from '@faker-js/faker';

export const PaddleBreadcrumbs = () => {

  return (
    <ol className='react-aria-Breadcrumbs aurora'>
      {Array.from({ length: faker.number.int({ min: 2, max: 4 }) }).map((_,) => (
        <PaddleBreadcrumb key={faker.number.int()} />
      ))}
    </ol>
  );
};