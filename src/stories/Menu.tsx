// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';
import { BookNow } from './BookNow';

interface MenuProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Menu = ({
  primary = false,
  ...props
}: MenuProps) => {

  return (
    <nav className="menu__large" {...props}>
      <hr />
      <ul className="menu-list">
        {Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map((_,) => (
          <li key={faker.string.uuid()}>
            <a
              href='#'
            >
              {faker.animal.type()}
            </a>
          </li>
        ))}
        <BookNow />
      </ul>
      <hr />

    </nav>

  );
};