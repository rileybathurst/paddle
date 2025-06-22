import React from "react"
import { Link } from "gatsby";
import Markdown from "react-markdown";

import HourMin from "./hour-min";
import Phone from "./phone";
import type { PaddleLocationCardTypes } from "./types/location-card-types";

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
      {commonName ? (<>{commonName},&nbsp;</>) : null},&nbsp;
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
}
const Season = ({
  name,
  season_start,
  season_end,
  opening_time,
  closing_time,
  offSeasonDetails,
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
          Weather Permitting
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

  address: {
    data: {
      address: string;
    };
  };

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
  phone?: number;

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
  address,
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
  phone,
}: ContentTypes) => {
  return (
    <>
      {link?.includes("http") ? (
        <a
          href={link}
          className="location"
          target="_blank"
          rel="noopener noreferrer"
          title={name}
        >
          <div className="svg" dangerouslySetInnerHTML={{ __html: svg }} />
        </a>
      ) : (
        <Link to={link} className="location">
          <div className="svg" dangerouslySetInnerHTML={{ __html: svg }} />
        </Link>
      )}

      <div>
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
            <Link to={link} title={name}>
              <h3>{name}</h3>
            </Link>
          )}
          <Phone phone={phone} />
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
        ) : null}

        {opening_time && closing_time ? (
          <Season
            season_start={season_start}
            season_end={season_end}
            opening_time={opening_time}
            closing_time={closing_time}
            name={name}
            offSeasonDetails={offSeasonDetails}
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
  address,
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
}: ContentTypes) => {
  return (
    <>
      <div className="svg" dangerouslySetInnerHTML={{ __html: svg }} />

      <div>
        <div className="multi_button">
          <h3 className="elbrus">{name}</h3>
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
  address,
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
  offSeasonDetails,
}: PaddleLocationCardTypes) => {
  const phoneNumber = Number(phone);

  if (phone) {
    return (
      <div className="location">
        <PhoneContent
          link={link}
          svg={svg}
          name={name}
          address={address}
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
          phone={phoneNumber}
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
          address={address}
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
        />
      </a>
    );
  }
  return (
    <Link to={link} className="location">
      <Content
        svg={svg}
        name={name}
        address={address}
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
      />
    </Link>
  );
};
