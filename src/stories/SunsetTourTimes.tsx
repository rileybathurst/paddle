// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

export const SunsetTourTimes = () => {

  return (
    <>
      <p>We adapt the time of our sunset tour to the sun</p>
      <section className="paddle-sunset-tour-times">

        {Array.from({ length: faker.number.int({ min: 2, max: 4 }) }).map(() => (
          <div
            key={faker.number.int()}
            className='date-time'
            style={{ borderBlockStartColor: 'gray' }}
          >
            <h3 className='date elbrus'>
              <strong>{faker.date.anytime().toLocaleString('en-US', { month: 'short' })}</strong> {faker.date.anytime().toLocaleString('en-US', { day: 'numeric' })}
              &nbsp;-&nbsp;
              <strong>{faker.date.anytime().toLocaleString('en-US', { month: 'short' })}</strong> {faker.date.anytime().toLocaleString('en-US', { day: 'numeric' })}
            </h3>
            <p className='time'
              style={{ backgroundColor: 'white' }}
            >
              {/* Tour Times:&nbsp; */}
              {faker.date.anytime().getHours()}:{faker.date.anytime().getMinutes()}
              &nbsp;-&nbsp;
              {faker.date.anytime().getHours()}:{faker.date.anytime().getMinutes()}
            </p>
          </div>
        ))}
      </section >
    </>
  );
};