// TODO: this is not ready dont use it
// Vite runs so I feel like I can pull this into it for testing itll be abit of a thing that might not be used but I think easier than storybook

import React from 'react';

// import { PaddleTime } from './paddle-time';
import { PaddleBookNow } from './paddle-book-now';

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
  strapiBranchName }: CompareDetailsProps) => {
  return (
    <section>
      {/* <select
        name="tour1"
        id={title}
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
  strapiBranchName: string;
  peek_base: string;
};
export const PaddleCompare = ({ tours, strapiBranchName, peek_base }: PaddleCompareTypes) => {

  /* const [id1, setID1] = useState(tours[0].id);
  const [id2, setID2] = useState(tours[1].id);

  const [tour1, setTour1] = useState(tours[0].name);
  const [tour2, setTour2] = useState(tours[1].name);

  const [link1, setLink1] = useState(tours[0].slug);
  const [link2, setLink2] = useState(tours[1].slug);

  const [sport1, setSport1] = useState(tours[0].sport);
  const [sport2, setSport2] = useState(tours[1].sport);

  const [duration1, setDuration1] = useState(tours[0].duration || 'not set');
  const [duration2, setDuration2] = useState(tours[1].duration || 'not set');

  const [timeframe1, setTimeframe1] = useState(tours[0].timeframe || 'not set');
  const [timeframe2, setTimeframe2] = useState(tours[1].timeframe || 'not set');

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
  const [fitness2, setFitness2] = useState(tours[1].fitness || 'fitness'); */

  // I dont know if this works as a state but I need to slowly build it all back out as its a mess
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
          location={strapiBranchName}
          excerpt={excerpt1}
          minimum={minimum1}
          price={price1}
          peeks={peeks1}
          fitness={fitness1}
          strapiBranchName={strapiBranchName}
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
          location={strapiBranchName}
          excerpt={excerpt2}
          minimum={minimum2}
          price={price2}
          peeks={peeks2}
          fitness={fitness2}
          strapiBranchName={strapiBranchName}
          peek_base={peek_base}
        />

      </div>
    </>
  )
}