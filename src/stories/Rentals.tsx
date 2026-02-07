// this is the Name.tsx file
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Composition } from './Composition';
import { LocationDeck } from './LocationDeck';
import { faker } from '@faker-js/faker';
import { Pricing } from './Pricing';

export const Rentals = () => {

  return (
    <>
      <Header />

      <div className="albatross wrap">
        <main className='condor'>
          <h1>Rentals Page</h1>
          <LocationDeck />
          <h2>{faker.location.city()} Rentals</h2>
          <p>{faker.lorem.paragraph()}</p>


          <h3>
            <a href={faker.internet.url()}>
              {faker.lorem.sentence()}
            </a>
          </h3>
        </main>
        <Composition />
      </div>

      <div className='albatross'>
        <Pricing demos={true} />
        <hr />
      </div>

      <div className="albatross wrap">
        <section>

          <h2>{faker.location.city()} Rentals</h2>
          <p>{faker.lorem.paragraph()}</p>

          <p>{faker.lorem.paragraph()}</p>
        </section>
        <div>

          <img
            src={faker.image.urlPicsumPhotos()}
            alt="Nature"
          />
        </div>

      </div>



      <Footer />
    </>
  );
};