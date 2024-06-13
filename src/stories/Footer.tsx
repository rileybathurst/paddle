// this is the Name.tsx file
import React from 'react';
import { Link } from 'react-aria-components';
import { faker } from '@faker-js/faker';

import { Pricing } from './Pricing';
import { LocationDeck } from './LocationDeck';
import { Socials } from './Socials';

function Deal() {

  const roll = faker.number.int(10);

  if (roll < 1) {
    return (
      <h1>double zero</h1>
    );
  }

  const content = [];
  for (let i = 0; i < roll; i++) {
    content.push(
      <li key={faker.location.city()}>
        <a href={faker.location.city()}
          target="_blank"
          rel='noopener noreferrer'
        >
          {faker.location.city()} Kayak &amp; Paddleboard
        </a>
      </li>
    );
  }

  return content;
}

interface FooterProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Footer = ({
  primary = false,
  ...props
}: FooterProps) => {

  return (
    <footer>
      <section>
        <h3 className='sr-only'>
          <Link href="/">{faker.company.name()}</Link>
        </h3>
        <Link href="/" className="logo-link">
          {/* // TODO: */}
          {/* <Logo /> */}
        </Link>
        <p>&copy; {new Date().getFullYear()}</p>
        <hr />
        <nav>
          {/* <MenuList /> */}
        </nav>
        <hr />
        <div className="footer__contact">
          {/* <Phone /> */}
          <a
            href={`mailto:${faker.internet.email()}`}
            rel="norel norefferer"
            className="button"
          >
            {faker.internet.email()}
          </a>
          <Socials />
        </div>
        <hr />
        <div className="footer__locations">
          <h3>Our Partner Locations</h3>
          <ul>
            <Deal />
          </ul>
        </div>
      </section>
      <section>
        <Pricing book={false} />
        <hr />

        <LocationDeck
          // locations={data.allStrapiLocation}
          background={false}
        />
      </section>

    </footer >
  );
};