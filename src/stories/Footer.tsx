// this is the Name.tsx file
import React from "react";
import { Link } from "react-aria-components";
import { faker } from "@faker-js/faker";

import { Pricing } from "./Pricing";
import { LocationDeck } from "./LocationDeck";
import { Socials } from "./Socials";
import { Logo } from "./Logo";
import { MultiButton } from "./MultiButton";
import { BookNow } from "./BookNow";

type FooterType = {
  startingHR?: boolean;
};
export const Footer = ({ startingHR }: FooterType) => {
  return (
    <React.Fragment>
      {startingHR && <hr className="pelican" />}

      <footer className="aconcagua-padding-block-start">
        
        <div className="pelican">
          <MultiButton />
        </div>
        
        <div className="pelican">
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
        </div>

        <div className="pelican wrap">
          <section className="condor">
            <LocationDeck />

            <Socials />
            <hr />
            <div>
              <h3>Our Partner Locations</h3>
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

          <section className="">
            <Pricing />
          </section>

        </div>

        <div className="logo-container logo-container_footer">
          <h3 className="sr-only">
            <Link href="/">{faker.company.name()}</Link>
          </h3>
          <Link href="/" className="logo-link">
            <Logo />
          </Link>
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </footer>

    </React.Fragment>
  );
};
