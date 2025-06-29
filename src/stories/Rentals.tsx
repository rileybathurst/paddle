// this is the Name.tsx file
import React from 'react';
import { Header } from './Header';
import { Menu } from './Menu';
import { Footer } from './Footer';
import { Composition } from './Composition';
import { LocationDeck } from './LocationDeck';
import { faker } from '@faker-js/faker';

export const Rentals = () => {

  return (
    <>
      <Header />
      <Menu />

      <div className="albatross wrap">
        <main>
          <h1>Rentals Page</h1>
          <LocationDeck />
          <h2>{faker.location.city()} Rentals</h2>
          <p>{faker.lorem.paragraph()}</p>

          {/* // TODO: this can be tidied up to something more generic */}
          <a href={faker.internet.url()}>Frequently Asked Questions about getting out on the water</a>
        </main>
        <Composition />
      </div>

      <hr className='albatross' />

      <div className="albatross wrap">
        <section>

          <h2>{faker.location.city()} Rentals</h2>
          <p>{faker.lorem.paragraph()}</p>

          <p>We Rent:</p>
          <ul>
            <li>Float Tubes $25 per day Single Inflatable Kayaks</li>
            <li>$60 per day Double Inflatable Kayaks - $90 per day</li>
          </ul>

          <p>{faker.lorem.paragraph()}</p>
        </section>
        <div>

          <img
            src={faker.image.urlLoremFlickr({ category: 'nature' })}
            alt="Nature"
          />
        </div>

      </div>
      <Footer />
    </>
  );
};