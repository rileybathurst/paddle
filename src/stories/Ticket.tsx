// TODO: when I have an internet connection
// this is the Name.tsx file
import React from 'react';
import { Link } from 'react-aria-components';
import { faker } from '@faker-js/faker';
import { PaddleTime } from '../PaddleTime';

interface TicketProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Ticket = ({
  primary = false,
  ...props
}: TicketProps) => {

  const time = PaddleTime({
    timeframe: faker.datatype.boolean() ? faker.helpers.arrayElement(['sunset', 'overnight']) : null,
    // ? faker boolean covering both start and finish
    start: faker.datatype.boolean() ? `${faker.number.int({ min: 1, max: 24 })}:${faker.number.int(60)}:00.000` : null,
    finish: faker.datatype.boolean() ? `${faker.number.int({ min: 1, max: 24 })}:${faker.number.int(60)}:00.000` : null,
    duration: faker.datatype.boolean() ? faker.number.int(200) : null
  });

  return (
    <section className="ticket">
      <Link href={`/tours/${faker.location.city()}`}>
        <img src={faker.image.url()} alt={faker.lorem.words(2)} />
      </Link>
      <h4 className="card__title">
        <Link href={`/tours/${faker.location.city()}`}>
          {faker.location.city()}
        </Link>
      </h4>
      <div className="card__specs">
        <h4>{time.key}</h4>
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