// TODO: when I have an internet connection
// this is the Name.tsx file
import React from 'react';
import { Link } from 'react-aria-components';
import { faker } from '@faker-js/faker';
import { PaddleTime } from '../PaddleTime';

export const Ticket = () => {

  const time = PaddleTime({
    timeframe: faker.datatype.boolean() ? faker.helpers.arrayElement(['sunset', 'overnight']) : undefined,
    // ? faker boolean covering both start and finish
    start: faker.datatype.boolean() ? `${faker.number.int({ min: 1, max: 24 })}:${faker.number.int(60)}:00.000` : undefined,
    finish: faker.datatype.boolean() ? `${faker.number.int({ min: 1, max: 24 })}:${faker.number.int(60)}:00.000` : undefined,
    duration: faker.datatype.boolean() ? faker.number.int(200) : undefined,
    allStrapiSunsetTourTime: { nodes: [] },
    allStrapiMoonlightTourDateTime: { nodes: [] }
  });

  return (
    <section className="ticket"
      style={{ backgroundColor: faker.helpers.arrayElement(['#3A3A3A', '#2E2E2E', '#1E1E1E']) }}
    >
      <Link href={`/tours/${faker.location.city()}`}>
        <img src={faker.image.url()} alt={faker.lorem.words(2)} />
      </Link>
      <h4 className="card__title">
        <Link href={`/tours/${faker.location.city()}`}>
          {faker.location.city()}
        </Link>
      </h4>
      <div className="card__specs">
        <h4>{time.entry}</h4>
        {faker.datatype.boolean() ? <h4 className="capitalize">{faker.helpers.arrayElement(['easy', 'medium', 'hard'])} <span>Fitness</span></h4> : null}
      </div>
      <hr />
      <p>{faker.lorem.sentences(2)}</p>
      <hr />
      <div className="card__details">
        <h5>{faker.datatype.boolean() ? `$${faker.number.int(200)}` : null}</h5>
        <a
          href={faker.location.city()}
          className="book-now"
        >
          BOOK NOW
        </a>
      </div>

    </section>
  );
};