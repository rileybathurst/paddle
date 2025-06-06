// this is the Name.tsx file
import React from 'react';
import { Link } from 'react-aria-components';
import { faker } from '@faker-js/faker';
import { PaddleTime } from '../PaddleTime';
import { BookNow } from './BookNow';

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
    <section className="ticket">
      <Link href={faker.location.city()}>
        <img src={faker.image.url()} alt={faker.lorem.words(2)} />
      </Link>
      <div className='ticket__header'>
        <h4 className="ticket__title">
          <Link href={faker.location.city()}>
            {faker.location.city()}
          </Link>
        </h4>
        <div className='ticket__money'>
          <h5>{faker.datatype.boolean() ? `$${faker.number.int(200)}` : null}</h5>
          <BookNow />
        </div>
      </div>


      <div className="ticket__specs">
        <h4>{time.entry}</h4>
        {/* fitness */}
        {faker.datatype.boolean() ? <h4 className="capitalize">{faker.helpers.arrayElement(['easy', 'medium', 'hard'])} <span>Fitness</span></h4> : null}
      </div>
      <p>{faker.lorem.sentences(2)}</p>
    </section>
  );
};