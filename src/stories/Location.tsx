// this is the Name.tsx file
// TODO: these are way to similar for the reality of the design
import React from 'react';
import { faker } from '@faker-js/faker';

interface LocationProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Location = ({
  primary = false,
  ...props
}: LocationProps) => {

  return (
    <div {...props} className='location'>
      <a
        href="https://goo.gl/maps/atoK4oyJRbV3EKuK9"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
        >
          <title>{faker.location.city()}</title>
          <path d="M4 46v-3h2q1.55 0 3.075-.525Q10.6 41.95 12 40.55q1.4 1.4 2.925 1.925Q16.45 43 18 43q1.5 0 3.075-.55 1.575-.55 2.925-1.9 1.45 1.4 2.95 1.925Q28.45 43 30 43q1.5 0 3.075-.55 1.575-.55 2.925-1.9 1.35 1.35 2.925 1.9Q40.5 43 42 43h2v3h-2q-1.45 0-2.975-.425Q37.5 45.15 36 44q-1.5 1.15-3.025 1.575Q31.45 46 30 46q-1.45 0-2.975-.425Q25.5 45.15 24 44q-1.5 1.15-3.025 1.575Q19.45 46 18 46q-1.45 0-2.975-.425Q13.5 45.15 12 44q-1.5 1.15-3.025 1.575Q7.45 46 6 46Zm20-27.7q-1.5 0-2.575-1.075-1.075-1.075-1.075-2.575 0-1.5 1.075-2.575Q22.5 11 24 11q1.5 0 2.575 1.075 1.075 1.075 1.075 2.575 0 1.5-1.075 2.575Q25.5 18.3 24 18.3Zm-6 19.9q-1.65 0-3.25-.9T12 34.95q-.65.7-1.55 1.375T8.7 37.55q-1.95-.4-4.225-1.075Q2.2 35.8 0 35q2.65-1.05 6.875-2.1t7.775-1.65l2.8-8.95q.4-1.4 1.7-1.95 1.3-.55 2.55.1l5.3 2.8 6.05-3.2 3.5-8.1-1-2.65 2.4-5.25L43.4 6.5l-2.35 5.25-2.65 1-7.8 18.15q4.55.55 9.55 1.75 5 1.2 7.85 2.35-2.2.8-4.475 1.475-2.275.675-4.225 1.075-.85-.55-1.75-1.225T36 34.95q-1.15 1.45-2.75 2.35-1.6.9-3.25.9t-3.25-.9q-1.6-.9-2.75-2.35-1.15 1.45-2.75 2.35-1.6.9-3.25.9Zm10.45-7.55 2.6-6.2-4.05 2.1-3.8-1.9-1.8 5.85H24q1.15 0 2.225.025 1.075.025 2.225.125Z" />
        </svg>
      </a>

      <div>
        <a
          href="https://goo.gl/maps/atoK4oyJRbV3EKuK9"
          rel="noopener noreferrer"
        >
          <h3>{faker.helpers.arrayElement(['On Water Rental', 'Retail Location', 'Parking', 'Free Parking Lot', 'Delivery'])}</h3>
          {/* // TODO: faker boolean for telephone */}

          <p>{faker.location.secondaryAddress()} {faker.location.streetAddress()}, {faker.location.city()}, {faker.location.zipCode()}</p>
        </a>

        {/* // TODO: faker boolean for closed for the season */}
        <p>Open Daily 9:30am &ndash; 5:30pm Weather Permitting</p>
      </div>
    </div>
  );
};