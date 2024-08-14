// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

interface BreadcrumbProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Breadcrumb = ({
  primary = false,
  ...props
}: BreadcrumbProps) => {

  return (
    <li className="react-aria-Breadcrumb">
      <a href={faker.music.genre()}>
        {faker.music.genre()}
      </a>
    </li>
  );
};