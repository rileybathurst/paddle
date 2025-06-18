// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

interface BreadcrumbProps {
  linked: boolean;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ linked }) => {
  return (
    <li className="react-aria-Breadcrumb">
      {linked ? (
        <a href={faker.music.genre()}>
          {faker.music.genre()}
        </a>
      ) : (
        faker.music.genre()
      )}
    </li>
  );
};