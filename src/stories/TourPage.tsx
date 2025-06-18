// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';
import { Header } from './Header';
import { Footer } from './Footer';
import { Breadcrumbs } from './Breadcrumbs';
import { Composition } from './Composition';
import { SunsetTourTimes } from './SunsetTourTimes';

export const TourPage = () => {

  return (
    <>
      <Header />

      <div className='albatross wrap'>
        <main>
          <h1>{faker.animal.bear()}</h1>
          <p>{faker.lorem.sentence()}</p>

          {/* <Specs /> */}
        </main>
        {/* // ? this is wrapping down rather than across */}
        <Composition />
      </div>

      <div className='react-markdown single__description'>
        <SunsetTourTimes />
      </div>


      <Breadcrumbs />
      <Footer />
    </>
  );
};