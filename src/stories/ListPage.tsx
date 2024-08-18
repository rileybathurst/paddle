// this is the Name.tsx file
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PaddleBreadcrumbs } from './PaddleBreadcrumbs';
import { faker } from '@faker-js/faker';

export const ListPage = () => {

  return (
    <>
      <Header />
      <main className="pelican">
        <h1>{faker.animal.bear()}</h1>

        <ul className="faq">
          {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map((_,) => (
            <li key={faker.number.int()}>
              <h2>{faker.hacker.adjective()}</h2>
              <p>
                <span>{faker.lorem.sentence()}</span>
              </p>
            </li>
          ))}
        </ul>

      </main>
      <PaddleBreadcrumbs />
      <Footer />
    </>
  );
};