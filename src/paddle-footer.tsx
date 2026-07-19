import * as React from "react"
import { Link } from "gatsby";
import type { PaddleFooterTypes } from "./types/paddle-footer-types";
import { PaddleFormatPhoneNumber } from "./paddle-format-phone-number";
import { PaddleSocials } from "./paddle-socials";
import { PaddleLocales } from "./paddle-locales";
import { PaddlePricingChart } from "./paddle-pricing-chart";
import { PaddleBookNow } from "./paddle-book-now";

export const PaddleFooter = ({
  topHR,
  strapiBranch,
  logo,
  allStrapiBranch,
  allStrapiConnection,
  allStrapiRentalRate,
  allStrapiLocation,
  MenuPlus,
}: PaddleFooterTypes) => {

  return (
    <footer className="aconcagua-padding-block-start">

      {topHR && <hr />}

      <div className="logo-container">
        <h3 className='sr-only'>
          <Link to="/">{strapiBranch.name}</Link>
        </h3>

        <Link to="/" className="logo-link elbrus-margin-block-end">
          {/* * react fragment can take either svg or img */}
          {logo}
        </Link>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>

      <div className="multi_button multi_button-center">
        <a
          href={`tel:${strapiBranch.phone}`}
          rel="norel norefferer"
          className="button"
        >
          Phone: <PaddleFormatPhoneNumber phoneNumberString={strapiBranch.phone} />
        </a>

        <a
          href={`mailto:${strapiBranch.email}`}
          rel="norel norefferer"
          className="button"
        >
          {strapiBranch.email}
        </a>
      </div>

      <section className="condor">

        <PaddleSocials
          instagram={strapiBranch.instagram || ""}
          facebook={strapiBranch.facebook || ""}
          tripadvisor={strapiBranch.tripadvisor || ""}
        />
        <hr />

        <div className="text-center">
          <h3>Our Partner Locations</h3>
          <ul>
            {allStrapiBranch.nodes.map((branch) => (
              <li key={branch.name}>
                <a href={branch.url}
                  target="_blank"
                  rel='noopener noreferrer'
                >
                  {branch.name} Kayak & Paddleboard
                </a>
              </li>
            ))}
          </ul>
        </div>

        {allStrapiConnection.nodes.length > 0 && (
          <div className="text-center">
            <hr />
            <h4>Explore Tahoe With</h4>
            <ul>
              {allStrapiConnection.nodes.map((connection) => (
                <li key={connection.name}>
                  <strong>
                    <a href={`${connection.link}/?=${strapiBranch.name}-Kayak-Paddleboard`}
                      target="_blank"
                      rel='noopener noreferrer'
                    >
                      {connection.name}
                    </a>
                  </strong><br />
                  {connection.excerpt}
                </li>
              ))}
            </ul>
            <h4>
              <Link to="/favorites">
                Explore more of {strapiBranch.name} off the water.
              </Link>
            </h4>
          </div>
        )}

      </section>

      <hr className="albatross" />

      <nav className="nav" aria-label="Footer navigation">
        {/* // * is always open */}
        <ul className="menu-list is-open">
          {MenuPlus.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          )
          )}
          <li key='book-now'>
            <PaddleBookNow
              peek_base={strapiBranch.peek_base}
              strapiBranchName={strapiBranch.name}
            />
          </li>
        </ul>
      </nav>


      <hr className="albatross" />

      <PaddlePricingChart
        rentalRates={allStrapiRentalRate}
        branches={strapiBranch}
      />

      <hr className="albatross" />

      <PaddleLocales
        season_start={strapiBranch.season_start}
        season_end={strapiBranch.season_end}
        phone={strapiBranch.phone}
        nodes={allStrapiLocation.nodes}
      />

    </footer>
  );
};