// TODO: faker with an internet connection
// this is the Name.tsx file
import React from 'react';
import { Link } from 'react-aria-components';
import { faker } from '@faker-js/faker';
import { BookNow } from './BookNow';

export const Card = () => {

  return (
    <div className='deck'>
      <Link href="#" className="card">
        <img
          src={faker.image.url()}
          alt=""
          className='card__placeholder'
        />
        <h4 className="card__title">
          {faker.location.city()}
        </h4>

        <div className="card__specs">
          <h4>
            18:30 - 20:30
          </h4>
          <h4>
            {/* // ? does this need capitalization */}
            {faker.helpers.arrayElement(['easy', 'medium', 'hard'])} <span className="card__span">Fitness</span>
          </h4>
        </div>
        <hr />
        <p>{faker.lorem.lines(2)}</p>
        <hr />
        <div className="card__details">
          <h5>${faker.number.int(100)}</h5>
          <BookNow />
        </div>
      </Link>
    </div>
  );
};