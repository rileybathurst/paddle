import React from "react"
import { Link } from "gatsby";
import Markdown from "react-markdown";

import HourMin from "./hour-min";
import Phone from "./phone";
import type { PaddleLocationTypes } from "./types/paddle-location-types";
import SVG from 'react-inlinesvg';

type SeasonTypes = {
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

  console.warn(`No season start or end date provided for ${name}. Defaulting to off season.`);
  return (
    <div>
      <p>We&apos;re closed for the season</p>
      {offSeasonDetails ? <p>{offSeasonDetails}</p> : null}
    </div>
  );
};

type ContentTypes = {
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
  phone?: number;
  weatherPermitting?: boolean;

  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  commonName?: string;
}

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
  phone,
}: ContentTypes) => {
  return (
    <React.Fragment>
      <div className="svg">
        <SVG src={svg} />
      </div>

      <div className="location-details">
        <h3>{name}</h3>

        {streetAddress ||
          addressLocality ||
          addressRegion ||
          postalCode ||
          commonName ? (
          <address>
            {commonName ? (<>{commonName},<br /></>) : null}
            {streetAddress ? (<>{streetAddress},<br /></>) : null}
            {addressLocality ? (<>{addressLocality},<br /></>) : null}
            {addressRegion ? (<>{addressRegion},&nbsp;</>) : null}
            {postalCode ? (<>{postalCode}</>) : null}
          </address>
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

        {phone && (
          <Phone phone={phone} />
        )}
      </div>
    </React.Fragment>
  );
};

export const PaddleLocation = ({
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
  offSeasonDetails,
  weatherPermitting
}: PaddleLocationTypes) => {

  const phoneDidgits = Number(phone);

  const content = (
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
  );

  return link.includes("http") ? (
    <div className={`location-wrapper ${phone ? 'phone-spacer' : ''}`}>
      <a
        href={link}
        className="location"
        target="_blank"
        rel="noopener noreferrer"
        title={name}
      >
        {content}
      </a>
      {phone && (
        <Phone phone={phoneDidgits} />
      )}
    </div>
  ) : (
    <div className={`location-wrapper ${phone ? 'phone-spacer' : ''}`}>
      <Link to={link} className="location">
        {content}
      </Link>
      {phone && (
        <Phone phone={phoneDidgits} />
      )}
    </div>
  );
};
