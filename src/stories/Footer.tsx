// this is the Name.tsx file
import React from "react";
import { Link } from "react-aria-components";
import { faker } from "@faker-js/faker";

import { Pricing } from "./Pricing";
import { LocationDeck } from "./LocationDeck";
import { Socials } from "./Socials";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

export const Footer = () => {
  return (
    <>
      <footer className="cloud aconcagua-padding-block-start">
        <div className="pelican multi_button multi_button-center">
          <button type="button">{faker.phone.number()}</button>
          <a
            href={`mailto:${faker.internet.email()}`}
            rel="norel norefferer"
            className="button"
          >
            {faker.internet.email()}
          </a>
        </div>
        <div className="pelican">
          <Menu />
        </div>

        <div className="pelican wrap">
          <section>
            <LocationDeck />

            <div className="footer__contact">
              {/* <Phone phone={faker.phone} /> */}

              <Socials />
            </div>
            <hr />
            <div className="footer__locations">
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
          <section>
            <Pricing book={false} />
            <hr />
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
    </>
  );
};
