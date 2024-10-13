// this is the Name.tsx file
import React from 'react';
import { ColorCards } from './ColorCards';

interface ColorsProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Colors = ({
  primary = false,
  ...props
}: ColorsProps) => {

  return (
    <main
      {...props}
    >
      <ColorCards color="mullen" variables={['100', '200', '300']} />
      <ColorCards color="sand" variables={['100', '150', '200', '300']} />
      <ColorCards color="navy" variables={['100', '200', '300']} />
      {/* // TODO: I dont know how to do whitesmoke */}
      <ColorCards color="" variables={['black-metal', 'black-out', 'raven-black', 'industrial-revolution', 'grey', 'cold-grey', 'tin-soldier', 'kingly-cloud', 'brilliance']} />
    </main>
  );
};