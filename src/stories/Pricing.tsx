// TODO: more faker work to do different numbers

// TODO: use faker to actually build this up
import React from 'react';
import { faker } from '@faker-js/faker';

export const Pricing = ({ demos }: { demos?: boolean }) => {
  return (
    <div className="pricing-chart">
      <div className="column">
        <h4 className='title'>
          <a href={faker.internet.url()}>
            Rental
            <br />
            Rates
          </a>
        </h4>
        <p >1 Hour</p>
        <p>3 Hours</p>
        <p>Full Day</p>
        <p>Pedal Drive</p>
      </div>
      <div className="column">
        <h4 className='title'>
          Single
          <br />
          Kayak
        </h4>
        <p >${faker.number.int({ min: 20, max: 50 })}</p>
        <p>${faker.number.int({ min: 50, max: 70 })}</p>
        <p>${faker.number.int({ min: 70, max: 100 })}</p>
        <p>+ ${faker.number.int({ min: 5, max: 20 })}</p>

      </div>
      <div className="column">
        <h4 className='title'>
          Double
          <br />
          Kayak
        </h4>
        <p >${faker.number.int({ min: 40, max: 60 })}</p>
        <p>${faker.number.int({ min: 80, max: 100 })}</p>
        <p>${faker.number.int({ min: 100, max: 130 })}</p>
        <p>+ ${faker.number.int({ min: 10, max: 30 })}</p>
      </div>
      <div className="column">
        <h4 className='title'>
          Paddle
          <br />
          Board
        </h4>
        <p >${faker.number.int({ min: 20, max: 50 })}</p>
        <p>${faker.number.int({ min: 50, max: 70 })}</p>
        <p>${faker.number.int({ min: 70, max: 100 })}</p>
        <p>+ ${faker.number.int({ min: 5, max: 20 })}</p>
      </div>

      {demos ? (
        <>
          <div className="column">
            <h4 className='title'>
              Demo Single
              <br />
              Kayak
            </h4>
            <p >${faker.number.int({ min: 40, max: 60 })}</p>
            <p>${faker.number.int({ min: 80, max: 100 })}</p>
            <p>${faker.number.int({ min: 100, max: 130 })}</p>
            {/* <p>+ ${faker.number.int({ min: 10, max: 30 })}</p> */}
          </div>

          <div className="column">
            <h4 className='title'>
              Demo Double
              <br />
              Kayak
            </h4>
            <p >${faker.number.int({ min: 40, max: 60 })}</p>
            <p>${faker.number.int({ min: 80, max: 100 })}</p>
            <p>${faker.number.int({ min: 100, max: 130 })}</p>
            {/* <p>+ ${faker.number.int({ min: 10, max: 30 })}</p> */}
          </div>
        </>
      ) : null}
    </div>
  );
};
{/* <p>The borders follow the color of hr</p> */ }
{/* <hr /> */ }