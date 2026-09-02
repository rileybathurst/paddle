// this is the Name.tsx file
import { faker } from '@faker-js/faker';
import React from 'react';

export const Flow = () => {

  return (
    <ul
      className="flow panel"
    >
      {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
        <li key={faker.string.uuid()}>
          <h2>{faker.food.ethnicCategory()}</h2>
          <section className="card">
            <h3>
              <a href={faker.internet.url()}>
                {faker.food.dish()}
              </a>
            </h3>
            <p>{faker.food.description()}</p>
          </section>
          <h5 className="flow-explore-more">
            <a href={faker.internet.url()}>Explore More</a>
          </h5>
        </li>
      ))}
    </ul>
  );
};