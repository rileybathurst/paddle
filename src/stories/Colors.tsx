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
      className='pelican'
    >
      <ColorCards color="tanager" variables={['100', '200', '300', '400']} />
      <ColorCards color="sand" variables={['100', '200', '300', '400']} />
      <ColorCards color="lake" variables={['100', '200', '300', '400', '500', '600', '700', '800']} />
      <ColorCards color="neutral" variables={['100', '200', '300', '400', '500', '600', '700', '800']} />
    </main>
  );
};