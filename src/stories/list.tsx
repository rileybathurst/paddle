// ? is this just features?

import React from 'react';
import { faker } from '@faker-js/faker';

export const List = () => {

  return (
    <React.Fragment>
      <h3>Default</h3>
      <ul>
        {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map((_,) => (
          <li key={faker.number.int()}>
            {faker.hacker.adjective()}
          </li>
        ))}
      </ul>

      <hr />

      <div className='react-markdown features'>
        <h3>Features</h3>
        <ul className="">
          {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map((_,) => (
            <li key={faker.number.int()}>
              {faker.hacker.adjective()}
            </li>
          ))}
        </ul>
      </div>

      <hr />

      <section className="condor">
        <h3 className="vinson-margin-block-end">Disc</h3>
        <ul className="list-style-disc">
          {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map((_,) => (
            <li key={faker.number.int()}>
              <a href={faker.internet.url()}>
                {faker.hacker.adjective()}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <hr />

      <section className="condor">
        {/* // ? what if i make this mega */}
        <h2>
          <a href={faker.internet.url()}>
            Kayaks
          </a>
        </h2>
        <h3 className="vinson-margin-block-end">Browse By {faker.color.human()}</h3>
        <ul className="browse-by">
          {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map((_,) => (
            <li key={faker.number.int()}>
              <a href={faker.internet.url()}>
                {faker.hacker.adjective()} Kayaks
              </a>
            </li>
          ))}
        </ul>
      </section>
    </React.Fragment>

  );
};