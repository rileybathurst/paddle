// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

export const PaddleBreadcrumb = () => {

  return (
    <li className="react-aria-Breadcrumb">
      <a href={faker.music.genre()}>
        {faker.music.genre()}
      </a>
    </li>
  );
};