// this is the Name.tsx file
import React from 'react';
import { Ticket } from './Ticket';

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
      {/* // TODO: deal */}
      <Ticket />
      <Ticket />
    </div>
  );
};