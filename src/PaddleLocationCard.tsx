import * as React from "react"
import { Link } from 'gatsby';
import Markdown from "react-markdown";
import type { LocationCardTypes } from "./types/location-card-types";
import HourMin from "./hour-min";
import Phone from "./phone";

interface SeasonTypes {
  season_start?: string;
  season_end?: string;

  opening_time: string;
  closing_time: string;
  name: string;
}
function Season({ name, season_start, season_end, opening_time, closing_time }: SeasonTypes) {

  // TODO: these need a query but thats not the most important first step
  if (name === "Free Parking Lot" || name === "Parking" || name === "Delivery") {
    return null;
  }

  if (season_start && season_end) {
    const currentDay = new Date();
    const seasonStartDate = new Date(season_start);
    const seasonEndDate = new Date(season_end);

    if (currentDay > seasonStartDate || currentDay < seasonEndDate) {
      return (
        <p>
          {opening_time ? "Open Daily: " : null}<br />
          {opening_time && closing_time ? (
            <span><HourMin time={opening_time} /> - <HourMin time={closing_time} /></span>
          )
            : null}<br />
          Weather Permitting
        </p>
      )
    }
  }

  return (
    <p>
      We&apos;re closed for the season:<br />
      We will reopen<br />
      {season_start} - {season_end}<br />
      Weather Permitting
    </p>
  )
}

interface ContentTypes {
  svg: string;
  name: string;
  address: {
    data: {
      address: string;
    }
  };
  description: {
    data: {
      description: string;
    }
  };
  opening_time: string;
  closing_time: string;

  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  commonName?: string;

  season_start?: string;
  season_end?: string;

}
function Content({ svg, name, address, description, opening_time, closing_time, streetAddress, addressLocality, addressRegion, postalCode, commonName, season_start, season_end }: ContentTypes) {
  return (
    <>
      <div
        className="svg"
        dangerouslySetInnerHTML={{ __html: svg }}
      />

      <div>

        {streetAddress || addressLocality || addressRegion || postalCode || commonName ? (
          <>
            <h3 className="elbrus">{name}</h3>
            <address>
              {commonName ? <span>{commonName}<br /></span> : null}
              {streetAddress ? <span>{streetAddress}<br /></span> : null}
              {addressLocality ? <span>{addressLocality}, </span> : null}
              {addressRegion ? <span>{addressRegion} </span> : null}
              {postalCode ? <span>{postalCode}<br /></span> : null}
            </address>
          </>
        ) :

          (<>
            <h3 className="elbrus">{name}</h3>
            <Markdown className="react-markdown">
              {address.data.address}
            </Markdown>
          </>)}

      </div>

      <div>

        {opening_time && closing_time ? (
          <Season
            season_start={season_start}
            season_end={season_end}
            opening_time={opening_time}
            closing_time={closing_time}
            name={name}
          />
        ) : (
          <Markdown className="react-markdown" >
            {description.data.description}
          </Markdown>
        )}
      </div>
    </>
  )
}

export function PaddleLocationCard({ svg, name, link, address, description, opening_time, closing_time, background, streetAddress, addressLocality, addressRegion, postalCode, commonName, season_start, season_end, phone }: LocationCardTypes) {

  if (link.includes('http')) {
    return (
      <div className="location-wrapper">
        <a href={link}
          className={`location ${background}`}
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

          />
        </a>
        {name === "On Water Rental" && phone ? <Phone phone={phone} /> : null}
      </div>
    )
  }
  return (
    <div className="location-wrapper">
      <Link
        to={link}
        className={`location ${background}`}
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
        />
      </Link>
      {name === "On Water Rental" && phone ? <Phone phone={phone} /> : null}
    </div>
  )
}