// ! this is not ready

import React, { useState } from 'react';

import Time from "../../components/time";
import BookNow from '../../components/peek/book-now';
import { PaddleTime } from './paddle-time';
import { PaddleBookNow } from './paddle-book-now';

const Option = (props) => {
  if (props.name === props.current) {
    return (
      <option selected key={props.key}>{props.name}</option>
    )
  }

  if (props.name === props.other) {
    return (
      <option disabled key={props.key}>{props.name}</option>
    )
  }

  return (
    <option key={props.key}>{props.name}</option>
  )
}

const first = (e) => {
  setTour1(e.target.value);
  return null;
}

const second = (e) => {
  setTour2(e.target.value);
  return null;
}

const Details1 = (props) => {
  props.set.forEach(element => {
    if (element.name === props.show) {
      setLink1(element.slug);
      setSport1(element.sport);
      setDuration1(element.duration);
      setStart1(element.start);
      setFinish1(element.finish);
      setFitness1(element.fitness);
      setLocation1(element.location);
      setExcerpt1(element.excerpt);
      setMinimum1(element.minimum);
      setPrice1(element.price);
      setPeeks1(element.peek);
    }
  });
  return null;
}

const Details2 = (props) => {
  props.set.forEach(element => {
    if (element.name === props.show) {
      setLink2(element.slug);
      setSport2(element.sport);
      setDuration2(element.duration);
      setStart2(element.start);
      setFinish2(element.finish);
      setFitness2(element.fitness);
      setLocation2(element.location);
      setExcerpt2(element.excerpt);
      setMinimum2(element.minimum);
      setPrice2(element.price);
      setPeeks2(element.peek);
    }
  });
  return null;
}

const CompareDetails = ({ key, title, link, sport, duration, start, finish, fitness, location, excerpt, minimum, price, peeks }) => {
  return (
    <section>
      {/* <select
        name="tour1"
        id={key}
        className="comparesheet_select"
        aria-label="Select first tour or lesson"
      >
        {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
          <option
            key={faker.string.uuid()}
            value={faker.food.dish()}
          >
            {faker.food.dish()}
          </option>
        ))}
      </select> */}
      <h2 className="kilimanjaro">
        <a href={link}>{title}</a>
      </h2>

      <h4 className="capitalize">{sport}</h4>

      <p>
        <PaddleTime
          start={start}
          finish={finish}
          duration={duration}
          timeframe={timeframe}
        />
      </p>

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
        peek_base={peeks1}
        strapiLocaleName={strapiLocaleName}
        specificLink={peeks1}
      />
    </section >
  )
}

type PaddleCompareTypes = {
  tours: {
    id: number;
    name: string;
    slug: string;
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
    peek?: string;
  }[];
  strapiLocaleName: string;
  peek_base: string;
};
export const PaddleCompare = ({ tours, strapiLocaleName, peek_base }: PaddleCompareTypes) => {

  const [id1, setID1] = useState(tours[0].id);
  const [id2, setID2] = useState(tours[1].id);

  const [tour1, setTour1] = useState(tours[0].name);
  const [tour2, setTour2] = useState(tours[1].name);

  const [link1, setLink1] = useState(tours[0].slug);
  const [link2, setLink2] = useState(tours[1].slug);

  const [sport1, setSport1] = useState(tours[0].sport);
  const [sport2, setSport2] = useState(tours[1].sport);

  const [duration1, setDuration1] = useState(tours[0].duration || 'not set');
  const [duration2, setDuration2] = useState(tours[1].duration || 'not set');

  const [start1, setStart1] = useState(tours[0].start || 'not set');
  const [start2, setStart2] = useState(tours[1].start || 'not set');

  const [finish1, setFinish1] = useState(tours[0].finish || 'not set');
  const [finish2, setFinish2] = useState(tours[1].finish || 'not set');

  const [excerpt1, setExcerpt1] = useState(tours[0].excerpt || 'not set');
  const [excerpt2, setExcerpt2] = useState(tours[1].excerpt || 'not set');

  const [minimum1, setMinimum1] = useState(tours[0].minimum || 0);
  const [minimum2, setMinimum2] = useState(tours[1].minimum || 0);

  const [price1, setPrice1] = useState(tours[0].price || 0);
  const [price2, setPrice2] = useState(tours[1].price || 0);

  const [peeks1, setPeeks1] = useState(tours[0].peek || 'not set');
  const [peeks2, setPeeks2] = useState(tours[1].peek || 'not set');

  const [fitness1, setFitness1] = useState(tours[0].fitness || 'fitness');
  const [fitness2, setFitness2] = useState(tours[1].fitness || 'fitness');

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

        <select
          name="tour1"
          // id={id1}
          className="comparesheet_select"
          aria-label="Select first tour or lesson"
        >
          {tours.map((tour) => (
            <option
              key={tour.id}
              value={tour.id}
            >
              {tour.name}
            </option>
          ))}
        </select>

        <CompareDetails
          key={id1}
          title={tour1}
          link={link1}
          sport={sport1}
          duration={duration1}
          timeframe={timeframe1}
          start={start1}
          finish={finish1}
          location={strapiLocaleName}
          excerpt={excerpt1}
          minimum={minimum1}
          price={price1}
          peeks={peeks1}
          fitness={fitness1}
          strapiLocaleName={strapiLocaleName}
          peek_base={peek_base}
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
          location={strapiLocaleName}
          excerpt={excerpt2}
          minimum={minimum2}
          price={price2}
          peeks={peeks2}
          fitness={fitness2}
          strapiLocaleName={strapiLocaleName}
          peek_base={peek_base}
        />

      </div>
    </>
  )
}