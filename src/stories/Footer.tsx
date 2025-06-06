// this is the Name.tsx file
import React from 'react';
import { Link } from 'react-aria-components';
import { faker } from '@faker-js/faker';

import { Pricing } from './Pricing';
import { LocationDeck } from './LocationDeck';
import { Socials } from './Socials';
import { Logo } from './Logo';
import Phone from './Phone';
import { Menu } from './Menu';

export const Footer = () => {

  return (
    <>
      <Menu />
      <footer>
        <section>
          <div className="footer__contact">
            {/* <Phone phone={faker.phone} /> */}
            <button>{faker.phone.number()}</button>
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
              {Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() => (
                <li key={faker.location.city()}>
                  <a href={faker.location.city()}
                    target="_blank"
                    rel='noopener noreferrer'
                  >
                    {faker.location.city()} Kayak &amp; Paddleboard
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <Pricing book={false} />
          <hr />

          <LocationDeck />
        </section>

      </footer >
      <h3 className='sr-only'>
        <Link href="/">{faker.company.name()}</Link>
      </h3>
      <Link href="/" className="logo-link">
        <Logo />
      </Link>
      <p>&copy; {new Date().getFullYear()}</p>
    </>
  );
};