// this is the Name.tsx file
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Deck } from './deck';
import { faker } from '@faker-js/faker';
import { BrandList } from './BrandList';
import { Hero } from './Hero';

export const RetailPage = () => {

  return (
    <>
      <Header />
      <Hero />
      <main className="">
        <h1 className="vinson-margin-block-end">Retail</h1>
        <p>{faker.lorem.paragraph()}</p>
        <hr />
      </main>

      {/* // TODO: I just repeat a bunch of times so its a mess */}
      {/* // ? what if i make this mega */}
      {Array.from({ length: faker.number.int({ min: 1, max: 3 }) }).map(() => {
        const color = faker.color.human();

        return (
          <React.Fragment key={faker.number.int()}>
            <section className="condor">

              <h2>
                <a href={faker.internet.url()}>
                  {color}s
                </a>
              </h2>
              <h3 className="vinson-margin-block-end">Browse By {color}</h3>
              <ul className="browse-by">
                {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map((_,) => (
                  <li key={faker.number.int()}>
                    <a href={faker.internet.url()}>
                      {faker.hacker.adjective()} {color}s
                    </a>
                  </li>
                ))}
              </ul>


              <h3 className="vinson-margin-block-end">Browse By {color}s</h3>
            </section>
            <div className="pelican">
              <BrandList />
            </div>

            {/* // TODO: specify the retail card */}
            < Deck />
            <h3 className="condor">
              <a href={faker.internet.url()}>
                All {color}s
              </a>
            </h3>
            <hr />
          </React.Fragment>
        );
      })}

      <div className="condor panel">
        <h3>
          <a href={faker.internet.url()}>
            Demos
          </a>
        </h3>
        <p>{faker.lorem.paragraph()}</p>
      </div>

      <Footer />
    </>
  );
};