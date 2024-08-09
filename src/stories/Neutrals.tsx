// * working on the first implementation of the color cards component

// this is the Name.tsx file
import React from 'react';
import { ColorCards } from 'color-cards';

interface NeutralsProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Neutrals = ({
  primary = false,
  ...props
}: NeutralsProps) => {

  return (
    <main>
      <h1>Neutrals</h1>
      <ColorCards
        color='mullen'
        variables={['100', '200']}
      />
      <ColorCards
        color='sand'
        variables={['100', '200']}
      />

    </main>
  );
};