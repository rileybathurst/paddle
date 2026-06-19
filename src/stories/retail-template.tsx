// this is the Name.tsx file
import React from 'react';
import { Hero } from './Hero';
import { Header } from './Header';
import { Footer } from './Footer';
import { Deck } from './deck';
import { faker } from '@faker-js/faker';
import { Logo } from './Logo';

export const RetailTemplate = () => {

  return (
    <>
      <Header />

      <Hero />

      <main className="condor">
        {/* TODO: logo story */}
        <Logo />
        <h1>{faker.commerce.productName()}</h1>
        <hr />

        <p>{faker.commerce.productDescription()}</p>

        {/* {faker.datatype.boolean() && */}
        <>
          <hr />
          <h3>Features</h3>
          <div className="react-markdown features">
            <ul>

              {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
                <li>{faker.commerce.productAdjective()}</li>
              ))}
            </ul>
          </div>
        </>
        {/* } */}

        {/* {faker.datatype.boolean() && */}
        <section className="specs">
          <h3>SPECS:</h3>

          {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
            <div className="spec">
              <h2>{faker.commerce.product()}</h2>
              <h3>{faker.commerce.productMaterial()}</h3>
            </div>
          ))}
        </section>
        {/* } */}

        <hr />
      </main>

      {/* // TODO: specify the retail card */}
      <Deck />

      <Footer />
    </>
  );
};