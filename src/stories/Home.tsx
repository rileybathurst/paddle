import React from 'react';
import { faker } from '@faker-js/faker';
import { Link } from 'react-aria-components';
import { Header } from './Header';
import { Footer } from './Footer';
import { Pricing } from './Pricing';
import { BookNow } from './BookNow';
import { Deck } from './deck';
import { Testimonial } from './Testimonial';
import { BrandList } from './BrandList';
import { Hero } from './Hero';

export const Home = () => {

  return (
    <>
      <Header />
      <main className="albatross">
        <Hero />

        <Pricing />

        <div className='pelican'>
          <div className="margin-block-end-aconcagua">
            <h2 className='denali'>
              {faker.company.catchPhrase()}
            </h2>

            <p>{faker.lorem.sentences(5)}</p>
          </div>
        </div>

        <div className="pelican multi_button">
          {Array.from({ length: faker.number.int({ min: 1, max: 3 }) }).map((_, index) => (
            <BookNow
              key={`book-now-${index}`}
              additional={faker.datatype.boolean() ? `${faker.music.album().toUpperCase()} ` : undefined}
            />
          ))}
        </div>
      </main>

      <section className="panel aconcagua-padding-block-end">
        <div className='condor aconcagua-padding-block'>

          <h3 className="font-serif">
            <Link href={faker.internet.domainName()}>
              Tours
            </Link>
          </h3>
          <p>{faker.lorem.sentences(2)}</p>
        </div>

        <Deck />

        <h4 className='condor'>
          <Link href={faker.internet.domainName()}>
            Compare Tours
          </Link>
        </h4>
      </section>

      <section id="retail" className="pelican aconcagua-margin-block-start">
        <article>
          <h3 className='font-serif'>
            <a
              href={faker.internet.domainName()}
              target="_blank"
              rel='noopener noreferrer'
            >
              Retail Store
            </a>
          </h3>

          <p>{faker.lorem.sentences(2)}</p>
        </article>
      </section>
      <BrandList />

      <Deck />

      <section className='panel aconcagua-margin-block-end everest-padding-block'>
        <ul className='pelican '>
          {/* specifically using a single here */}
          <Testimonial />
        </ul>
      </section>

      <Footer />
    </ >
  );
};
