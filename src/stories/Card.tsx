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
        {/*         <img
          src='https://tahoe-city-kayak.s3.us-west-1.amazonaws.com/textures/jason-leung-Oc81QL8Crtg-unsplash-hd.webp'
          alt=""
          className='card__placeholder'
        /> */}
        <h4 className="card__title">
          {faker.location.city()}
        </h4>

        <div className="card__specs">
          <h4>
            {/*             <time>
              18:30 - 20:30
            </time> */}
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