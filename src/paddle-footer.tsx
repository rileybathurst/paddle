import * as React from "react"
import { Link } from "gatsby";
import { PaddleFooterTypes } from "./types/paddle-footer-types";
import { PaddleFormatPhoneNumber } from "./paddle-format-phone-number";
import { PaddleSocials } from "./paddle-socials";
import { PaddleLocales } from "./paddle-locales";
import { PaddlePricingChart } from "./paddle-pricing-chart";

export const PaddleFooter = ({
  topHR,
  strapiBranch,
  logo,
}: PaddleFooterTypes) => {

  return (
    <footer className="aconcagua-padding-block-start">

      {topHR && <hr />}

      <div className="logo-container logo-container_footer">
        <h3 className='sr-only'>
          <Link to="/">{strapiBranch.name}</Link>
        </h3>

        <Link to="/" className="logo-link">
          {/* // TODO: checks on this for SVG or img */}
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

        <div>
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

      </section>

      <hr className="albatross" />

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