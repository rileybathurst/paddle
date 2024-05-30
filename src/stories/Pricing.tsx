// this is the Name.tsx file
import React from 'react';
import { BookNow } from './BookNow';

interface PricingProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Pricing = ({
  primary = false,
  ...props
}: PricingProps) => {

  return (
    <>
      <section className="charts">
        <div className="pricing-chart">
          <div className="column">
            <h4>
              Rental
              <br />
              Rates
            </h4>
            <p>1 Hour</p>
            <p>3 Hours</p>
            <p>Full Day</p>
          </div>
          <div className="column">
            <h4>
              Single
              <br />
              Kayak
            </h4>
            <p>$30</p>
            <p>$60</p>
            <p>$90</p>
          </div>
          <div className="column">
            <h4>
              Double
              <br />
              Kayak
            </h4>
            <p>$45</p>
            <p>$90</p>
            <p>$110</p>
          </div>
          <div className="column">
            <h4>
              Paddle
              <br />
              Board
            </h4>
            <p>$30</p>
            <p>$60</p>
            <p>$90</p>
          </div>
        </div>

        <div className="pricing-chart">
          <>
            <p className="test">Pedal Drive</p>
            <p className="test">+10</p>
            <p className="test">+20</p>
            <p className="">+10</p>
          </>
        </div>
      </section>

      <BookNow />
    </>
  );
};