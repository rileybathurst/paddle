import React from "react"
import { Link } from "gatsby";
import Markdown from "react-markdown";

import HourMin from "./hour-min";
import Phone from "./phone";
import type { PaddleLocationCardTypes } from "./types/paddle-location-card-types";
import SVG from 'react-inlinesvg';

// merged types are possible to dry this up but its also a lot
// type UpdatedUser = Merge<User, Updates>;
type PlaceTypes = {
  commonName?: string;
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
};
const Place = ({ commonName, streetAddress, addressLocality, addressRegion, postalCode }: PlaceTypes) => {
  return (
    <address>
      {commonName ? (<>{commonName},&nbsp;</>) : null}
      {streetAddress ? (<>{streetAddress},&nbsp;</>) : null}
      {addressLocality ? (<>{addressLocality},&nbsp;</>) : null}
      {addressRegion ? (<>{addressRegion},&nbsp;</>) : null}
      {postalCode ? (<>{postalCode},&nbsp;</>) : null}
    </address>
  )
}

interface SeasonTypes {
  season_start?: string;
  season_end?: string;

  opening_time: string;
  closing_time: string;
  name: string;
  offSeasonDetails?: string;
  weatherPermitting?: boolean;
}
const Season = ({
  name,
  season_start,
  season_end,
  opening_time,
  closing_time,
  offSeasonDetails,
  weatherPermitting
}: SeasonTypes) => {
  // TODO: these need a query but thats not the most important first step
  if (
    name === "Free Parking Lot" ||
    name === "Parking" ||
    name === "Delivery"
  ) {
    return null;
  }

  if (season_start && season_end) {
    const currentDay = new Date();
    const seasonStartDate = new Date(season_start);
    const seasonEndDate = new Date(season_end);

    if (currentDay >= seasonStartDate && currentDay <= seasonEndDate) {
      return (
        <p>
          {opening_time ? "Open Daily: " : null}
          {opening_time && closing_time ? (
            <><HourMin time={opening_time} /> - <HourMin time={closing_time} />&nbsp;</>
          ) : null}
          {weatherPermitting ? "Weather Permitting" : null}
        </p>
      );
    }

    // * outside of season
    return (
      <div>
        <p>We&apos;re closed for the season</p>

        {currentDay < seasonStartDate ? (
          <p>We will reopen {season_start}, Weather Permitting</p>
        ) : null}

        {offSeasonDetails ? <p>{offSeasonDetails}</p> : null}
      </div>
    );
  }

  // * no season defaults to off season
  // TODO: v1.3 add some enum error messages here for if this is allowed to not have a season
  return (
    <div>
      <p>We&apos;re closed for the season</p>
      {offSeasonDetails ? <p>{offSeasonDetails}</p> : null}
    </div>
  );
};

interface ContentTypes {
  link?: string;
  svg: string;
  name: string;

  description: {
    data: {
      description: string;
    };
  };
  opening_time: string;
  closing_time: string;

  season_start?: string;
  season_end?: string;

  offSeasonDetails?: string;
  phoneNumber?: number;
  weatherPermitting?: boolean;

  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  commonName?: string;
}
const PhoneContent = ({
  link,
  svg,
  name,
  description,
  opening_time,
  closing_time,
  streetAddress,
  addressLocality,
  addressRegion,
  postalCode,
  commonName,
  season_start,
  season_end,
  offSeasonDetails,
  phoneNumber,
  weatherPermitting
}: ContentTypes) => {
  return (
    <>
      {link?.includes("http") ? (
        <a
          href={link}
          className="svg"
          target="_blank"
          rel="noopener noreferrer"
          title={name}
        >
          <SVG src={svg} />
        </a>
      ) : (
        link && (
          <Link to={link} className="svg">
            <SVG src={svg} />
          </Link>
        )
      )}

      <div className="location_details">
        <div className="multi_button">
          {link?.includes("http") ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
            >
              <h3>{name}</h3>
            </a>
          ) : (
            link && (
              <Link to={link} title={name}>
                <h3>{name}</h3>
              </Link>
            )
          )}
          {phoneNumber && (
            <Phone phone={phoneNumber} />
          )}
        </div>

        {streetAddress ||
          addressLocality ||
          addressRegion ||
          postalCode ||
          commonName ? (

          link?.includes("http") ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
            >
              <Place
                commonName={commonName}
                streetAddress={streetAddress}
                addressLocality={addressLocality}
                addressRegion={addressRegion}
                postalCode={postalCode}
              />
            </a>
          ) : (
            link && (
              <Link to={link} title={name}>
                <Place
                  commonName={commonName}
                  streetAddress={streetAddress}
                  addressLocality={addressLocality}
                  addressRegion={addressRegion}
                  postalCode={postalCode}
                />
              </Link>
            )
          )
        ) : null}

        {opening_time && closing_time ? (
          <Season
            season_start={season_start}
            season_end={season_end}
            opening_time={opening_time}
            closing_time={closing_time}
            name={name}
            offSeasonDetails={offSeasonDetails}
            weatherPermitting={weatherPermitting}
          />
        ) : (
          <div className="react-markdown">
            <Markdown>{description.data.description}</Markdown>
          </div>
        )}
      </div>
    </>
  );
};

