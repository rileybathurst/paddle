// TODO: this page needs love

import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { faker } from '@faker-js/faker';
import { Pricing } from './Pricing';
import { Hero } from './Hero';

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

        <h3>
          <a href={faker.internet.url()}>
            {faker.lorem.sentence()}
          </a>
        </h3>
      </main>

      <div className='pelican'>
        <img
          src={faker.image.urlPicsumPhotos()}
          alt="Nature"
          className="poster storybook-ratio-2"
        />
      </div>

      <div className="condor">
        <section>

          <h2>{faker.location.city()} Rentals</h2>
          <p>{faker.lorem.paragraph()}</p>

          <p>{faker.lorem.paragraph()}</p>
        </section>



      </div>



      <Footer />
    </>
  );
};