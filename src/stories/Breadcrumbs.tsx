// this is the Name.tsx file
import React from 'react';
import { Breadcrumb } from './Breadcrumb';
import { faker } from '@faker-js/faker';

interface BreadcrumbsProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Breadcrumbs = ({
  primary = false,
  ...props
}: BreadcrumbsProps) => {

  return (
    <ol className='react-aria-Breadcrumbs'>
      {Array.from({ length: faker.number.int({ min: 1, max: 4 }) }).map((_,) => (
        <Breadcrumb key={faker.number.int()} />
      ))}
    </ol>
  );
};