const Content = ({
  svg,
  name,
  description,
  opening_time,
  closing_time,
  streetAddress,
  addressLocality,
  addressRegion,
  postalCode,
  commonName,
  weatherPermitting,
  season_start,
  season_end,
  offSeasonDetails,
}: ContentTypes) => {
  return (
    <>
      <div className="svg">
        <SVG src={svg} />
      </div>

      <div className="location_details">
        <div className="multi_button">
          <h3>{name}</h3>
        </div>

        {streetAddress ||
          addressLocality ||
          addressRegion ||
          postalCode ||
          commonName ? (
          <Place
            commonName={commonName}
            streetAddress={streetAddress}
            addressLocality={addressLocality}
            addressRegion={addressRegion}
            postalCode={postalCode}
          />
        ) : null}

        {opening_time && closing_time ? (
          <Season
            season_start={season_start}
            season_end={season_end}
            opening_time={opening_time}
            closing_time={closing_time}
            name={name}
            offSeasonDetails={offSeasonDetails}
            weatherPermitting={weatherPermitting}
          />
        ) : (
          <div className="react-markdown">
            <Markdown>{description.data.description}</Markdown>
          </div>
        )}
      </div>
    </>
  );
};

export const PaddleLocationCard = ({
  svg,
  name,
  link,
  description,
  opening_time,
  closing_time,
  streetAddress,
  addressLocality,
  addressRegion,
  postalCode,
  commonName,
  season_start,
  season_end,
  phone,
  phoneNumber,
  offSeasonDetails,
  weatherPermitting
}: PaddleLocationCardTypes) => {

  const phoneDidgits = Number(phoneNumber);

  if (phone) {
    return (
      <div className="location">
        <PhoneContent
          link={link}
          svg={svg}
          name={name}
          description={description}
          opening_time={opening_time}
          closing_time={closing_time}
          streetAddress={streetAddress}
          addressLocality={addressLocality}
          addressRegion={addressRegion}
          postalCode={postalCode}
          commonName={commonName}
          season_start={season_start}
          season_end={season_end}
          offSeasonDetails={offSeasonDetails}
          phoneNumber={phoneDidgits}
          weatherPermitting={weatherPermitting}
        />
      </div>
    );
  }

  if (link.includes("http")) {
    return (
      <a
        href={link}
        className="location"
        target="_blank"
        rel="noopener noreferrer"
        title={name}
      >
        <Content
          svg={svg}
          name={name}
          description={description}
          opening_time={opening_time}
          closing_time={closing_time}
          streetAddress={streetAddress}
          addressLocality={addressLocality}
          addressRegion={addressRegion}
          postalCode={postalCode}
          commonName={commonName}
          season_start={season_start}
          season_end={season_end}
          offSeasonDetails={offSeasonDetails}
          weatherPermitting={weatherPermitting}
        />
      </a>
    );
  }
  return (
    <Link to={link} className="location">
      <Content
        svg={svg}
        name={name}
        description={description}
        opening_time={opening_time}
        closing_time={closing_time}
        streetAddress={streetAddress}
        addressLocality={addressLocality}
        addressRegion={addressRegion}
        postalCode={postalCode}
        commonName={commonName}
        season_start={season_start}
        season_end={season_end}
        offSeasonDetails={offSeasonDetails}
        weatherPermitting={weatherPermitting}
      />
    </Link>
  );
};
