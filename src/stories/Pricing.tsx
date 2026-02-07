// this is the Name.tsx file
// add additional classNames as its confusing to style

// TODO: use faker to actually build this up
import React from 'react';
import { faker } from '@faker-js/faker';

type PricingTypes = {
  demos?: boolean;
};
export const Pricing = ({ demos }: PricingTypes) => {
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
        <p >$30</p>
        <p>$60</p>
        <p>$90</p>
        <p>+ $10</p>

      </div>
      <div className="column">
        <h4 className='title'>
          Double
          <br />
          Kayak
        </h4>
        <p >$45</p>
        <p>$90</p>
        <p>$110</p>
        <p>+ $20</p>
      </div>
      <div className="column">
        <h4 className='title'>
          Paddle
          <br />
          Board
        </h4>
        <p >$30</p>
        <p>$60</p>
        <p>$90</p>
        <p>+ $10</p>
      </div>

      {demos ? (
        <>
          <div className="column">
            <h4 className='title'>
              Demo Single
              <br />
              Kayak
            </h4>
            <p >$40</p>
            <p>$70</p>
            <p>$100</p>
            {/* <p>+ $10</p> */}
          </div>

          <div className="column">
            <h4 className='title'>
              Demo Double
              <br />
              Kayak
            </h4>
            <p >$40</p>
            <p>$70</p>
            <p>$100</p>
            {/* <p>+ $10</p> */}
          </div>
        </>
      ) : null}
    </div>
  );
};