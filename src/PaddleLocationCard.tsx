// TODO: Season is super broken

import * as React from "react"
import { Link } from 'gatsby';
import Markdown from "react-markdown";
import type { LocationCardTypes } from "./types/location-card-types";
import HourMin from "./hour-min";

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
    console.log(`currentDay ${currentDay}`);
    const seasonStartDate = new Date(season_start);
    console.log(`season_start ${season_start}`);
    const seasonEndDate = new Date(season_end);
    console.log(`season_end ${season_end}`);


    if (currentDay > seasonStartDate || currentDay < seasonEndDate) {
      return (
        <p>
          {opening_time ? "Open Daily: " : null}
          <HourMin time={opening_time} />
          {opening_time ? " - : " : null}
          <HourMin time={closing_time} />
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
          <address>
            {commonName ? <span>{commonName}<br /></span> : null}
            {streetAddress ? <span>{streetAddress}<br /></span> : null}
            {addressLocality ? <span>{addressLocality}, </span> : null}
            {addressRegion ? <span>{addressRegion} </span> : null}
            {postalCode ? <span>{postalCode}<br /></span> : null}
          </address>
        ) :

          (<>
            <h3 className="elbrus">{name}</h3>
            <Markdown className="react-markdown">
              {address.data.address}
            </Markdown>
          </>)}

      </div>

      <div>
        <Season
          season_start={season_start}
          season_end={season_end}
          opening_time={opening_time}
          closing_time={closing_time}
          name={name}
        />
        <br />
        <Markdown className="react-markdown" >
          {description.data.description}
        </Markdown>
        {/* // TODO: add phone but dont break the link on link rule {name === "On Water Rental" ? <Phone /> : null} */}
      </div>
    </>
  )
}

export function PaddleLocationCard({ svg, name, link, address, description, opening_time, closing_time, background, streetAddress, addressLocality, addressRegion, postalCode, commonName, season_start, season_end }: LocationCardTypes) {

  console.log(`PaddleLocationCard season_start ${season_start}`);

  if (link.includes('http')) {
    return (
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
    )
  }
  return (
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
  )
}