// this is the Name.tsx file
import React from "react";
import { Link } from "react-aria-components";
import { faker } from "@faker-js/faker";

import { Pricing } from "./Pricing";
import { Socials } from "./Socials";
import { Logo } from "./Logo";
import { MultiButton } from "./MultiButton";
import { BookNow } from "./BookNow";
import { Locales } from "./locales";

export const Footer = ({ topHR }: { topHR?: boolean }) => {
  return (
    <footer className="aconcagua-padding-block-start">

      {topHR && <hr />}

      <div className="logo-container logo-container_footer">
        <h3 className="sr-only">
          <Link href="/">{faker.company.name()}</Link>
        </h3>
        <Link href="/" className="logo-link">
          <Logo />
        </Link>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>

      <MultiButton />

      <hr />
      <nav className="nav" aria-label="Footer navigation">

        {/* // * is always open  */}
        <ul className="menu-list is-open">
          {Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(
            (_) => (
              <li key={faker.string.uuid()}>
                <a href={faker.animal.type()}>{faker.animal.type()}</a>
              </li>
            ),
          )}
          <li key={faker.string.uuid()}>
            <BookNow />
          </li>
        </ul>
      </nav>
      <hr />

      <Pricing />

      <hr />

      <Locales />

      <section className="condor">

        <Socials />
        <hr />
        <div>
          <h3 className="font-serif">Our Partner Locations</h3>
          <ul>
            {Array.from({
              length: faker.number.int({ min: 1, max: 5 }),
            }).map(() => (
              <li
                key={faker.location.city()}
                className="vinson-margin-block-end"
              >
                <a
                  href={faker.location.city()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {faker.location.city()} Kayak &amp; Paddleboard
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </footer>

  );
};
