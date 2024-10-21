import React from 'react';
import { faker } from '@faker-js/faker';
import { Link } from 'react-aria-components';
import { TopBar } from './TopBar';
import { Logo } from './Logo';

type HeaderTypes = {
  location?: 'tahoe-city' | 'south-tahoe';
};

export const Header = ({ location }: HeaderTypes) => (
  <header className={location}>
    <TopBar />
    <div className="logo-container" >
      <Link
        href="/"
        className="link__subtle"
      >
        <Logo />
      </Link>
      <h1 className='sr-only'>
        <Link
          href="/"
          className="link__subtle"
        >
          {faker.location.city()} kayak &amp; Paddleboard
        </Link>
      </h1>
    </div>
    {/* // TODO: <p>small nav is going to be a pain to build here I bet</p> */}
  </header>
);
