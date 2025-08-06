import React from 'react';
import { faker } from '@faker-js/faker';
import { Link } from 'react-aria-components';
import { Header } from './Header';
import { Footer } from './Footer';
import { LocationDeck } from './LocationDeck';
import { Pricing } from './Pricing';
import { Breadcrumbs } from './Breadcrumbs';
import { Menu } from './Menu';
import { BookNow } from './BookNow';
import { Flight } from './Flight';
import { Testimonial } from './Testimonial';
import { Composition } from './Composition';
import { BrandList } from './BrandList';

export const Home = () => {

  return (
    <>
      <Header />
      <main className="albatross wrap">
        <section>

          <LocationDeck />

          <div className="multi_button">
            {Array.from({ length: faker.number.int({ min: 1, max: 3 }) }).map(() => (
              <BookNow additional={faker.datatype.boolean() ? `${faker.music.album().toUpperCase()} ` : undefined} />
            ))}
          </div>

          <div className='pelican'>
            <h2 className="kilimanjaro">
              <a href={faker.internet.domainName()}>
                {faker.company.catchPhrase()}
              </a>
            </h2>
            <div className="margin-block-end-aconcagua">
              <p>{faker.lorem.sentences(5)}</p>
            </div>
          </div>

        </section>

        <div>
          <Composition />

          <Pricing book={true} />
        </div>
      </main>

      <section id="tours" className="cloud aconcagua-padding-block-end">
        <div className='condor aconcagua-padding-block-start aconcagua-padding-block-end'>

          <h3 className="">
            <Link href={faker.internet.domainName()}>
              Tours
            </Link>
          </h3>
          <p>{faker.lorem.sentences(2)}</p>
        </div>

        <Flight />

        <h4 className='condor'>
          <Link href={faker.internet.domainName()}>
            Compare Tours
          </Link>
        </h4>
      </section>

      <section id="retail" className="pelican aconcagua-margin-block-start">
        <article>
          <h3>
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
        <BrandList />
        <hr className='aconcagua-margin-block-start aconcagua-margin-block-end' />
      </section>

      {/* specifically using a single here */}
      <ul className='pelican aconcagua-margin-block-end'>
        <Testimonial />
      </ul>

      <Breadcrumbs />
      <Footer />
    </ >
  );
};
