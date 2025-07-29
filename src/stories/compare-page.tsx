// this is the Name.tsx file
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Breadcrumbs } from './Breadcrumbs';
import { faker } from '@faker-js/faker';
import { BookNow } from './BookNow';
import { Time } from './time';

// TODO: add some booleans to show a blank
const CompareDetails = () => {
  return (
    <section>
      <select
        name="tour1"
        id={faker.string.uuid()}
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
      </select>
      <h2 className="kilimanjaro">
        <a href={faker.food.ingredient()}>{faker.food.dish()}</a>
      </h2>

      <h4 className="capitalize">{faker.food.dish()}</h4>

      <p>
        <Time />
      </p>

      <p className="capitalize">
        {faker.datatype.boolean() && (
          <>
            {faker.helpers.arrayElement(['easy', 'medium', 'hard'])}
            <span className="show-below__vulture">&nbsp;fitness</span>
          </>
        )}
      </p>
      <p>

        <span className="show-below__vulture">Starts at&nbsp;</span>
        {faker.food.ethnicCategory()}
      </p>
      <p>{faker.food.description()}</p>
      <p>
        {faker.datatype.boolean() && (
          <>
            {faker.number.int({ min: 1, max: 10 })}
            <span className="show-below__vulture">&nbsp;people minimum</span>
          </>
        )}
      </p>
      <p>
        {faker.datatype.boolean() && (
          `${faker.number.int({ min: 1, max: 999 })}`
        )}
      </p>

      <BookNow />
    </section >
  )
}

export const ComparePage = () => {

  return (
    <>
      <Header smallMenu={false} />

      <main className="pelican">
        <h1>Compare</h1>
        <div className="comparesheet">
          <div className="comparesheet_titles">
            <div className="comparesheet__transparent">Compare</div>
            <h3 className="kilimanjaro comparesheet_freeze">
              Tour or
              <br />
              Lesson
            </h3>
            <p>Sport</p>
            <p>Time</p>
            <p>Fitness</p>
            <p>Location</p>
            <p>About</p>
            <p>Minimum People</p>
            <p>Price</p>
            <p className="button-drop">Book Now</p>
          </div>

          <CompareDetails />
          <CompareDetails />

        </div>
      </main >

      <Breadcrumbs />
      <Footer />
    </>
  );
};