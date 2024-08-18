// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';
import { Composition } from './Composition';

export const Hero = () => {

  return (
    <>
      <div className='albatross wrap'>
        <main>
          <div className='condor'>
            <h1>{faker.animal.bear()}</h1>
            <p>{faker.lorem.sentence()}</p>
          </div>
        </main>
        <div>
          <div className='condor'>
            <Composition />
          </div>
        </div>
      </div>
    </>
  );
};