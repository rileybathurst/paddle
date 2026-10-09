// TODO: this page needs love

import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { faker } from '@faker-js/faker';
import { Pricing } from './Pricing';
import { Hero } from './Hero';
import { BookNow } from './BookNow';

export const Rentals = () => {

  return (
    <>
      <Header />

      <Hero />

      <div className='albatross'>
        <Pricing demos={true} />
        <hr />
      </div>

      <main className='condor'>
        <h1>Rentals Page</h1>
        <h2>{faker.location.city()} Rentals</h2>
        <p>{faker.lorem.paragraph()}</p>

        {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
          <section className='react-markdown relational-spacing' key={faker.number.int()}>
            <h3>{faker.location.city()} Rentals</h3>
            <p>{faker.lorem.paragraph()}</p>
            {faker.datatype.boolean() && (
              <p>
                <a
                  href={faker.location.city()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${faker.location.city()}`}
                >
                  {faker.location.city()}
                </a>
              </p>
            )}
            {faker.datatype.boolean() && (
              <React.Fragment>
                {/* // TODO: this shouldnt need the br */}
                {/* <br /> */}
                <BookNow />
              </React.Fragment>
            )}
          </section>
        )

        )}



      </main>




      <Footer topHR />
    </>
  );
};