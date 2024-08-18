// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

interface PaddleBreadcrumbProps {
  primary?: boolean;
  onClick?: () => void;
}

export const PaddleBreadcrumb = ({
  primary = false,
  ...props
}: PaddleBreadcrumbProps) => {

  return (
    <li className="react-aria-Breadcrumb">
      <a href={faker.music.genre()}>
        {faker.music.genre()}
      </a>
    </li>
  );
};