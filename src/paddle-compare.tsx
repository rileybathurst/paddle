// ! this is the next fix

import React, { useState } from "react";

// import { PaddleTime } from './paddle-time';
import { PaddleBookNow } from './paddle-book-now';
import type { PaddleCompareTypes } from './types/paddle-compare-types';

type CompareDetailsTypes = {
  title: string;
  onTourChange: (value: string) => void;
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
  onTourChange,
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
}: CompareDetailsTypes) => {
  return (
    <section>
      <select
        name="tour1"
        id={title}
        className="comparesheet_select"
        aria-label="Select first tour or lesson"
        value={title}
        onChange={(e) => onTourChange(e.target.value)}
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

  let [tour1, setTour1] = useState(tours[0].name || "Tour 1");
  let [tour2, setTour2] = useState(tours[1].name || "Tour 2");
  let [link1, setLink1] = useState(tours[0].slug || "not set");
  let [link2, setLink2] = useState(tours[1].slug || "not set");
  let [sport1, setSport1] = useState(tours[0].sport || "not set");
  let [sport2, setSport2] = useState(tours[1].sport || "not set");
  let [duration1, setDuration1] = useState(tours[0].duration || "not set");
  let [duration2, setDuration2] = useState(tours[1].duration || "not set");
  let [timeframe1, setTimeframe1] = useState(tours[0].timeframe || "not set");
  let [timeframe2, setTimeframe2] = useState(tours[1].timeframe || "not set");
  let [start1, setStart1] = useState(tours[0].start || "not set");
  let [start2, setStart2] = useState(tours[1].start || "not set");
  let [finish1, setFinish1] = useState(tours[0].finish || "not set");
  let [finish2, setFinish2] = useState(tours[1].finish || "not set");
  let [location1, setLocation1] = useState(tours[0].location || strapiBranchName);
  let [location2, setLocation2] = useState(tours[1].location || strapiBranchName);
  let [excerpt1, setExcerpt1] = useState(tours[0].excerpt || "not set");
  let [excerpt2, setExcerpt2] = useState(tours[1].excerpt || "not set");
  let [minimum1, setMinimum1] = useState(tours[0].minimum || 0);
  let [minimum2, setMinimum2] = useState(tours[1].minimum || 0);
  let [price1, setPrice1] = useState(tours[0].price || 0);
  let [price2, setPrice2] = useState(tours[1].price || 0);
  let [peeks1, setPeeks1] = useState(tours[0].peek || "not set");
  let [peeks2, setPeeks2] = useState(tours[1].peek || "not set");
  let [fitness1, setFitness1] = useState(tours[0].fitness || "fitness");
  let [fitness2, setFitness2] = useState(tours[1].fitness || "fitness");

  const updateTour1 = (selectedName: string) => {
    const selectedTour = tours.find((tour) => tour.name === selectedName);
    if (!selectedTour) return;

    setTour1(selectedTour.name);
    setLink1(selectedTour.slug || "not set");
    setSport1(selectedTour.sport || "not set");
    setDuration1(selectedTour.duration || "not set");
    setTimeframe1(selectedTour.timeframe || "not set");
    setStart1(selectedTour.start || "not set");
    setFinish1(selectedTour.finish || "not set");
    setLocation1(selectedTour.location || strapiBranchName);
    setExcerpt1(selectedTour.excerpt || "not set");
    setMinimum1(selectedTour.minimum || 0);
    setPrice1(selectedTour.price || 0);
    setPeeks1(selectedTour.peek || "not set");
    setFitness1(selectedTour.fitness || "fitness");
  };

  const updateTour2 = (selectedName: string) => {
    const selectedTour = tours.find((tour) => tour.name === selectedName);
    if (!selectedTour) return;

    setTour2(selectedTour.name);
    setLink2(selectedTour.slug || "not set");
    setSport2(selectedTour.sport || "not set");
    setDuration2(selectedTour.duration || "not set");
    setTimeframe2(selectedTour.timeframe || "not set");
    setStart2(selectedTour.start || "not set");
    setFinish2(selectedTour.finish || "not set");
    setLocation2(selectedTour.location || strapiBranchName);
    setExcerpt2(selectedTour.excerpt || "not set");
    setMinimum2(selectedTour.minimum || 0);
    setPrice2(selectedTour.price || 0);
    setPeeks2(selectedTour.peek || "not set");
    setFitness2(selectedTour.fitness || "fitness");
  };

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
          onTourChange={updateTour1}
          link={link1}
          sport={sport1}
          duration={duration1}
          timeframe={timeframe1}
          start={start1}
          finish={finish1}
          location={location1}
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
          onTourChange={updateTour2}
          link={link2}
          sport={sport2}
          duration={duration2}
          timeframe={timeframe2}
          start={start2}
          finish={finish2}
          location={location2}
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