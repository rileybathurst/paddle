// this is the Name.tsx file
import React from 'react';
import { Card } from './Card';

interface DeckProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Deck = ({
  primary = false,
  ...props
}: DeckProps) => {

  return (
    <div className='deck'>
      <Card />
      <Card />
    </div>
  );
};