import React from 'react';
import { faker } from '@faker-js/faker';
import { Header } from './Header';
import { Footer } from './Footer';
import { PaddleBreadcrumbs } from './PaddleBreadcrumbs';
import { Composition } from './Composition';

export const Page = () => {

  return (
    <>
      <Header />

      <div className='albatross wrap'>
        <main>
          <h1>{faker.animal.bear()}</h1>
          <p>{faker.lorem.sentence()}</p>
        </main>
        {/* // ? this is wrapping down rather than across */}
        <Composition />
      </div>

      <PaddleBreadcrumbs />
      <Footer />
    </>
  );
};
