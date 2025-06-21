// TODO: this needs a whole design

// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

interface MoonlightProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Moonlight = ({
  primary = false,
  ...props
}: MoonlightProps) => {

  return (

    <div {...props}>
      <h3>Moonlight Tour Dates</h3>
      <ul>
        {/* // TODOL this needs a sort by date */}
        {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
          <li key={faker.string.uuid()} className='kilimanjaro'>
            {new Date(faker.date.anytime()).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}&nbsp;-&nbsp;
            {new Date(faker.date.anytime()).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            })}&nbsp;-&nbsp;
            {new Date(faker.date.anytime()).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </li>
        ))}
      </ul>
    </div>
  );
};