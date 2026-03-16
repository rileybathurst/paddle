// ! this is the next fix

import React from 'react';

// import { PaddleTime } from './paddle-time';
import { PaddleBookNow } from './paddle-book-now';
import type { PaddleCompareTypes } from './types/paddle-compare-types';

type CompareDetailsProps = {
  title: string;
  link: string;
  sport: string;
  duration?: string;
  timeframe?: string;
  start?: string;
  finish?: string;
  fitness?: string;
  location: string;
  excerpt: string;
  minimum: number;
  price: number;
  peeks?: string;
  peek_base: string;
  strapiBranchName: string;

  // ? this can maybe loop from itself?
  tours: {
    id: React.Key;
    name: string;
    slug: string;
    sport: string;
    duration?: string;
    timeframe?: string;
    start?: string;
    finish?: string;
    excerpt?: string;
    minimum?: number;
    price?: number;
    peek?: string;
    fitness?: string;
  }[];
};

const CompareDetails = ({
  title,
  link,
  sport,
  // duration,
  // timeframe,
  // start,
  // finish,
  fitness,
  location,
  excerpt,
  minimum,
  price,
  peeks,
  peek_base,
  strapiBranchName,
  tours
}: CompareDetailsProps) => {
  return (
    <section>
      <select
        name="tour1"
        id={title}
        className="comparesheet_select"
        aria-label="Select first tour or lesson"
      >
        {tours.map((tour) => (
          <option
            key={tour.id}
            value={tour.name}
          >
            {tour.name}
          </option>
        ))}
      </select>
      <h2 className="kilimanjaro">
        <a href={link}>{title}</a>
      </h2>

      <h4 className="capitalize">{sport}</h4>

      {/* // TODO: time is more complex so just get it running first */}
      {/* <p>
        <PaddleTime
          start={start}
          finish={finish}
          duration={duration}
          timeframe={timeframe}
        />
      </p> */}

      <p className="capitalize">
        {fitness} <span className="show-below__vulture">&nbsp;fitness</span>
      </p>

      <p>
        <span className="show-below__vulture">Starts at&nbsp;</span>
        {location}
      </p>
      <p>{excerpt}</p>
      <p>
        {minimum} <span className="show-below__vulture">&nbsp;people minimum</span>
      </p>
      <p>
        ${price}
      </p>

      <PaddleBookNow
        peek_base={peek_base}
        strapiBranchName={strapiBranchName}
        specificLink={peeks}
      />
    </section >
  )
}


export const PaddleCompare = ({ tours, strapiBranchName, peek_base }: PaddleCompareTypes) => {

  // TODO: testing
  console.log(tours);
  console.log(strapiBranchName);
  console.log(peek_base);

  let id1 = tours[0].id;
  let id2 = tours[1].id;

  let tour1 = tours[0].name;
  let tour2 = tours[1].name;
  let link1 = tours[0].slug;
  let link2 = tours[1].slug;
  let sport1 = tours[0].sport;
  let sport2 = tours[1].sport;
  let duration1 = tours[0].duration || 'not set';
  let duration2 = tours[1].duration || 'not set';
  let timeframe1 = tours[0].timeframe || 'not set';
  let timeframe2 = tours[1].timeframe || 'not set';
  let start1 = tours[0].start || 'not set';
  let start2 = tours[1].start || 'not set';
  let finish1 = tours[0].finish || 'not set';
  let finish2 = tours[1].finish || 'not set';
  let excerpt1 = tours[0].excerpt || 'not set';
  let excerpt2 = tours[1].excerpt || 'not set';
  let minimum1 = tours[0].minimum || 0;
  let minimum2 = tours[1].minimum || 0;
  let price1 = tours[0].price || 0;
  let price2 = tours[1].price || 0;
  let peeks1 = tours[0].peek || 'not set';
  let peeks2 = tours[1].peek || 'not set';
  let fitness1 = tours[0].fitness || 'fitness';
  let fitness2 = tours[1].fitness || 'fitness';

  return (
    <>
      <div className='comparesheet'>
        <div className='comparesheet_titles'>
          <div className="comparesheet__transparent">Compare</div>
          <h3 className='kilimanjaro comparesheet_freeze'>
            Tour or<br />
            Lesson
          </h3>
          <p>Sport</p>
          <p>Time</p>
          <p>Fitness</p>
          <p>Location</p>
          <p>About</p>
          <p>Minimum People</p>
          <p>Price</p>
          <p className='button-drop'>Book Now</p>
        </div>

        <CompareDetails
          key={id1}
          title={tour1}
          link={link1}
          sport={sport1}
          duration={duration1}
          timeframe={timeframe1}
          start={start1}
          finish={finish1}
          location={strapiBranchName}
          excerpt={excerpt1}
          minimum={minimum1}
          price={price1}
          peeks={peeks1}
          fitness={fitness1}

          strapiBranchName={strapiBranchName}
          peek_base={peek_base}

          tours={tours}
        />
        <CompareDetails
          key={id2}
          title={tour2}
          link={link2}
          sport={sport2}
          duration={duration2}
          timeframe={timeframe2}
          start={start2}
          finish={finish2}
          location={strapiBranchName}
          excerpt={excerpt2}
          minimum={minimum2}
          price={price2}
          peeks={peeks2}
          fitness={fitness2}

          strapiBranchName={strapiBranchName}
          peek_base={peek_base}

          tours={tours}

        />

      </div>
    </>
  )
}